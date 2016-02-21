import React from 'react';
import moment from 'moment';
import { Button, Glyphicon } from 'react-bootstrap';

class GiftRow extends React.Component {
    constructor() {
        super();

        this.onDelete = this.onDelete.bind(this);
        this.onMarkAsPaid = this.onMarkAsPaid.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.gift);
    }

    onMarkAsPaid() {
        this.props.onMarkAsPaid(this.props.gift);
    }

    render() {
        const createdAt = moment(this.props.gift.createdAt);
        const createdAtFormatted = createdAt.format('DD/MM/YY HH:MM');

        return (
            <tr>
                <th>{this.props.gift.giver.name}</th>
                <th>{this.props.gift.giver.email}</th>
                <th>{this.props.gift.giver.phoneNumber}</th>
                <th>{this.props.gift.honeymoonGiftListItem.name}</th>
                <th>{this.props.gift.honeymoonGiftListItem.price}</th>
                <th>{this.props.gift.quantity}</th>
                <th>{createdAtFormatted}</th>
                <th>{this.props.gift.paid ? 'Yes' : 'No'}</th>
                <th>
                    <Button
                        bsSize="xsmall"
                        bsStyle="success"
                        onClick={this.onMarkAsPaid}
                    >
                        <Glyphicon glyph="gbp" />
                    </Button>

                    <Button
                        bsSize="xsmall"
                        bsStyle="danger"
                        onClick={this.onDelete}
                    >
                        <Glyphicon glyph="trash" />
                    </Button>
                </th>
            </tr>
        );
    }
}

GiftRow.propTypes = {
    gift: React.PropTypes.object.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onMarkAsPaid: React.PropTypes.func.isRequired,
};

GiftRow.defaultProps = {
    gift: {},
};

export default GiftRow;
