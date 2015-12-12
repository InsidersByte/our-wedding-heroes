import React from 'react';
import aboutOurDay from '../services/aboutOurDay';
import aboutOurDayApi from '../api/aboutOurDay.api';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';

import {ToastContainer, ToastMessage} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AboutOurDay extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurDay: '',
        };
    }

    componentDidMount() {
        aboutOurDayApi
            .get()
            .then((response) => {
                this.setState({
                    aboutOurDay: response,
                });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error loading the about our day data',
                    'Error',
                    {
                        closeButton: true,
                    });
            });
    }

    update(event) {
        event.preventDefault();

        aboutOurDayApi
            .put(this.state)
            .then(() => {
                this.refs.container.success(
                    'About our day updated',
                    'Success',
                    {
                        closeButton: true,
                    });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error saving about our day',
                    'Error',
                    {
                        closeButton: true,
                    });
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <ToastContainer ref="container" toastMessageFactory={ToastMessageFactory} className="toast-bottom-left" />

                <Jumbotron>
                    <h1>About Our Day</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="textarea" rows="10" label="Content" placeholder="Enter information about your day" valueLink={this.linkState('aboutOurDay')} required />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(AboutOurDay.prototype, LinkedStateMixin);

export default AboutOurDay;
