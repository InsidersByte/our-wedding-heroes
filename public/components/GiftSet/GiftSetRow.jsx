import React from 'react';
import moment from 'moment';
import { ButtonToolbar, Button } from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome';

class GiftSetRow extends React.Component {
    constructor() {
        super();

        this.onDelete = this.onDelete.bind(this);
        this.onMarkAsPaid = this.onMarkAsPaid.bind(this);
        this.onMarkAsDetailsSent = this.onMarkAsDetailsSent.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.giftSet);
    }

    onMarkAsPaid() {
        this.props.onMarkAsPaid(this.props.giftSet);
    }

    onMarkAsDetailsSent() {
        this.props.onMarkAsDetailsSent(this.props.giftSet);
    }

    onSelect() {
        this.props.onSelect(this.props.giftSet);
    }

    render() {
        const createdAt = moment(this.props.giftSet.createdAt);
        const createdAtFormatted = createdAt.format('DD/MM/YY HH:MM');

        return (
            <tr>
                <th>{this.props.giftSet.giver.forename} {this.props.giftSet.giver.surname}</th>
                <th>{this.props.giftSet.giver.email}</th>
                <th>{this.props.giftSet.giver.phoneNumber}</th>
                <th>{this.props.giftSet.total}</th>
                <th>{createdAtFormatted}</th>
                <th>{this.props.giftSet.paid ? 'Yes' : 'No'}</th>
                <th>
                    <ButtonToolbar>
                        <Button
                            bsSize="xsmall"
                            bsStyle="primary"
                            onClick={this.onSelect}
                        >
                            <FontAwesome icon="eye" />
                        </Button>

                        <Button
                            bsSize="xsmall"
                            bsStyle="success"
                            onClick={this.onMarkAsDetailsSent}
                            disabled={this.props.giftSet.detailsSent || this.props.giftSet.paid}
                        >
                            <FontAwesome icon="send" />
                        </Button>

                        <Button
                            bsSize="xsmall"
                            bsStyle="success"
                            onClick={this.onMarkAsPaid}
                            disabled={this.props.giftSet.paid}
                        >
                            <FontAwesome icon="gbp" />
                        </Button>

                        <Button
                            bsSize="xsmall"
                            bsStyle="danger"
                            onClick={this.onDelete}
                            disabled={this.props.giftSet.paid}
                        >
                            <FontAwesome icon="trash" />
                        </Button>
                    </ButtonToolbar>
                </th>
            </tr>
        );
    }
}

GiftSetRow.propTypes = {
    giftSet: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onMarkAsPaid: React.PropTypes.func.isRequired,
    onMarkAsDetailsSent: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
};

GiftSetRow.defaultProps = {
    giftSet: {},
};

export default GiftSetRow;