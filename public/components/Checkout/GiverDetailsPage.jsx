import React from 'react';
import GiverDetailsForm from './GiverDetailsForm';
import giftApi from '../../api/gift.api';
import basketActions from '../../actions/BasketActions';
import basketStore from '../../stores/BasketStore';

import './GiverDetails.styl';

class GiverDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            giver: {
                forename: '',
                surname: '',
                email: '',
                phoneNumber: '',
            },
            isSaving: false,
        };

        this.setGiverState = this.setGiverState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentWillMount() {
        const { basketCount } = basketStore.getState();

        if (basketCount <= 0) {
            this.context.router.replace('');
        }
    }

    setGiverState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.giver[field] = value;
        return this.setState({ giver: this.state.giver });
    }

    submit(event) {
        event.preventDefault();

        this.setState({ isSaving: true });

        const { items } = basketStore.getState();

        giftApi
            .post({
                giver: this.state.giver,
                items,
            })
            .then((giftSet) => {
                this.setState({ isSaving: false });
                basketActions.emptyBasket();
                this.context.router.push(`confirmation/${giftSet._id}`);
            })
            .catch((error) => {
                this.setState({ isSaving: false });
                this.props.toastError('There was an error', error);
            });
    }

    render() {
        return (
            <section className="giver-details">
                <div className="giver-details__container">
                    <h1 className="giver-details__title">Your Details</h1>

                    <GiverDetailsForm
                        giver={this.state.giver}
                        isSaving={this.state.isSaving}
                        onChange={this.setGiverState}
                        onSubmit={this.submit}
                    />
                </div>
            </section>
        );
    }
}

GiverDetailsPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

GiverDetailsPage.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default GiverDetailsPage;
