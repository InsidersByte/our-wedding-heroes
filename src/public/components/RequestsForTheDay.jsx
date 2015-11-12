import React from 'react';
import requestForTheDay from '../services/requestForTheDay';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Jumbotron } from 'react-bootstrap';

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
            <div className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h1>Requests For The Day</h1>
                </Jumbotron>
            </div>
        );
    }
}

reactMixin(RequestsForTheDay.prototype, LinkedStateMixin);

export default RequestsForTheDay;
