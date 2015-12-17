import React from 'react';
import { Table, Button, Glyphicon } from 'react-bootstrap';

class UserTable extends React.Component {
    delete(user) {
        this.props.onDelete(user);
    }

    edit(user) {
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
                        <tr key={user._id}>
                            <th>{user.name}</th>
                            <th>{user.username}</th>
                            <th>
                                <Button bsSize="xsmall" bsStyle="primary" onClick={this.edit.bind(this, user)}><Glyphicon glyph="pencil" /></Button>
                                <Button bsSize="xsmall" bsStyle="danger" style={{ marginLeft: '5px' }} onClick={this.delete.bind(this, user)}><Glyphicon glyph="trash" /></Button>
                            </th>
                        </tr>
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
