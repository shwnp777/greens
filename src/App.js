import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Test from './pages/Test';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/services' component={Services} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/reviews' component={Reviews} />
				<Route exact path='/test' component={Test} />
			</Switch>
		</Router>
	);
}

export default App;
