import React from 'react';
import landingActions from '../actions/LandingActions';
import landingStore from '../stores/LandingStore';
import Loader from './common/Loader';
import css from './AuthenticatedLanding.styl';

export default class AuthenticatedLanding extends React.Component {
    state = landingStore.getState();

    componentDidMount() {
        landingStore.listen(this.onStoreChange);
        landingActions.fetch.defer();
    }

    componentWillUnmount() {
        landingStore.unlisten(this.onStoreChange);
    }

    onStoreChange = (state) => {
        this.setState(state);
    };

    render() {
        const giftSetCount = this.state.landing.giftSetCount || 0;

        const message = giftSetCount <= 0 ?
            'There have been no new gift sets since you last logged in' :
            `There has been ${giftSetCount} new gift set${giftSetCount === 1 ? '' : 's'} since you last logged in!`;

        return (
            <Loader className={css.root} loading={this.state.loading}>
                <h1>{message}</h1>
            </Loader>
        );
    }
}
