import React from 'react';
import cover from '../services/cover';

class Cover extends React.Component {
    componentDidMount() {
        cover
            .get()
            .catch((error) => {
                alert('There\'s an getting the cover data'); //eslint-disable-line
                console.log('Error getting cover data', error); //eslint-disable-line
            });
    }

    render() {
        return (
            <h1>Here you will change the cover</h1>
        );
    }
}

export default Cover;
