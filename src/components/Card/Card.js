import React, {useEffect, useState} from 'react'
// import judy from '../../assets/judy.jpg'
// import netflix from '../../assets/netflix.jpg'
import './Card.scss';

function Card({dataTrendMovie}) {
    
console.log(`la data llega a Card:`, dataTrendMovie)

    return (
        <section className="container-card">
            {
                dataTrendMovie.map(movie => {
                    return(
                        <figure className="card" key={movie.id}>
                            <img className="card-img" src={movie.poster_path} />
                            <figcaption className="card-img-titulo"><p>{movie.title}</p></figcaption>
                        </figure>
                    )
                })
            }
            <h2>hola</h2>

        </section>
    )
}

export default Card;
