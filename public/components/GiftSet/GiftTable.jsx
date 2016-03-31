import React from 'react';
import { Table } from 'react-bootstrap';
import GiftRow from './GiftRow';

function GiftTable(props) {
    return (
        <Table striped bordered condensed hover responsive>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price (£)</th>
                <th>Quantity</th>
                <th>Total (£)</th>
            </tr>
            </thead>

            <tbody>
            {props
                .gifts
                .map(gift => (
                    <GiftRow
                        key={gift._id}
                        gift={gift}
                    />
                ))
            }
            </tbody>
        </Table>
    );
}

GiftTable.propTypes = {
    gifts: React.PropTypes.array.isRequired,
};

GiftTable.defaultProps = {
    gifts: [],
};

export default GiftTable;