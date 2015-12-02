import React from 'react';
import user from '../services/user';
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

    save(userToCreate) {
        user
            .post(userToCreate)
            .then(() => {
                this.close();
                this._loadUsers();
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an error creating a new user'); //eslint-disable-line
                console.log('Error creating a user', error); //eslint-disable-line
            });
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    _loadUsers() {
        user
            .get()
            .then((response) => {
                this.setState({
                    users: response,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an error getting the users data'); //eslint-disable-line
                console.log('Error getting users data', error); //eslint-disable-line
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>Users <Button bsStyle="success" bsSize="small" onClick={this.open.bind(this)}><Glyphicon glyph="plus" /></Button></h1>

                    <Table striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.users.map(item => (
                                <tr key={item._id}>
                                    <th>{item.name}</th>
                                    <th>{item.username}</th>
                                    <th>
                                        <Button bsSize="xsmall" bsStyle="primary"><Glyphicon glyph="pencil" /></Button>
                                        <Button bsSize="xsmall" bsStyle="danger" style={{marginLeft: '5px'}}><Glyphicon glyph="trash" /></Button>
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

export default Users;
