import React from 'react';
import landingApi from '../api/landing.api';

class AuthenticatedLanding extends React.Component {
    constructor() {
        super();

        this.state = {
            info: {},
        };
    }

    componentDidMount() {
        landingApi
            .get()
            .then((response) => {
                this.setState({
                    info: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error loading the landing info');
            });
    }

    render() {
        const giftSetCount = this.state.info.giftSetCount || 0;

        const message =  giftSetCount <= 0 ?
            'There have been no gift sets since you last logged in' :
            `There has been ${giftSetCount} gift set${giftSetCount === 1 ? '' : 's'} since you last logged in!`;

        return (
            <div style={{ textAlign: 'center' }}>
                <h1>{message}</h1>
            </div>
        );
    }
}

AuthenticatedLanding.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default AuthenticatedLanding;
