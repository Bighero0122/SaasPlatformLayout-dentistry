import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Theme } from './styles/theme.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Theme>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Theme>
	</React.StrictMode>
);
