import React from 'react';
import aboutUs from '../services/aboutUs';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Input, Button, Jumbotron, Col} from 'react-bootstrap';

class AboutUs extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutUs: '',
        };
    }

    componentDidMount() {
        aboutUs
            .get()
            .then((response) => {
                this.setState({
                    aboutUs: response,
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
            <Col md={6} mdOffset={3}>
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
