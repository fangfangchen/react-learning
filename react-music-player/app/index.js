import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Hello from './components/Hello';

render(
	<AppContainer>
		<Hello />
	</AppContainer>,
	document.getElementById('root')
);