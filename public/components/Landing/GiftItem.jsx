import React from 'react';
import { Image, Button } from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome.jsx';

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
            button = <Button onClick={this.props.addToBasket}><FontAwesome icon="shopping-basket" /> Add to Basket £ {item.price}</Button>;
        }

        return (
            <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', flexDirection: 'column' }}>
                <div style={{ flex: '1 1 0%' }}>
                    <Image src={item.imageUrl} rounded style={{ width: '100%', height: '300px' }} />
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
