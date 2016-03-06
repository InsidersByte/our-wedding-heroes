import React from 'react';

class GiftRow extends React.Component {
    render() {
        return (
            <tr>
                <th>{this.props.gift.honeymoonGiftListItem.name}</th>
                <th>{this.props.gift.price}</th>
                <th>{this.props.gift.quantity}</th>
                <th>{this.props.gift.total}</th>
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
