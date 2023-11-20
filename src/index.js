import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
	typography: {
		fontFamily: [
		  `'Inter', 'sans-serif'`,
		].join(','),
	},
	palette: {
		type: 'light',
		primary: {
		  main: '#28D2CD',
		},
		secondary: {
		  main: '#f40952',
		},
		background: {
		  default: '#f4f5f9',
		},
		error: {
		  main: '#ffffff',
		},
		warning: {
		  main: '#FFBE1C',
		},
		info: {
		  main: '#A49D97',
		},
		success: {
		  main: '#00e676',
		},
		divider: '#9e9e9e',
	}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
