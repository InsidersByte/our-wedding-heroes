import React from 'react';
import { Table, Button } from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome.jsx';

class BasketSummaryTable extends React.Component {
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
                        <tr key={key}>
                            <th>{this.props.items[key].name}</th>
                            <th>{this.props.items[key].price}</th>
                            <th>{this.props.items[key].quantity}</th>
                            <th><Button bsSize="xsmall" bsStyle="danger" onClick={this.removeFromBasket.bind(this, this.props.items[key])}><FontAwesome icon="minus" /></Button></th>
                        </tr>
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
