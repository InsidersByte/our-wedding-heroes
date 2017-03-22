/* @flow */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { TOKEN } from './constants';
import jwtDecoder from './utils/jwtDecoder';
import { getItem } from './utils/localStorage';
import './index.styl';

let initialState = {};

const jwt = getItem(TOKEN);
const user = jwtDecoder(jwt);

if (user) {
    initialState = {
        auth: {
            user,
            isAuthenticated: true,
        },
    };
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    // FIXME:FLOW works
    <Root store={store} history={history} />,
    document.getElementById('app'),
);
