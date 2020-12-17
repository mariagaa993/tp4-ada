import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from '../components/MainContainer/MainContainer';
import Movies from '../pages/movies/Movies';
import Series from '../pages/series/Series';

const Routes = () => {
  	return (
		<Switch>
    		<Route exact path='/' component={MainContainer} />
            <Route exact path='/movie' component={Movies} />
            <Route exact path='/tv' component={Series} />
		</Switch>
  	);
}

export default Routes;
