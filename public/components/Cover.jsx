import React from 'react';
import cover from '../services/cover';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col } from 'react-bootstrap';

class Cover extends React.Component {
    constructor() {
        super();

        this.state = {
            title: '',
        };
    }

    componentDidMount() {
        cover
            .get()
            .then((response) => {
                this.setState({
                    title: response.title,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the cover data'); //eslint-disable-line
                console.log('Error getting cover data', error); //eslint-disable-line
            });
    }

    update(event) {
        event.preventDefault();

        // const files = this.refs.photo.getInputDOMNode().files;

        cover
            .put(this.state)
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the cover data'); //eslint-disable-line
                console.log('Error getting cover data', error); //eslint-disable-line
            });
    }

    render() {
        return (
            <Col md={6} mdOffset={3}>
                <Jumbotron>
                    <h1>Cover</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="text" label="Title" placeholder="Enter title" valueLink={this.linkState('title')} required />

                        <Input type="file" label="Cover Image" ref="photo" />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </Col>
        );
    }
}

reactMixin(Cover.prototype, LinkedStateMixin);

export default Cover;