require('dotenv').config();

const axios = require('axios');
const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`;
const SEARCH_KEYWORD = "space";


const getMovies = async (pageCounter) => {
    try {
        const response = await axios.get(`${OMDB_API_URL}&s=${SEARCH_KEYWORD}&page=${pageCounter}`);
        return response.data.Search;
    } catch (err) {
        console.error(err);
    }
}


const getMovieDetailsById = async (movieId) => {


    try {
        const response = await axios.get(`${OMDB_API_URL}&i=${movieId}`);
        const movieDetails = {
            "imdbID": movieId,
            "Title": response.data.Title === "N/A" ? "" : response.data.Title,
            "Director": response.data.Director === "N/A" ? "" : response.data.Director,
            "Plot": response.data.Plot === "N/A" ? "" : response.data.Plot,
            "Poster": response.data.Poster === "N/A" ? "" : response.data.Poster
        }
        return movieDetails;
    } catch (err) {
        console.error(err);
    }


};

module.exports = { getMovies, getMovieDetailsById };







