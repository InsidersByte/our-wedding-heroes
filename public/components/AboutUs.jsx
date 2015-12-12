import React from 'react';
import aboutUsApi from '../api/aboutUs.api';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col} from 'react-bootstrap';

import {ToastContainer, ToastMessage} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AboutUs extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutUs: '',
        };
    }

    componentDidMount() {
        aboutUsApi
            .get()
            .then((response) => {
                this.setState({
                    aboutUs: response,
                });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error getting about us',
                    'Error',
                    {
                        closeButton: true,
                    });
            });
    }

    update(event) {
        event.preventDefault();

        aboutUsApi
            .put(this.state)
            .then(() => {
                this.refs.container.success(
                    'About us updated',
                    'Success',
                    {
                        closeButton: true,
                    });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error saving about us',
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
                    <h1>About Us</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="textarea" rows="10" label="Content" placeholder="Enter information about you" valueLink={this.linkState('aboutUs')} required />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(AboutUs.prototype, LinkedStateMixin);

export default AboutUs;
