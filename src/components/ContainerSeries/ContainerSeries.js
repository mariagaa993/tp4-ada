// import React, { useReducer, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import './ContainerSeries.scss'
// import Card from '../Card/Card';
// import { getSeriesData } from '../../services/Series';
// import { INIT_DATA, ReducerSeries } from '../../reducers/Reducers';

// function ContainerSeries() {
//     const [dataSeries, seriesDispatch] = useReducer(ReducerSeries, []);

//     useEffect(() => {
//         const promise = getSeriesData();
//         promise.then(data => seriesDispatch({ type: INIT_DATA, payload: data }));
//     }, [])

//     return (
//         <div className="container-series">
//             <h3>Series que son tendencia <FontAwesomeIcon className="icon-arrow" icon={faArrowRight} /></h3>
//             <Card dataSeries={dataSeries}/>
//         </div>
//     )
// }

// export default ContainerSeries;
