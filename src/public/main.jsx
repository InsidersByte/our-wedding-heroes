import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import App from './components/App.jsx';
import Login from './components/Login.jsx';

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="login" component={Login} />
        </Route>
    </Router>,
    document.getElementById('content')
);
