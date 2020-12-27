import React, { Fragment } from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

const ListMovies = ({dataPopularMovies, dataTopRatedMovies, dataNowPlayingMovies}) => {

  	return (
        <Fragment>
            <h3>Películas Populares <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataPopularMovies.map(movie => {
                        return(
                            <Link to={`/movie/${movie.id}`}>
                                <Card
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}                       
                                />
                            </Link>
                        );
                    })
                }
            </section>
            <h3>Películas con mejores críticas <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                        dataTopRatedMovies.map(movie => {
                            return(
                                <Link to={`/movie/${movie.id}`}>
                                    <Card
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}                       
                                    />
                                </Link>
                            );
                        })
                }
            </section>
            <h3>Películas en cines <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataNowPlayingMovies.map(movie => {
                        return(
                            <Link to={`/movie/${movie.id}`}>
                                <Card
                                    key={movie.id}
                                    id={movie.id}
                                    poster={movie.poster_path}
                                    title={movie.title}                       
                                />
                            </Link>
                        );
                    })
                }
            </section>
        </Fragment>
  	);
}

export default ListMovies;
