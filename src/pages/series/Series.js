import React, { Fragment } from 'react';
import ContainerSeries from '../../components/containerSeries/ContainerSeries';
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
