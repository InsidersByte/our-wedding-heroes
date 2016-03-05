import React from 'react';
import { Jumbotron, FormControls, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import GiftSetApi from '../../api/giftSet.api';
import moment from 'moment';

class ConfirmationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            giftSet: {
                giver: {},
            },
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
        const fullName = `${this.state.giftSet.giver.forename} ${this.state.giftSet.giver.surname}`;
        const createdAt = moment(this.state.giftSet.createdAt);
        const createdAtFormatted = createdAt.format('DD/MM/YY HH:MM');

        return (
            <Jumbotron>
                <h1>Gift Set</h1>

                <Row>
                    <Col md={4}>
                        <FormControls.Static label="Full Name" value={fullName} />
                        <FormControls.Static label="Email Address" value={this.state.giftSet.giver.email} />

                    </Col>

                    <Col md={4}>
                        <FormControls.Static label="Phone Number" value={this.state.giftSet.giver.phoneNumber} />
                        <FormControls.Static label="Gift Date" value={createdAtFormatted} />
                    </Col>

                    <Col md={4}>
                        <FormControls.Static label="Gift Total (£)" value={this.state.giftSet.total} />
                        <FormControls.Static label="Paid" value={this.state.giftSet.paid ? 'Yes' : 'No'} />
                    </Col>
                </Row>

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
