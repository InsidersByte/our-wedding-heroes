import React from 'react';
import { Table } from 'react-bootstrap';
import UserRow from './UserRow.jsx';

class UserTable extends React.Component {
    constructor() {
        super();

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onDelete(user) {
        this.props.onDelete(user);
    }

    onEdit(user) {
        this.props.onEdit(user);
    }

    render() {
        return (
            <Table striped bordered condensed hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.users.map(user => (
                        <UserRow key={user._id} user={user} onEdit={this.onEdit} onDelete={this.onDelete} />
                    ))}
                </tbody>
            </Table>
        );
    }
}

UserTable.propTypes = {
    users: React.PropTypes.array.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
};

export default UserTable;
