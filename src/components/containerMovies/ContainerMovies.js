import React, { useEffect, useReducer } from 'react'
import ListMovies from '../listMovies/ListMovies';
import { getPopularMoviesData, getTopRatedMoviesData, getNowPlayingMoviesData } from '../../services/Movies';
import { INIT_DATA, reducer } from '../../reducers/Reducers';

const ContainerMovies = () => {
    const [dataPopularMovies, popularMoviesDispatch] = useReducer(reducer, []);
    const [dataTopRatedMovies, topRatedMoviesDispatch] = useReducer(reducer, []);
    const [dataNowPlayingMovies, nowPlayingMoviesDispatch] = useReducer(reducer, []);

    useEffect(() => {
        const promise = getPopularMoviesData();
        promise.then(data => popularMoviesDispatch({ type: INIT_DATA, payload: data }));
        const promise1 = getTopRatedMoviesData();
        promise1.then(data => topRatedMoviesDispatch({ type: INIT_DATA, payload: data }));
        const promise2 = getNowPlayingMoviesData();
        promise2.then(data => nowPlayingMoviesDispatch({ type: INIT_DATA, payload: data }));
    }, []);

    return (
        <div className="container-peliculas">
            <ListMovies 
                dataPopularMovies={dataPopularMovies} 
                dataTopRatedMovies={dataTopRatedMovies}
                dataNowPlayingMovies={dataNowPlayingMovies} />
        </div>
    );
}

export default ContainerMovies;