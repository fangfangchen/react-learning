import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';
import '../static/css/reset.css';
import '../static/css/common.css';

render(
	<AppContainer>
		<Root />
	</AppContainer>,
	document.getElementById('root')
);