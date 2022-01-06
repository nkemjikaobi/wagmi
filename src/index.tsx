import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import './Assets/styles/global.scss';

ReactDOM.render(
	<React.StrictMode>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);