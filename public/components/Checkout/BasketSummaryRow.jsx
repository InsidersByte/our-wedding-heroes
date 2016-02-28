import React from 'react';
import { Button, Input } from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome.jsx';

class BasketSummaryRow extends React.Component {
    constructor() {
        super();

        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onAdd() {
        this.props.onAdd(this.props.item);
    }

    onRemove() {
        this.props.onRemove(this.props.item);
    }

    onDelete() {
        this.props.onDelete(this.props.item);
    }

    render() {
        return (
            <tr>
                <th>{this.props.item.name}</th>
                <th>{this.props.item.price}</th>
                <th>
                    <Button
                        bsSize="xsmall"
                        bsStyle="success"
                        onClick={this.onAdd}
                    >
                        <FontAwesome icon="minus" />
                    </Button>

                    <span style={{ margin: '0 10px' }}>
                        {this.props.item.quantity}
                    </span>

                    <Button
                        bsSize="xsmall"
                        bsStyle="success"
                        onClick={this.onRemove}
                    >
                        <FontAwesome icon="plus" />
                    </Button>
                </th>
                <th>
                    <Button
                        bsSize="xsmall"
                        bsStyle="danger"
                        onClick={this.onDelete}
                    >
                        <FontAwesome icon="remove" />
                    </Button>
                </th>
            </tr>
        );
    }
}

BasketSummaryRow.propTypes = {
    item: React.PropTypes.object.isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};

export default BasketSummaryRow;
