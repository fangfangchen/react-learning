import React from 'react';
import { Router, IndexRoute, Route, hashHistory, Link } from 'react-router';
import App from './App';
import Player from './page/player';
import MusicList from './page/musicList';
import { MUSIC_LIST } from './config/musicList';

const Root = React.createClass({
	render() {
		return(
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Player}></IndexRoute>
					<Route path="/list" component={MusicList}></Route>
				</Route>
			</Router>
		);
	}
});

export default Root;