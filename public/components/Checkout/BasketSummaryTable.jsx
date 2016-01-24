import React from 'react';
import { Table } from 'react-bootstrap';
import BasketSummaryRow from './BasketSummaryRow.jsx';

class BasketSummaryTable extends React.Component {
    constructor() {
        super();

        this.removeFromBasket = this.removeFromBasket.bind(this);
    }

    removeFromBasket(item) {
        this.props.onRemoveFromBasket(item);
    }

    render() {
        return (
            <Table responsive>
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
                        <BasketSummaryRow key={key} item={this.props.items[key]} onRemove={this.removeFromBasket} />
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
    onRemoveFromBasket: React.PropTypes.func.isRequired,
};

export default BasketSummaryTable;
