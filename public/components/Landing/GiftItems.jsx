import React from 'react';
import GiftItem from './GiftItem.jsx';

class GiftItems extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '15px' }}>
                {
                    this
                        .props
                        .giftItems
                        .map(item => (
                            <GiftItem
                                key={item._id}
                                item={item}
                                addToBasket={this.props.addToBasket}
                                basketItems={this.props.basketItems}
                            />
                        ))
                }
            </div>
        );
    }
}

GiftItems.propTypes = {
    giftItems: React.PropTypes.array.isRequired,
    addToBasket: React.PropTypes.func.isRequired,
    basketItems: React.PropTypes.object.isRequired,
};

export default GiftItems;
