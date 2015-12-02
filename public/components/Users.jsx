import React from 'react';
import user from '../services/user';
import { Jumbotron, Col } from 'react-bootstrap';

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

                    <h3>Coming soon!</h3>
                </Jumbotron>
            </Col>
        );
    }
}

export default Users;
