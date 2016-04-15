import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import loginActions from './actions/LoginActions';
import history from './helpers/history';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';
import 'toastr/build/toastr.css';
import '@insidersbyte/react-markdown-editor/dist/css/react-markdown-editor.css';
import './index.styl';

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
