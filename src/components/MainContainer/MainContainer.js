import React, { Fragment } from 'react';
import './MainContainer.scss';
import ContainerPeliculas from '../containerMS/ContainerMS';
import Header from '../Header/Header';

function MainContainer() {
    return (
        <Fragment>
            <Header />
            <main className="main-container">
                <ContainerPeliculas />
            </main>
        </Fragment>
    );
}

export default MainContainer;
