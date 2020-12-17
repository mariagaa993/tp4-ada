import React, { Fragment } from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ListData = ({dataMovies, dataSeries}) => {

  	return (
        <Fragment>
            <h3>Películas que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataMovies.map(movie => {
                        return(
                            <Card
                                key={movie.id}
                                id={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}                       
                            />
                        );
                    })
                }
            </section>
            <h3>Series que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataSeries.map(serie => {
                        return(
                            <Card
                                key={serie.id}
                                id={serie.id} 
                                poster={serie.poster_path}
                                title={serie.name}                    
                            />
                        );
                    })
                }
            </section>
        </Fragment>
  	);
}

export default ListData;
