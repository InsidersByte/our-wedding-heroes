import React from 'react';
import { Jumbotron, FormControls, Col, Row, ButtonToolbar, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import GiftSetApi from '../../api/giftSet.api';
import moment from 'moment';
import GiftTable from './GiftTable.jsx';

class GiftSetPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            giftSet: {
                giver: {},
                gifts: [],
            },
        };

        this.markAsPaid = this.markAsPaid.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this._loadGiftSet();
    }

    markAsPaid() {
        // TODO: Use a confirmation model instead of confirm
        if (!confirm('Are you sure you want to mark this gift as paid?')) {
            return;
        }

        const { giftSetId } = this.props.params;

        GiftSetApi
            .paid(this.state.giftSet, giftSetId)
            .then(() => {
                this._loadGiftSet();
                this.props.toastSuccess('Gift set marked as paid');
            })
            .catch((error) => {
                this.props.toastError('There was an error marking a gift set as paid', error);
            });
    }

    delete() {
        // TODO: Use a confirmation model instead of confirm
        if (!confirm('Are you sure you want to delete this gift set?')) {
            return;
        }

        const { giftSetId } = this.props.params;

        GiftSetApi
            .delete(giftSetId)
            .then(() => {
                this.context.router.push('admin/giftSet');
                this.props.toastSuccess('Gift set deleted');
            })
            .catch((error) => {
                this.props.toastError('There was an error deleting a gift set', error);
            });
    }

    _loadGiftSet() {
        const { giftSetId } = this.props.params;

        GiftSetApi
            .get(giftSetId)
            .then((response) => {
                this.setState({
                    giftSet: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error loading the gift set', error);
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

                <h3>Gifts</h3>

                <GiftTable gifts={this.state.giftSet.gifts} />

                <ButtonToolbar>
                    <Button
                        onClick={this.markAsPaid}
                        bsStyle="success"
                        disabled={this.state.giftSet.paid}
                    >
                        {this.state.giftSet.paid ? 'Already Marked as Paid' : 'Mark as Paid'}
                    </Button>

                    <Button onClick={this.delete} bsStyle="danger" disabled={this.state.giftSet.paid}>Delete</Button>

                    <Link to="admin/giftSet" className="btn btn-default" role="button">Back to Gift Sets</Link>
                </ButtonToolbar>
            </Jumbotron>
        );
    }
}

GiftSetPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
    params: React.PropTypes.object.isRequired,
};

GiftSetPage.defaultProps = {
    params: {},
};

GiftSetPage.contextTypes = {
    router: React.PropTypes.object.isRequired,
};

export default GiftSetPage;
