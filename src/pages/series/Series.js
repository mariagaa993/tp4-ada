import React, { Fragment } from 'react';
import ContainerSeries from '../../components/ContainerSeries/ContainerSeries';
import Header from '../../components/Header/Header';

function MainContainer() {
    return (
        <Fragment>
            <Header />
            <main className="main-container">
                <ContainerSeries />
            </main>
        </Fragment>
    );
}

export default MainContainer;
