import React, { useEffect, useReducer } from 'react'
import './ContainerMS.scss'
import ListData from '../listData/ListData';
import { getMoviesData } from '../../services/Movies';
import { getSeriesData } from '../../services/Series';
import { INIT_DATA, reducer } from '../../reducers/Reducers';
import DataContext from '../../context/DataContext';

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
        <DataContext.Provider value={{dataMovies, dataSeries}}>
            <div className="container-peliculas">
                <ListData  />
            </div>
        </DataContext.Provider>
    );
}

export default ContainerPeliculas;
