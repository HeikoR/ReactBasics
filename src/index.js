import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';

import './styles/css/master.css';

/**
 * ReactDOM.render method is going render all the React
 * components into the root DOM element in your index.html
 * page located in your public folder
 */
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
