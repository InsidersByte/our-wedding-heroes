import React from 'react';
import { Table, Button, Glyphicon } from 'react-bootstrap';

class HoneymoonGiftListTable extends React.Component {
    delete(item) {
        this.props.onDelete(item);
    }

    edit(item) {
        this.props.onEdit(item);
    }

    render() {
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Requested</th>
                        <th>Remaining</th>
                        <th>Price (£)</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                {
                    this.props.items.map(item => (
                        <tr key={item._id}>
                            <th>{item.imageUrl}</th>
                            <th>{item.name}</th>
                            <th>{item.description}</th>
                            <th>{item.requested}</th>
                            <th>{item.remaining}</th>
                            <th>{item.price}</th>
                            <th>
                                <Button bsSize="xsmall" bsStyle="primary" onClick={this.edit.bind(this, item)}><Glyphicon glyph="pencil" /></Button>
                                <Button bsSize="xsmall" bsStyle="danger" style={{marginLeft: '5px'}} onClick={this.delete.bind(this, item)}><Glyphicon glyph="trash" /></Button>
                            </th>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        );
    }
}

HoneymoonGiftListTable.propTypes = {
    items: React.PropTypes.array.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};

export default HoneymoonGiftListTable;
