import React from 'react';
import { Table, Button } from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome.jsx';

class BasketSummary extends React.Component {
    removeFromBasket(item) {
        this.props.onRemoveFromBasket(item);
    }

    render() {
        return (
            <section className="landing__section">
                <h1 className="landing__section__heading">Basket</h1>

                <div className="landing__section__content">
                    <Table condensed responsive className="table--vertical-align-middle">
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

                    <h3>Total: £{this.props.total}</h3>
                </div>
            </section>
        );
    }
}

BasketSummary.propTypes = {
    items: React.PropTypes.object.isRequired,
    total: React.PropTypes.number.isRequired,
    onRemoveFromBasket: React.PropTypes.func.isRequired,
};

export default BasketSummary;
