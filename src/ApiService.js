import axios from 'axios';

const API_KEY = '1a5f55f6d50e6cac082c25ce71739bfe'
const BASE_URL = 'https://api.themoviedb.org/3'
const LANG = 'en-US'

const fetchSearchAnyMovie = async (searchMovie) => {
    let result = null;
    try {
        const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=${LANG}&query=${searchMovie}&page=${page}&include_adult=false`);
        result = response;
    } catch (err) {
        console.error(error);
    }
    return result;
};

const fetchMovieById = async movieId => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANG}`);
    return response;
};

const fetchTrendMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=${LANG}`);
    return response;
};

const fetchGenresOfMovie = async () => {
    const genres = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    return genres;

};


export { fetchSearchAnyMovie, fetchMovieById, fetchTrendMovies, fetchGenresOfMovie };