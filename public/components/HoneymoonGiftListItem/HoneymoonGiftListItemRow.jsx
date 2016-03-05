import React from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome.jsx';

class HoneymoonGiftListItemRow extends React.Component {
    constructor() {
        super();

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.item);
    }

    onEdit() {
        this.props.onEdit(this.props.item);
    }

    render() {
        return (
            <tr>
                <th>{this.props.item.imageUrl}</th>
                <th>{this.props.item.name}</th>
                <th>{this.props.item.description}</th>
                <th>{this.props.item.requested}</th>
                <th>{this.props.item.remaining}</th>
                <th>{this.props.item.price}</th>
                <th>
                    <Button
                        bsSize="xsmall"
                        bsStyle="primary"
                        onClick={this.onEdit}
                    >
                        <FontAwesome icon="pencil" />
                    </Button>

                    <Button
                        bsSize="xsmall"
                        bsStyle="danger"
                        onClick={this.onDelete}
                    >
                        <FontAwesome icon="trash" />
                    </Button>
                </th>
            </tr>
        );
    }
}

HoneymoonGiftListItemRow.propTypes = {
    item: React.PropTypes.object.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};

export default HoneymoonGiftListItemRow;
