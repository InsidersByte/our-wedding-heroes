import React from 'react';
import { Link } from 'react-router';

import './NoMatch.styl';

class NoMatch extends React.Component {
    render() {
        return (
            <div className="no-match">
                <h1>Page not found</h1>

                <p>Woops! Sorry, there is nothing to see here.</p>

                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
}

export default NoMatch;
