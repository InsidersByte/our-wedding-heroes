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
                    </tr>
                </thead>

                <tbody>
                    {this
                        .props
                        .giftSets
                        .map(giftSet => (
                            <GiftSetRow key={giftSet._id} giftSet={giftSet} />
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}

GiftSetTable.propTypes = {
    giftSets: React.PropTypes.array.isRequired,
};

GiftSetTable.defaultProps = {
    giftSets: [],
};

export default GiftSetTable;
