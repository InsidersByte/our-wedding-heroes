import React from 'react';
import requestForTheDay from '../services/requestForTheDay';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
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
            <Col md={8} mdOffset={2}>
                <Jumbotron>
                    <h1>Requests For The Day</h1>

                    <h3>Coming soon!</h3>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(RequestsForTheDay.prototype, LinkedStateMixin);

export default RequestsForTheDay;
