import React from 'react';
import { Table } from 'react-bootstrap';
import GiftRow from './GiftRow';

export default function GiftTable({ gifts }) {
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
                {gifts
                    .map(gift =>
                        <GiftRow
                            key={gift._id} // eslint-disable-line no-underscore-dangle
                            gift={gift}
                        />
                    )
                }
            </tbody>
        </Table>
    );
}

GiftTable.propTypes = {
    gifts: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

GiftTable.defaultProps = {
    gifts: [],
};
