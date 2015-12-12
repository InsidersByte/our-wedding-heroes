import React from 'react';
import aboutOurHoneymoonApi from '../api/aboutOurHoneymoon.api';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';

import {ToastContainer, ToastMessage} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AboutOurHoneymoon extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurHoneymoon: '',
        };
    }

    componentDidMount() {
        aboutOurHoneymoonApi
            .get()
            .then((response) => {
                this.setState({
                    aboutOurHoneymoon: response,
                });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error getting about our honeymoon',
                    'Error',
                    {
                        closeButton: true,
                    });
            });
    }

    update(event) {
        event.preventDefault();

        aboutOurHoneymoonApi
            .put(this.state)
            .then(() => {
                this.refs.container.success(
                    'About our honeymoon updated',
                    'Success',
                    {
                        closeButton: true,
                    });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error saving about our honeymoon',
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
                    <h1>About Our Honeymoon</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="textarea" rows="10" label="Content" placeholder="Enter information about your honeymoon" valueLink={this.linkState('aboutOurHoneymoon')} required />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(AboutOurHoneymoon.prototype, LinkedStateMixin);

export default AboutOurHoneymoon;
