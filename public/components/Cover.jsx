import React from 'react';
import CoverApi from '../api/cover.api';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';

class Cover extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
            imageUrl: '',
        };
    }

    componentDidMount() {
        CoverApi
            .get()
            .then((response) => {
                this.setState({
                    title: response.title,
                    imageUrl: response.imageUrl,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error saving getting cover');
            });
    }

    update(event) {
        event.preventDefault();

        CoverApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('Cover updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving cover');
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
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

Cover.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

reactMixin(Cover.prototype, LinkedStateMixin);

export default Cover;
