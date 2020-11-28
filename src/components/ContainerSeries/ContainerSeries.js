import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './ContainerSeries.scss'
import Card from '../Card/Card';

function ContainerSeries() {
    return (
        <div className="container-series">
            <h3>Series que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
            {/* <Card/> */}
        </div>
    )
}

export default ContainerSeries;
