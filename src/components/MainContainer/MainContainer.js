import React from 'react'
import ContainerPeliculas from '../ContainerPeliculas/ContainerPeliculas';
import ContainerSeries from '../ContainerSeries/ContainerSeries';
import './MainContainer.scss';

function MainContainer() {
    return (
        <main className="main-container">
            <ContainerPeliculas />
            <ContainerSeries />
        </main>
    )
}

export default MainContainer;
