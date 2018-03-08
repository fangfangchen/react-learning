import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

import App from './App';
import Home from './page/home';
import Login from './page/login';

class Root extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/login" component={Login} />
				</Switch>
			</Router>
		);
	}
};

export default Root;