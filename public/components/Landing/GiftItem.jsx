import React from 'react';
import {Image, Button} from 'react-bootstrap';

class GiftItem extends React.Component {
    render() {
        return (
            <tr key={this.props.item._id}>
                <th style={{maxWidth: '200px'}}><Image src={this.props.item.imageUrl} rounded responsive /></th>
                <th>{this.props.item.name}</th>
                <th>{this.props.item.description}</th>
                <th>{this.props.item.requested}</th>
                <th>{this.props.item.remaining}</th>
                <th>{this.props.item.price}</th>
                <th>
                    <Button onClick={this.props.addToBasket}>Add to Basket</Button>
                </th>
            </tr>
        );
    }
}

GiftItem.propTypes = {
    item: React.PropTypes.object.isRequired,
    addToBasket: React.PropTypes.func.isRequired,

};

export default GiftItem;
