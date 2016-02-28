import React from 'react';
import { Link } from 'react-router';

import './Confirmation.styl';

class ConfirmationPage extends React.Component {
    render() {
        // const { giftSetId } = this.props.params;

        return (
            <section className="confirmation">
                <h1 className="confirmation__title">Thank you for your gift!</h1>

                <Link to="" className="btn btn-success" role="button">Back to Home</Link>
            </section>
        );
    }
}

ConfirmationPage.propTypes = {
    params: React.PropTypes.object.isRequired,
};

ConfirmationPage.defaultProps = {
    params: {},
};

export default ConfirmationPage;
