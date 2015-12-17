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
            button = <Button disabled>Fully Gifted!</Button>;
        } else {
            button = <Button onClick={this.props.addToBasket}><Glyphicon glyph="shopping-cart"/> Add to Basket £ {item.price}</Button>;
        }

        return (
            <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', flexDirection: 'column' }}>
                <div style={{ padding: '8px' }}>
                    <Image src={item.imageUrl} rounded responsive />
                </div>

                <div style={{ padding: '8px' }}>
                    <h4>{item.name}</h4>
                    <p>Remaining: {item.remaining}</p>

                    {button}
                </div>
            </div>
        );
    }
}

GiftItem.propTypes = {
    item: React.PropTypes.object.isRequired,
    addToBasket: React.PropTypes.func.isRequired,
    basketItems: React.PropTypes.object.isRequired,
};

export default GiftItem;
