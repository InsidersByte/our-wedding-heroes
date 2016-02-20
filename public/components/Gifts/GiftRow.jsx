import React from 'react';
import moment from 'moment';

class GiftRow extends React.Component {
    render() {
        const createdAt = moment(this.props.gift.createdAt);
        const createdAtFormatted = createdAt.format('DD/MM/YY HH:MM');

        return (
            <tr>
                <th>{this.props.gift.giver.name}</th>
                <th>{this.props.gift.honeymoonGiftListItem.name}</th>
                <th>{this.props.gift.honeymoonGiftListItem.price}</th>
                <th>{this.props.gift.quantity}</th>
                <th>{createdAtFormatted}</th>
                <th>{this.props.gift.paid ? 'Yes' : 'No'}</th>
            </tr>
        );
    }
}

GiftRow.propTypes = {
    gift: React.PropTypes.object.isRequired,
};

GiftRow.defaultProps = {
    gift: {},
};

export default GiftRow;
