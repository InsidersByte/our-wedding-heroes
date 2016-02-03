import React from 'react';
import { Table } from 'react-bootstrap';
import HoneymoonGiftListItemRow from './HoneymoonGiftListItemRow.jsx';

class HoneymoonGiftListItemTable extends React.Component {
    constructor() {
        super();

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onDelete(item) {
        this.props.onDelete(item);
    }

    onEdit(item) {
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
                        <HoneymoonGiftListItemRow
                            key={item._id}
                            item={item}
                            onEdit={this.onEdit}
                            onDelete={this.onDelete}
                        />
                    ))
                }
                </tbody>
            </Table>
        );
    }
}

HoneymoonGiftListItemTable.propTypes = {
    items: React.PropTypes.array.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};

export default HoneymoonGiftListItemTable;
