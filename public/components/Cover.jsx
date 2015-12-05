import React from 'react';
import cover from '../services/cover';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';

import {ToastContainer, ToastMessage} from 'react-toastr';
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class Cover extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            imageUrl: '',
        };
    }

    componentDidMount() {
        cover
            .get()
            .then((response) => {
                this.setState({
                    title: response.title,
                    imageUrl: response.imageUrl,
                });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error getting cover',
                    'Error',
                    {
                        closeButton: true,
                    });
            });
    }

    update(event) {
        event.preventDefault();

        cover
            .put(this.state)
            .then(() => {
                this.refs.container.success(
                    'Cover updated',
                    'Success',
                    {
                        closeButton: true,
                    });
            })
            .catch(() => {
                this.refs.container.error(
                    'There was an error saving cover',
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
                    <h1>Cover</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="text" label="Title" placeholder="Enter title" valueLink={this.linkState('title')} required />

                        <Input type="url" label="Cover Image Url" placeholder="Enter url" valueLink={this.linkState('imageUrl')} required />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(Cover.prototype, LinkedStateMixin);

export default Cover;
