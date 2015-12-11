// TODO: Do this
import React from 'react'; //eslint-disable-line
import { Route, IndexRoute } from 'react-router';

import loginStore from '../stores/login.store.js';

import NoMatch from '../components/NoMatch.jsx';
import App from '../components/App.jsx';
import Landing from '../components/Landing.jsx';
import Login from '../components/Login.jsx';
import Setup from '../components/Setup.jsx';
import Admin from '../components/Admin.jsx';
import AuthenticatedLanding from '../components/AuthenticatedLanding.jsx';
import Cover from '../components/Cover.jsx';
import AboutUs from '../components/AboutUs.jsx';
import AboutOurDay from '../components/AboutOurDay.jsx';
import AboutOurHoneymoon from '../components/AboutOurHoneymoon.jsx';
import RequestsForTheDay from '../components/RequestsForTheDay.jsx';
import HoneymoonGiftList from '../components/HoneymoonGiftList.jsx';
import WhereIsIt from '../components/WhereIsIt.jsx';
import Users from '../components/Users.jsx';

function requireAuth(nextState, replaceState) {
    if (!loginStore.isLoggedIn()) {
        replaceState({ nextPathname: nextState.location.pathname }, 'admin/login');
    }
}

export default (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Landing}/>
            <Route path="admin" component={Admin}>
                <IndexRoute component={AuthenticatedLanding} onEnter={requireAuth}/>
                <Route path="login" component={Login}/>
                <Route path="setup" component={Setup}/>
                <Route path="cover" component={Cover} onEnter={requireAuth}/>
                <Route path="aboutUs" component={AboutUs} onEnter={requireAuth}/>
                <Route path="aboutOurDay" component={AboutOurDay} onEnter={requireAuth}/>
                <Route path="aboutOurHoneymoon" component={AboutOurHoneymoon} onEnter={requireAuth}/>
                <Route path="requestsForTheDay" component={RequestsForTheDay} onEnter={requireAuth}/>
                <Route path="honeymoonGiftList" component={HoneymoonGiftList} onEnter={requireAuth}/>
                <Route path="whereIsIt" component={WhereIsIt} onEnter={requireAuth}/>
                <Route path="users" component={Users} onEnter={requireAuth}/>
            </Route>
        </Route>
        <Route path="*" component={NoMatch}/>
    </div>
);
