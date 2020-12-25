import React, {useReducer, useEffect, Fragment} from 'react'
import { getPopularMoviesData } from '../../services/Movies';
import { getPopularSeriesData } from '../../services/Series';
import { INIT_DATA, reducer } from '../../reducers/Reducers';
import {useParams} from 'react-router-dom';
import './WatchCard.scss';

const WatchCard = () => { 
    const {id} = useParams()
    const [popularMovies, popularMoviesDispatch] = useReducer(reducer, []);
    const [popularSeries, popularSeriesDispatch] = useReducer(reducer, []);

    useEffect(() => {
        const promise1 = getPopularMoviesData();
        promise1.then(data => popularMoviesDispatch({ type: INIT_DATA, payload: data }));
        const promise = getPopularSeriesData();
        promise.then(data => popularSeriesDispatch({ type: INIT_DATA, payload: data }));
    }, []);

    console.log(popularSeries)
    console.log(popularMovies)
    
    return(
        <Fragment>
            {
                popularMovies.map(movie =>{
                    if(id == movie.id){
                        return(
                            <section key={movie.id}>
                                {/* <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/k68nPLbIST6NP96JmTxmZijEvCA.jpg" alt="Tenet poster" class="sc-gzVnrw sc-kpOJdX gCnQHr loaded"></img> */}
                                {/* <img className="img-prueba" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/> */}
                                <h2>{movie.original_name}</h2>
                            </section>
                        )
                    }
                })
            }

            {
                popularSeries.map(serie =>{
                    if(id == serie.id){
                        return(
                            <section key={serie.id}>
                                <img className="img-prueba" src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`}/>
                            </section>
                        )
                    }
                })
            }
        </Fragment>
    )
}

export default WatchCard;
