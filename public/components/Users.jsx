import React from 'react';
import user from '../services/user';
import { Jumbotron, Col, Table } from 'react-bootstrap';

class Users extends React.Component {
    constructor() {
        super();

        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        user
            .get()
            .then((response) => {
                this.setState({
                    users: response,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the about our day data'); //eslint-disable-line
                console.log('Error getting about our day data', error); //eslint-disable-line
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>Users</h1>

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
                                    <th />
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Jumbotron>
            </Col>
        );
    }
}

export default Users;
