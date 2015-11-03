import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="login" component={Login} />
        </Route>
    </Router>,
    document.getElementById('content')
);
