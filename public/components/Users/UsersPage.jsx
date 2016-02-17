import React from 'react';
import UserApi from '../../api/user.api.js';
import { Jumbotron, Col, Button, Glyphicon } from 'react-bootstrap';
import UserTable from './UserTable.jsx';
import User from './User.jsx';

class Users extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
            showModal: false,
            user: {},
        };

        this.add = this.add.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.setUserState = this.setUserState.bind(this);
    }

    componentDidMount() {
        this._loadUsers();
    }

    setUserState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.user[field] = value;
        return this.setState({ user: this.state.user });
    }

    save(user) {
        if (user._id) {
            UserApi
                .put(user, user._id)
                .then(() => {
                    this.close();
                    this._loadUsers();
                    this.props.toastSuccess('User saved');
                })
                .catch(() => {
                    this.props.toastError('There was an error saving a user');
                });
        } else {
            UserApi
                .post(user)
                .then(() => {
                    this.close();
                    this._loadUsers();
                    this.props.toastSuccess('User saved');
                })
                .catch(() => {
                    this.props.toastError('There was an error saving a user');
                });
        }
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

    add() {
        this.open({});
    }

    open(user) {
        this.setState({ showModal: true, user });
    }

    close() {
        this.setState({ showModal: false });
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
                    <h1>Users&nbsp;
                        <Button bsStyle="success" bsSize="small" onClick={this.add}><Glyphicon glyph="plus" /></Button>
                    </h1>

                    <UserTable users={this.state.users} onEdit={this.open} onDelete={this.delete} />
                </Jumbotron>

                <User
                    user={this.state.user}
                    show={this.state.showModal}
                    onHide={this.close}
                    onSubmit={this.save}
                    onChange={this.setUserState}
                />
            </Col>
        );
    }
}

Users.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default Users;
