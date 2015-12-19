import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import loginActions from './actions/login.action.js';
import history from './services/history';
import routes from './routes';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/animate.css/animate.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './main.styl';

const jwt = localStorage.getItem('jwt');

if (jwt) {
    loginActions.loginUser(jwt);
}

ReactDOM.render(
    <Router history={history}>
        {routes}
    </Router>,
    document.getElementById('content')
);
