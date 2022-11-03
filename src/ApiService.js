import axios from 'axios';

const API_KEY = '1a5f55f6d50e6cac082c25ce71739bfe'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANG = 'en-US'

const fetchTrendMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${LANG}`);
        } catch (err) {
        console.error(error);
    }
    return response;
};

const fetchSearchMovies = async (searchMovie) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${searchMovie}&include_adult=false`);
    } catch (err) {
        console.error(error);
    }
    return response;
};

const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANG}`);
    } catch (err) {
        console.error(error);
    }
    return response;
};

const fetchMovieCredits = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=${LANG}`);
    } catch (err) {
        console.error(error);
    }
    return response;
};

const fetchMovieReviews = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=${LANG}`);
    } catch (err) {
        console.error(error);
    }
    return response;
};



export { fetchTrendMovies, fetchSearchMovies, fetchMovieDetails, fetchMovieCredits, fetchMovieReviews };