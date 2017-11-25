import React from 'react';
import './Header.scss';

class Header extends React.Component {
	render() {
		return(
			<div className="component-header">
				<img src="/static/images/logo.png" width="40" className="" />
				<h1 className="caption">React Music Player</h1>
			</div>
		);
	}
};

export default Header;