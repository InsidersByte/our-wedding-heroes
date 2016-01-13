import React from 'react';
import GiverDetailsForm from './GiverDetailsForm.jsx';
import giftApi from '../../api/gift.api';
import basketStore from '../../stores/basket.store.js';

class GiverDetailsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            giver: {},
        };

        this.setGiverState = this.setGiverState.bind(this);
        this.submit = this.submit.bind(this);
    }

    setGiverState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.giver[field] = value;
        return this.setState({ giver: this.state.giver });
    }

    submit(event) {
        event.preventDefault();

        giftApi
            .post({
                giver: this.state.giver,
                items: basketStore.items,
            })
            .then(() => {
                this.props.toastSuccess('Gift created');
            })
            .catch(() => {
                this.props.toastError('There was an error');
            });
    }

    render() {
        return (
            <section style={{ width: '50%', margin: 'auto' }}>
                <h1>Your Details</h1>

                <GiverDetailsForm
                    giver={this.state.giver}
                    onChange={this.setGiverState}
                    onSubmit={this.submit}
                />
            </section>
        );
    }
}

GiverDetailsPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default GiverDetailsPage;
