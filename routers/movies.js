const mongoose = require("mongoose");
const express = require("express");
const Movies = require("../model/movies");
const formatResponse = require("../utils/formatResponse");

/**
 * initializing the router
 */
const router = new express.Router();

/**
 * Add movie to the database
 */
router.post("/movie/add", async (req, res) => {
  try {
    /**
     * Verifying, if the movie is already exist
     */
    const registeredUser = await Movies.find({ id: req.body.id });
    if (registeredUser.length != 0) {
      return res.status(404).json({
        status: "Failed",
        message: "Movie already exist",
      });
    }
    const saveData = new Movies({
      ...req.body,
    });
    const data = await saveData.save();

    return res.status(200).json({
      status: "Success",
      message: `${data._id} is successfully added`,
      vlaue: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

/**
 * Update movie to database
 */
router.patch("/movie/update/:id", async (req, res) => {
  try {
    const data = await Movies.findOneAndUpdate(
      { id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );

    res.status(200).json({
      status: "Success",
      message: `${req.params.id} is successfully updated`,
      value: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

/**
 * Delete movie from database
 */
router.delete("/movie/update/:id", async (req, res) => {
  try {
    const data = await Movies.findOneAndDelete(
      { id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );

    let msg = `${req.params.id} is successfully deleted`;
    if (!data) {
      msg = `Movie not exist with id: ${req.params.id}`;
    }

    res.status(200).json({
      status: "Success",
      message: msg,
      value: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

/**
 * get movie from database
 */
router.get("/movie/data", async (req, res) => {
  try {
    const movies = await Movies.find({}).limit(24);
    const responseMovies = [];
    movies.forEach((data) => {
      const newData = formatResponse(data);
      responseMovies.push(newData);
    });

    return res.status(200).json({
      status: "Success",
      message: `Successfully fetch the movies`,
      value: responseMovies,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

/**
 * get movie from database by id
 */
router.get("/movie/data/:id", async (req, res) => {
  try {
    const movies = await Movies.find({ id: req.params.id });

    res.status(200).json({
      status: "Success",
      message: `Successfully fetch the movies`,
      value: movies[0] || {},
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

/**
 * get filtered movies from database
 */
router.post("/movie/filter", async (req, res) => {
  const [query, genre] = [req.query.query, req.body.genre];
  try {
    let queryOptions;
    if (genre.length > 0) {
      queryOptions = {
        $and: [
          {
            original_title: {
              $regex: query,
              $options: "i",
            },
          },
          {
            "genres.name": { $all: genre },
          },
        ],
      };
    } else {
      queryOptions = {
        original_title: {
          $regex: query,
          $options: "i",
        },
      };
    }
    const movies = await Movies.find(queryOptions).limit(24);
    const responseMovies = [];
    movies.forEach((data) => {
      const newData = formatResponse(data);
      responseMovies.push(newData);
    });

    return res.status(200).json({
      status: "Success",
      message: `Successfully fetch the movies`,
      value: responseMovies,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

/**
 * get movie data by multiple id
 */
router.post("/movie/user/:type", async (req, res) => {
  const type = req.params.type;
  const movie_ids = req.body.movie_ids;
  console.log(movie_ids);
  try {
    const queryOptions = {
      id: { $in: movie_ids },
    };

    const movies = await Movies.find(queryOptions);
    const responseMovies = [];
    movies.forEach((data) => {
      const newData = formatResponse(data);
      responseMovies.push(newData);
    });

    return res.status(200).json({
      status: "Success",
      message: `Successfully fetch the movies`,
      value: responseMovies,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

module.exports = router;
