import React from 'react';
import { Table } from 'react-bootstrap';
import GiftRow from './GiftRow.jsx';

class GiftsTable extends React.Component {
    render() {
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Giver Name</th>
                        <th>Gift Name</th>
                        <th>Price per unit (£)</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        <th>Paid?</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.gifts.map(gift => (
                        <GiftRow key={gift._id} gift={gift} />
                    ))}
                </tbody>
            </Table>
        );
    }
}

GiftsTable.propTypes = {
    gifts: React.PropTypes.array.isRequired,
};

GiftsTable.defaultProps = {
    gifts: [],
};

export default GiftsTable;
