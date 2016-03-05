import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import GiftSetApi from '../../api/giftSet.api';

class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            giftSet: {},
        };
    }

    componentDidMount() {
        const { giftSetId } = this.props.params;

        GiftSetApi
            .get(giftSetId)
            .then((response) => {
                this.setState({
                    giftSet: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error getting gift sets', error);
            });
    }

    render() {
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
