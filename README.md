### Backend : https://geogo-movie-recommendation-backend.onrender.com

### Frontend : https://willowy-quokka-e94a61.netlify.app

## _ How to use This Repository _

1. Clone the Repository.

```bash
git clone https://github.com/raj01999/geogo_movie_recommendation_backend.git
```

2. Move to working directory.

```bash
cd geogo_movie_recommendation_backend
```

3. Install all the dependencies.

```bash
npm install
```

4. Run the start command.

```bash
npm run start
```

5. Open the url to your browser {port: 8000}
   https://localhost:8000

6. Please use this type of format for storing movie data to database.

   One sample data :

```json
{
  "status": "Success",
  "message": "Successfully fetch the movies",
  "value": {
    "belongs_to_collection": {
      "id": 9485,
      "name": "The Fast and the Furious Collection",
      "poster_path": "/vEq10ZynOwHaSIIQ3mWohbHzvRb.jpg",
      "backdrop_path": "/z5A5W3WYJc3UVEWljSGwdjDgQ0j.jpg"
    },
    "_id": "64e9e5909e2a47b63d053f61",
    "adult": false,
    "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    "budget": 340000000,
    "genres": [
      {
        "id": 28,
        "name": "Action",
        "_id": "64e9e5909e2a47b63d053f62"
      },
      {
        "id": 80,
        "name": "Crime",
        "_id": "64e9e5909e2a47b63d053f63"
      },
      {
        "id": 53,
        "name": "Thriller",
        "_id": "64e9e5909e2a47b63d053f64"
      }
    ],
    "homepage": "https://fastxmovie.com",
    "id": 385687,
    "imdb_id": "tt5433140",
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "popularity": 1052.72,
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "production_companies": [
      {
        "id": 33,
        "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
        "name": "Universal Pictures",
        "origin_country": "US",
        "_id": "64e9e5909e2a47b63d053f65"
      },
      {
        "id": 333,
        "logo_path": "/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png",
        "name": "Original Film",
        "origin_country": "US",
        "_id": "64e9e5909e2a47b63d053f66"
      },
      {
        "id": 1225,
        "logo_path": "/rIxhJMR7oK8b2fMakmTfRLY2TZv.png",
        "name": "One Race",
        "origin_country": "US",
        "_id": "64e9e5909e2a47b63d053f67"
      },
      {
        "id": 34530,
        "logo_path": null,
        "name": "Perfect Storm Entertainment",
        "origin_country": "US",
        "_id": "64e9e5909e2a47b63d053f68"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America",
        "_id": "64e9e5909e2a47b63d053f69"
      }
    ],
    "release_date": "2023-05-17",
    "revenue": 704709660,
    "runtime": 142,
    "spoken_languages": [
      {
        "english_name": "Vietnamese",
        "iso_639_1": "vi",
        "name": "Tiếng Việt",
        "_id": "64e9e5909e2a47b63d053f6a"
      }
    ],
    "status": "Released",
    "tagline": "The end of the road begins.",
    "title": "Fast X",
    "video": false,
    "vote_average": 7.311,
    "vote_count": 3468,
    "__v": 0
  }
}
```
