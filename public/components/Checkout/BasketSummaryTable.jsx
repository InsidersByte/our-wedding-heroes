import React from 'react';
import { Table } from 'react-bootstrap';
import BasketSummaryRow from './BasketSummaryRow';

export default function BasketSummaryTable({ items, onAdd, onRemove, onDelete }) {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price (£)</th>
                    <th>Quantity</th>
                    <th>Remaining</th>
                    <th>Remove</th>
                </tr>
            </thead>

            <tbody>
                {
                    [...items.entries()].map(([key, item]) =>
                        <BasketSummaryRow
                            key={key}
                            item={item}
                            onAdd={onAdd}
                            onRemove={onRemove}
                            onDelete={onDelete}
                        />
                    )
                }
            </tbody>
        </Table>
    );
}

BasketSummaryTable.propTypes = {
    items: React.PropTypes.shape({}).isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};
