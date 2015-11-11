import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import loginActions from './actions/login.action';
import loginStore from './stores/login.store';
import history from './services/history';

import 'bootstrap/dist/css/bootstrap.css';
import './main.styl';

import NoMatch from './components/NoMatch.jsx';
import App from './components/App.jsx';
import Landing from './components/Landing.jsx';
import Login from './components/Login.jsx';
import Setup from './components/Setup.jsx';
import Admin from './components/Admin.jsx';
import AuthenticatedLanding from './components/AuthenticatedLanding.jsx';
import Cover from './components/Cover.jsx';
import AboutUs from './components/AboutUs.jsx';
import AboutOurDay from './components/AboutOurDay.jsx';
import AboutOurHoneymoon from './components/AboutOurHoneymoon.jsx';

const jwt = localStorage.getItem('jwt');

if (jwt) {
    loginActions.loginUser(jwt);
}

function requireAuth(nextState, replaceState) {
    if (!loginStore.isLoggedIn()) {
        replaceState({ nextPathname: nextState.location.pathname }, 'admin/login');
    }
}

ReactDOM.render(
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Landing} />
            <Route path="admin" component={Admin}>
                <IndexRoute component={AuthenticatedLanding} onEnter={requireAuth} />
                <Route path="login" component={Login} />
                <Route path="setup" component={Setup} />
                <Route path="cover" component={Cover} onEnter={requireAuth} />
                <Route path="aboutUs" component={AboutUs} onEnter={requireAuth} />
                <Route path="aboutOurDay" component={AboutOurDay} onEnter={requireAuth} />
                <Route path="aboutOurHoneymoon" component={AboutOurHoneymoon} onEnter={requireAuth} />
            </Route>
        </Route>
        <Route path="*" component={NoMatch}/>
    </Router>,
    document.getElementById('content')
);
