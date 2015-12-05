import React from 'react';
import requestForTheDay from '../services/requestForTheDay';
import { Jumbotron, Col } from 'react-bootstrap';

class RequestsForTheDay extends React.Component {
    constructor() {
        super();

        this.state = {
            requestsForTheDay: [],
        };
    }

    componentDidMount() {
        requestForTheDay
            .get()
            .then((response) => {
                this.setState({
                    requestsForTheDay: response,
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
                    <h1>Requests For The Day</h1>

                    <h3>Coming soon!</h3>
                </Jumbotron>
            </Col>
        );
    }
}

export default RequestsForTheDay;
