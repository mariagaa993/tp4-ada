import React, { Fragment } from 'react';
import Card from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
// import {useParams} from 'react-router-dom';

const ListSeries = ({dataPopularSeries, dataTopRatedSeries, dataOnAirSeries}) => {
    // const {id} = useParams()

  	return (
        <Fragment>
            <h3>Series Populares <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataPopularSeries.map(serie => {
                        return(
                            <Link to={`/tv/${serie.id}`}>
                                <Card
                                    key={serie.id}
                                    id={serie.id}
                                    poster={serie.poster_path}
                                    title={serie.name}                       
                                />
                            </Link>
                        );
                    })
                }
            </section>
            <h3>Series con mejores críticas <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataTopRatedSeries.map(serie => {
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
            <h3>Series al aire <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {
                    dataOnAirSeries.map(serie => {
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

export default ListSeries;
