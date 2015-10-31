import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';

// jscs:disable validateQuoteMarks
ReactDOM.render(
    <div>
        <h1>
            Hello World
        </h1>

        <RaisedButton label="Default" />
    </div>,
    document.getElementById('content')
);
