import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import './Assets/styles/global.scss';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
	typography: {
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
