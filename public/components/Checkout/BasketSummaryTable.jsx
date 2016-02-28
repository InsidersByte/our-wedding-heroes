import React from 'react';
import { Table } from 'react-bootstrap';
import BasketSummaryRow from './BasketSummaryRow.jsx';

class BasketSummaryTable extends React.Component {
    render() {
        return (
            <Table responsive className="basket-summary__table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price (£)</th>
                    <th>Quantity</th>
                    <th>Remove</th>
                </tr>
                </thead>

                <tbody>
                {
                    Object.keys(this.props.items).map(key => (
                        <BasketSummaryRow
                            key={key}
                            item={this.props.items[key]}
                            onAdd={this.props.onAdd}
                            onRemove={this.props.onRemove}
                            onDelete={this.props.onDelete}
                        />
                    ))
                }
                </tbody>
            </Table>
        );
    }
}

BasketSummaryTable.propTypes = {
    items: React.PropTypes.object.isRequired,
    total: React.PropTypes.number.isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};

export default BasketSummaryTable;
