import React from 'react';
import moment from 'moment';

class GiftSetRow extends React.Component {
    render() {
        const createdAt = moment(this.props.giftSet.createdAt);
        const createdAtFormatted = createdAt.format('DD/MM/YY HH:MM');

        console.log(this.props.giftSet);

        return (
            <tr>
                <th>{this.props.giftSet.giver.forename} {this.props.giftSet.giver.surname}</th>
                <th>{this.props.giftSet.giver.email}</th>
                <th>{this.props.giftSet.giver.phoneNumber}</th>
                <th>{this.props.giftSet.total}</th>
                <th>{createdAtFormatted}</th>
                <th>{this.props.giftSet.paid ? 'Yes' : 'No'}</th>
            </tr>
        );
    }
}

GiftSetRow.propTypes = {
    giftSet: React.PropTypes.object.isRequired,
};

GiftSetRow.defaultProps = {
    giftSet: {},
};

export default GiftSetRow;
