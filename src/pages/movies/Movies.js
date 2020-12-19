import React, { Fragment } from 'react';
import ContainerMovies from '../../components/containerMovies/ContainerMovies';
import Header from '../../components/Header/Header';

function Movies() {
    return (
        <Fragment>
            <Header />
            <main className="main-container">
                <ContainerMovies />
            </main>
        </Fragment>
    );
}

export default Movies;
