import React from 'react';
import { Image, Button, Glyphicon } from 'react-bootstrap';

class GiftItem extends React.Component {
    render() {
        const item = this.props.item;
        const id = item._id;

        const basketItem = this.props.basketItems[id] || {};
        const outOfStock = item.remaining - basketItem.quantity <= 0;

        let button;

        if (outOfStock) {
            button = <Button disabled>Out of Stock</Button>;
        } else {
            button = <Button onClick={this.props.addToBasket}><Glyphicon glyph="shopping-cart"/> Add to Basket</Button>;
        }

        return (
            <tr key={this.props.item._id}>
                <th style={{ maxWidth: '200px' }}><Image src={this.props.item.imageUrl} rounded responsive /></th>
                <th>{this.props.item.name}</th>
                <th>{this.props.item.description}</th>
                <th>{this.props.item.requested}</th>
                <th>{this.props.item.remaining}</th>
                <th>{this.props.item.price}</th>
                <th>
                    {button}
                </th>
            </tr>
        );
    }
}

GiftItem.propTypes = {
    item: React.PropTypes.object.isRequired,
    addToBasket: React.PropTypes.func.isRequired,
    basketItems: React.PropTypes.object.isRequired,
};

export default GiftItem;
