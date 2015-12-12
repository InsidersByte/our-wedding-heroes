import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap';

class RequestsForTheDay extends React.Component {
    constructor() {
        super();

        this.state = {
            requestsForTheDay: [],
        };
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
