import React from 'react';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import './App.scss';

const App = () => {
  	return (
		<React.Fragment>
      		<Header />
			<MainContainer />
		</React.Fragment>
  	);
}

export default App;
