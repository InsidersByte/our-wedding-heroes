import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import loginActions from './actions/login.action';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';
import Setup from './components/Setup.jsx';

let jwt = localStorage.getItem('jwt');

if (jwt) {
    loginActions.loginUser(jwt);
}

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="login" component={Login} />
            <Route path="setup" component={Setup} />
        </Route>
    </Router>,
    document.getElementById('content')
);
