import React from 'react';
import Header from './components/Header';
import { MUSIC_LIST } from './config/musicList';

const App = React.createClass({
	getInitialState() {
		return {
			currentMusitItem: MUSIC_LIST[0],
			listItem: MUSIC_LIST
		};
	},

	// 子组件与父组件通信
	render() {
		return(
			<div>
				<Header />
				{ React.cloneElement(this.props.children, this.state) }
			</div>
		);
	}
});

export default App;