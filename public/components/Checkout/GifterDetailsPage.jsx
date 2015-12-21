import React from 'react';
import GifterDetailsForm from './GifterDetailsForm.jsx';

class GifterDetailsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            gifter: {},
        };
    }

    setGifterState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.gifter[field] = value;
        return this.setState({ gifter: this.state.gifter });
    }

    submit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section style={{ width: '50%', margin: 'auto' }}>
                <h1>Your Details</h1>

                <GifterDetailsForm gifter={this.state.gifter} onChange={this.setGifterState.bind(this)} onSubmit={this.submit.bind(this)} />
            </section>
        );
    }
}

export default GifterDetailsPage;
