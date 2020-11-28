import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './ContainerPeliculas.scss'
import Card from '../Card/Card';
import axios from 'axios';
import API_URL from '../../data/ApiUrl';
import API_KEY from '../../data/ApiKey';

function ContainerPeliculas() {

    const [dataTrendMovie, setDataTrendMovie] = useState([]);

    const getMovieData = async () => {
        try{
            const movieData = await axios.get(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
            const results = movieData.data.results;
            setDataTrendMovie(results)
        }
        catch(err){
            alert(`no cargó correctamente`, err)
        }
    }

    useEffect(() => {
        getMovieData();
    }, [])


    return (
        <div className="container-peliculas">
            <h3>Peliculas que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /> </h3> 
            <Card dataTrendMovie={dataTrendMovie}/>
        </div>
    )
}

export default ContainerPeliculas;
