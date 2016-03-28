import React from 'react';
import { Table } from 'react-bootstrap';
import UserRow from './UserRow';

class UserTable extends React.Component {
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
                    {this
                        .props
                        .users
                        .map(user => (
                            <UserRow key={user._id} user={user} onEdit={this.props.onEdit} onDelete={this.props.onDelete} />
                        ))
                    }
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
