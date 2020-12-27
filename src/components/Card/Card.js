import React from 'react'
import './Card.scss';

const Card = ({id, poster, title}) => {

    return (
        <figure className="card" key={id}>
            <img className="card-img" src={`https://image.tmdb.org/t/p/w342/${poster}`} />
            <figcaption className="card-img-titulo">
                <p className="card-img-titulo-p">{title}</p>
            </figcaption>
        </figure>
    );
}

export default Card;
