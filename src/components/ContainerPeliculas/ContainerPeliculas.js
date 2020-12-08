import React, {useEffect, useReducer} from 'react'
import './ContainerPeliculas.scss'
import Card from '../Card/Card';
import { getMoviesData } from '../../services/Movies';
import { INIT_DATA, ReducerMovies, ReducerSeries } from '../../reducers/Reducers';
import { getSeriesData } from '../../services/Series';

function ContainerPeliculas() {
    const [dataMovies, moviesDispatch] = useReducer(ReducerMovies, []);
    const [dataSeries, seriesDispatch] = useReducer(ReducerSeries, []);

    const data = [dataMovies, dataSeries]

    useEffect(() => {
        const promise = getMoviesData();
        promise.then(data => moviesDispatch({ type: INIT_DATA, payload: data }));
    }, [])

    useEffect(() => {
        const promise = getSeriesData();
        promise.then(data => seriesDispatch({ type: INIT_DATA, payload: data }));
    }, [])

    const titulos = ["Películas que son tendencia",  "Series que son tendencia"]


    return (
        <React.Fragment>
            <div className="container-peliculas">
                    {/* return( */}
                        {/* <div> */}
                            {/* <h3>{titulo} <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3> */}
                        <Card dataMovies={dataMovies} dataSeries={dataSeries}/>
                        {/* </div> */}
            {/* <div className="container-peliculas">
                <h3>Peliculas que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /> </h3> 
                <Card dataMovies={dataMovies}/>
            </div>
            <div className="container-series">
                <h3>Series que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3> */}
                {/* <Card dataSeries={dataSeries}/> */}
            </div>
        </React.Fragment>
    )
}

export default ContainerPeliculas;
