import React from 'react';
import { Col, Table, Button, Glyphicon } from 'react-bootstrap';

class BasketSummary extends React.Component {
    removeFromBasket(item) {
        this.props.onRemoveFromBasket(item);
    }

    render() {
        return (
            <section className="landing__section">
                <h1 className="landing__section__heading">Basket</h1>

                <Col md={8} mdOffset={2}>
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
                                    <th><Button bsSize="xsmall" bsStyle="danger" onClick={this.removeFromBasket.bind(this, this.props.items[key])}><Glyphicon glyph="trash" /></Button></th>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>

                    <h3>Total: £{this.props.total}</h3>
                </Col>
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
