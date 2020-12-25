import React, { Fragment, useContext } from 'react';
import DataContext from '../../context/DataContext';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const ListData = () => {
const {dataMovies, dataSeries} = useContext(DataContext);
const {id} = useParams()

  	return (
        <Fragment>
            <h3>Películas que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataMovies.map(movie => {
                        return(
                            // <Link to={`/movie/${movie.id}`}>
                                <Card
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}                       
                                />
                            // </Link>
                        );
                    })
                }
            </section>
            <h3>Series que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataSeries.map(serie => {
                        return(
                            // <Link to={`/tv/${serie.id}`}>
                                <Card 
                                    key={serie.id}
                                    id={serie.id} 
                                    poster={serie.poster_path}
                                    title={serie.name}
                                    > 
                                </Card>
                            // </Link>
                        );
                    })
                }
            </section>
        </Fragment>
  	);
}

export default ListData;
