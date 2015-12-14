import React from 'react';
import { Link } from 'react-router';

class NoMatch extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Page not found</h1>

                <p>Woops! Sorry, there is nothing to see here.</p>

                <p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
}

export default NoMatch;
