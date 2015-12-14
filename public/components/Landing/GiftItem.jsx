import React from 'react';
import { Image, Button } from 'react-bootstrap';

class GiftItem extends React.Component {
    render() {
        const item = this.props.item;
        const id = item._id;

        const basketItem = this.props.basketItems[id] || {};
        const outOfStock = item.remaining - basketItem.quantity <= 0;

        return (
            <tr key={this.props.item._id}>
                <th style={{ maxWidth: '200px' }}><Image src={this.props.item.imageUrl} rounded responsive /></th>
                <th>{this.props.item.name}</th>
                <th>{this.props.item.description}</th>
                <th>{this.props.item.requested}</th>
                <th>{this.props.item.remaining}</th>
                <th>{this.props.item.price}</th>
                <th>
                    <Button disabled={outOfStock} onClick={this.props.addToBasket}>{ outOfStock ? 'Out of Stock' : 'Add to Basket' }</Button>
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
