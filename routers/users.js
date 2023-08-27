const mongoose = require("mongoose");
const express = require("express");
const Users = require("../model/users");

/**
 * initializing the router
 */
const router = new express.Router();

/**
 * create new user in database
 */
router.post("/user/signup", async (req, res) => {
  try {
    /**
     * Verifying, if the user is already exist
     */
    const registeredUser = await Users.find({ user_id: req.body.user_id });
    if (registeredUser.length != 0) {
      return res.status(404).json({
        status: "Failed",
        message: "User already registered",
      });
    }

    /**
     * Creating the user in database {mongoDb}
     */
    const saveData = new Users({
      user_id: req.body.user_id,
      watch_later: [],
      liked: [],
    });
    const data = await saveData.save();

    res.status(200).json({
      status: "Success",
      message: `${req.body.user_id} is successfully registered`,
      value: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

/**
 * add user specifix liked and watch later
 */
router.post("/user/custom", async (req, res) => {
  let { user_id, movie_id, type } = { ...req.body };
  movie_id = Number(movie_id);
  try {
    /**
     * Verifying, if the user is already exist
     */
    const registeredUser = await Users.find({ user_id: user_id });
    if (registeredUser.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "User not found",
      });
    }

    let watch_later = registeredUser[0].watch_later;
    let liked = registeredUser[0].liked;

    if (type == "watch_later") {
      if (watch_later.includes(movie_id)) {
        watch_later = watch_later.filter((ele) => ele != movie_id);
      } else {
        watch_later = [...watch_later, movie_id];
      }
    } else if (type == "liked") {
      if (liked.includes(movie_id)) {
        liked = liked.filter((ele) => ele != movie_id);
      } else {
        liked = [...liked, movie_id];
      }
    }

    /**
     * updating user with information
     */
    const saveData = {
      watch_later,
      liked,
    };
    const data = await Users.findOneAndUpdate(
      { _id: registeredUser[0]._id },
      { $set: saveData },
      { new: true }
    );

    res.status(200).json({
      status: "Success",
      message: `${req.body.user_id} is successfully updated`,
      value: data,
    });
  } catch (err) {
    return res.status(500).json({
      status: "Failed",
      message: err.message,
    });
  }
});

module.exports = router;
