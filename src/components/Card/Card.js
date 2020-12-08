import React from 'react'
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Card({dataMovies, dataSeries}) {
    
console.log(`la data llega a Card:`, dataMovies, dataSeries)

const pruebaMovies =  dataMovies.map(movie => {
    return(
        <figure className="card" key={movie.id}>
            <img className="card-img" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
            <figcaption className="card-img-titulo"><p>{movie.title}</p></figcaption>
        </figure>
    )
})

const pruebaSeries =  dataSeries.map(movie => {
    return(
        <figure className="card" key={movie.id}>
            <img className="card-img" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
            <figcaption className="card-img-titulo"><p>{movie.title}</p></figcaption>
        </figure>
    )
})

    return (
        <React.Fragment>
            <h3>Peliculas que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {pruebaMovies}
            </section>
            <h3>Series que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            <section className="container-card">
                {pruebaSeries}
            </section>
        </React.Fragment>
    )
}

export default Card;
