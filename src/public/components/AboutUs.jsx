import React from 'react';
import aboutUs from '../services/aboutUs';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron } from 'react-bootstrap';

class Cover extends React.Component {
    constructor() {
        super();

        this.state = {
            content: '',
        };
    }

    componentDidMount() {
        aboutUs
            .get()
            .then((response) => {
                this.setState({
                    content: response.content,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the about us data'); //eslint-disable-line
                console.log('Error getting about us data', error); //eslint-disable-line
            });
    }

    update(event) {
        event.preventDefault();

        aboutUs
            .put(this.state)
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the about us data'); //eslint-disable-line
                console.log('Error getting about us data', error); //eslint-disable-line
            });
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <Jumbotron>
                    <h1>About Us</h1>

                    <form onSubmit={this.update.bind(this)}>
                        <Input type="textarea" rows="10" label="Content" placeholder="Enter title" valueLink={this.linkState('content')} required />

                        <Button type="submit" bsStyle="primary" block>Update</Button>
                    </form>
                </Jumbotron>
            </div>
        );
    }
}

reactMixin(Cover.prototype, LinkedStateMixin);

export default Cover;
