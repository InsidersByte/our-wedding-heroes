import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';

class ConfirmationPage extends React.Component {
    render() {
        // const { giftSetId } = this.props.params;

        return (
            <Jumbotron>
                <h1>Gift Set</h1>

                <Link to="admin/giftSet" className="btn btn-success" role="button">Back to Gift Sets</Link>
            </Jumbotron>
        );
    }
}

ConfirmationPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
    params: React.PropTypes.object.isRequired,
};

ConfirmationPage.defaultProps = {
    params: {},
};

export default ConfirmationPage;
