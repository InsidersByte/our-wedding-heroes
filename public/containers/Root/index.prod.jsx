/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../../routes';

type PropsType = {
    store: Object,
    history: Object,
};

const Root = ({ store, history }: PropsType) => (
    <Provider store={store}>
        <Router history={history}>
            {routes(store)}
        </Router>
    </Provider>
);

export default Root;
