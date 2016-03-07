import React from 'react';
import { Table } from 'react-bootstrap';
import GiftSetRow from './GiftSetRow.jsx';

class GiftSetTable extends React.Component {
    render() {
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Giver Name</th>
                        <th>Giver Email</th>
                        <th>Giver Phone Number</th>
                        <th>Total (£)</th>
                        <th>Date</th>
                        <th>Paid?</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {this
                        .props
                        .giftSets
                        .map(giftSet => (
                            <GiftSetRow
                                key={giftSet._id}
                                giftSet={giftSet}
                                onMarkAsPaid={this.props.onMarkAsPaid}
                                onMarkAsDetailsSent={this.props.onMarkAsDetailsSent}
                                onDelete={this.props.onDelete}
                                onSelect={this.props.onSelect}
                            />
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}

GiftSetTable.propTypes = {
    giftSets: React.PropTypes.array.isRequired,
    onDelete: React.PropTypes.func.isRequired,
    onMarkAsPaid: React.PropTypes.func.isRequired,
    onMarkAsDetailsSent: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired,
};

GiftSetTable.defaultProps = {
    giftSets: [],
};

export default GiftSetTable;
