import axios from 'axios';
import API_URL from '../data/ApiUrl';
import API_KEY from '../data/ApiKey';

export const getSeriesData = async () => {
    try{
        const seriesData = await axios.get(`${API_URL}trending/tv/day?api_key=${API_KEY}`)
        return seriesData.data.results;
    }
    catch(err){
        throw new Error(`Unhandled : ${err}`);
    }
}
