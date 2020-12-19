import React, { useEffect, useReducer } from 'react'
import './ContainerMS.scss'
import ListData from '../listData/ListData';
import { getMoviesData } from '../../services/Movies';
import { getSeriesData } from '../../services/Series';
import { INIT_DATA, reducer } from '../../reducers/Reducers';

const ContainerPeliculas = () => {
    const [dataMovies, moviesDispatch] = useReducer(reducer, []);
    const [dataSeries, seriesDispatch] = useReducer(reducer, []);

    useEffect(() => {
        const promise1 = getMoviesData();
        promise1.then(data => moviesDispatch({ type: INIT_DATA, payload: data }));
        const promise = getSeriesData();
        promise.then(data => seriesDispatch({ type: INIT_DATA, payload: data }));
    }, []);

    return (
        <div className="container-peliculas">
            <ListData dataMovies={dataMovies} dataSeries={dataSeries} />
        </div>
    );
}

export default ContainerPeliculas;
