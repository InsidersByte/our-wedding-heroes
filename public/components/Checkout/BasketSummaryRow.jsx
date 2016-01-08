import React from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome.jsx';

class BasketSummaryRow extends React.Component {
    constructor() {
        super();

        this.onRemove = this.onRemove.bind(this);
    }

    onRemove() {
        this.props.onRemove(this.props.item);
    }

    render() {
        return (
            <tr>
                <th>{this.props.item.name}</th>
                <th>{this.props.item.price}</th>
                <th>{this.props.item.quantity}</th>
                <th>
                    <Button
                        bsSize="xsmall"
                        bsStyle="danger"
                        onClick={this.onRemove}
                    >
                        <FontAwesome icon="minus" />
                    </Button>
                </th>
            </tr>
        );
    }
}

BasketSummaryRow.propTypes = {
    item: React.PropTypes.object.isRequired,
    onRemove: React.PropTypes.func.isRequired,
};

export default BasketSummaryRow;
