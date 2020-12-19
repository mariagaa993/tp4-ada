import React, { useEffect, useReducer } from 'react'
import ListSeries from '../listSeries/ListSeries';
import { getPopularSeriesData, getTopRatedSeriesData, getOnAirSeriesData } from '../../services/Series';
import { INIT_DATA, reducer } from '../../reducers/Reducers';

const ContainerSeries = () => {
    const [dataPopularSeries, popularSeriesDispatch] = useReducer(reducer, []);
    const [dataTopRatedSeries, topRatedSeriesDispatch] = useReducer(reducer, []);
    const [dataOnAirSeries, onAirSeriesDispatch] = useReducer(reducer, []);

    useEffect(() => {
        const promise = getPopularSeriesData();
        promise.then(data => popularSeriesDispatch({ type: INIT_DATA, payload: data }));
        const promise1 = getTopRatedSeriesData();
        promise1.then(data => topRatedSeriesDispatch({ type: INIT_DATA, payload: data }));
        const promise2 = getOnAirSeriesData();
        promise2.then(data => onAirSeriesDispatch({ type: INIT_DATA, payload: data }));
    }, []);

    return (
        <div className="container-peliculas">
            <ListSeries 
                dataPopularSeries={dataPopularSeries} 
                dataTopRatedSeries={dataTopRatedSeries}
                dataOnAirSeries={dataOnAirSeries} />
        </div>
    );
}

export default ContainerSeries;
