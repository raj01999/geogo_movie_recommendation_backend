/**
 * Formating the response data
 * @param {*} data
 * @returns
 */
const formatResponse = (data) => {
  return {
    adult: data.adult,
    backdrop_path: data.backdrop_path,
    genre_ids: data.genres.map((ele) => ele.id),
    id: data.id,
    original_language: data.original_language,
    original_title: data.original_title,
    overview: data.overview,
    popularity: data.popularity,
    poster_path: data.poster_path,
    release_date: data.release_date,
    title: data.title,
    video: data.video,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
  };
};

module.exports = formatResponse;
