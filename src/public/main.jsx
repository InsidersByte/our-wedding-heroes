import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

const rootRoute = {
    component: 'div',
    childRoutes: [
        {
            path: '/',
            component: require('./components/App.jsx'),
        },
    ],
};

ReactDOM.render(
    <Router routes={rootRoute} />,
    document.getElementById('content')
);
