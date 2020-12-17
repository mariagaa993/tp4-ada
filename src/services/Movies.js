import axios from 'axios';
import API_URL from '../data/ApiUrl';
import API_KEY from '../data/ApiKey';

export const getMoviesData = async () => {
    try{
        const movieData = await axios.get(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
        return movieData.data.results;
    }
    catch(err){
        throw new Error(`Unhandled : ${err}`);
    }
};

export const getPopularMoviesData = async () => {
    try{
        const movieData = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}`)
        return movieData.data.results;
    }
    catch(err){
        throw new Error(`Unhandled : ${err}`);
    }
};

export const getTopRatedMoviesData = async () => {
    try{
        const movieData = await axios.get(`${API_URL}movie/top_rated?api_key=${API_KEY}`)
        return movieData.data.results;
    }
    catch(err){
        throw new Error(`Unhandled : ${err}`);
    }
};

export const getNowPlayingMoviesData = async () => {
    try{
        const movieData = await axios.get(`${API_URL}movie/now_playing?api_key=${API_KEY}`)
        return movieData.data.results;
    }
    catch(err){
        throw new Error(`Unhandled : ${err}`);
    }
}
