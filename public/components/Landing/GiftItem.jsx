import React from 'react';
import {Image, Input} from 'react-bootstrap';

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
                    <Input type="select" onChange={this.props.addToBasket}>
                        <option value="0" key={0}>...select</option>
                        {
                            Array.from({length: this.props.item.remaining}, (value, index) => index + 1).map(value => (
                                <option value={value} key={value}>{value}</option>
                            ))
                        }
                    </Input>
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
