import React from 'react';
import UserApi from '../../api/user.api.js';
import { Jumbotron, Col, Table, Button, Glyphicon } from 'react-bootstrap';
import User from './User.jsx';

class Users extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            showModal: false,
        };
    }

    componentDidMount() {
        this._loadUsers();
    }

    save(user) {
        UserApi
            .post(user)
            .then(() => {
                this.close();
                this._loadUsers();
                this.props.toastSuccess('User created');
            })
            .catch(() => {
                this.props.toastError('There was an error creating a user');
            });
    }

    delete(user) {
        UserApi
            .delete(user._id)
            .then(() => {
                this.close();
                this._loadUsers();
                this.props.toastSuccess('User deleted');
            })
            .catch(() => {
                this.props.toastError('There was an error deleting a user');
            });
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    _loadUsers() {
        UserApi
            .get()
            .then((response) => {
                this.setState({
                    users: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error getting users');
            });
    }

    render() {
        return (
            <Col md={8} mdOffset={2}>
                <Jumbotron>
                    <h1>Users <Button bsStyle="success" bsSize="small" onClick={this.open.bind(this)}><Glyphicon glyph="plus" /></Button></h1>

                    <Table striped bordered condensed hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.users.map(user => (
                                <tr key={user._id}>
                                    <th>{user.name}</th>
                                    <th>{user.username}</th>
                                    <th>
                                        <Button bsSize="xsmall" bsStyle="primary"><Glyphicon glyph="pencil" /></Button>
                                        <Button bsSize="xsmall" bsStyle="danger" style={{ marginLeft: '5px' }} onClick={this.delete.bind(this, user)}><Glyphicon glyph="trash" /></Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Jumbotron>

                <User show={this.state.showModal} onHide={this.close.bind(this)} onSave={this.save.bind(this)} />
            </Col>
        );
    }
}

Users.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default Users;
