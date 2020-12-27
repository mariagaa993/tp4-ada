import React, {useReducer, useEffect, Fragment} from 'react'
import { getPopularMoviesData, getTopRatedMoviesData, getNowPlayingMoviesData } from '../../services/Movies';
import { getPopularSeriesData, getTopRatedSeriesData, getOnAirSeriesData } from '../../services/Series';
import { INIT_DATA, reducer } from '../../reducers/Reducers';
import {useParams} from 'react-router-dom';
import './WatchCard.scss';

const WatchCard = () => { 
    const {id} = useParams()
    const [popularMovies, popularMoviesDispatch] = useReducer(reducer, []);
    const [topRatedMovies, topRatedMoviesDispatch] = useReducer(reducer, [])
    const [nowPlayingMovies, nowPlayingMoviesDispatch] = useReducer(reducer, [])
    const [popularSeries, popularSeriesDispatch] = useReducer(reducer, []);
    const [topRatedSeries, topRatedSeriesDispatch] = useReducer(reducer, [])
    const [onAirSeries, onAirSeriesDispatch] = useReducer(reducer, [])

    useEffect(() => {
        const promise1 = getPopularMoviesData();
        promise1.then(data => popularMoviesDispatch({ type: INIT_DATA, payload: data }));
        const promise2 = getTopRatedMoviesData();
        promise2.then(data => topRatedMoviesDispatch({ type: INIT_DATA, payload: data }));
        const promise3 = getNowPlayingMoviesData();
        promise3.then(data => nowPlayingMoviesDispatch({ type: INIT_DATA, payload: data }));
    }, []);

    useEffect(() => {
        const promise1 = getPopularSeriesData();
        promise1.then(data => popularSeriesDispatch({ type: INIT_DATA, payload: data }));
        const promise2 = getTopRatedSeriesData();
        promise2.then(data => topRatedSeriesDispatch({ type: INIT_DATA, payload: data }));
        const promise3 = getOnAirSeriesData();
        promise3.then(data => onAirSeriesDispatch({ type: INIT_DATA, payload: data }));
    }, [])

    console.log(popularSeries)
    console.log(popularMovies)
    
    return(
        <Fragment>
            {
                popularMovies.map(movie =>{
                    if(id == movie.id){
                        return(
                            <section key={movie.id}>
                                <img className="img-prueba" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                            </section>
                        )
                    }
                })
            }
             {
                topRatedMovies.map(movie =>{
                    if(id == movie.id){
                        return(
                            <section key={movie.id}>
                                <img className="img-prueba" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                            </section>
                        )
                    }
                })
            }
            {
                nowPlayingMovies.map(movie =>{
                    if(id == movie.id){
                        return(
                            <section key={movie.id}>
                                <img className="img-prueba" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
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
            {
                topRatedSeries.map(serie =>{
                    if(id == serie.id){
                        return(
                            <section key={serie.id}>
                                <img className="img-prueba" src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`}/>
                            </section>
                        )
                    }
                })
            }
            {
                onAirSeries.map(serie =>{
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
