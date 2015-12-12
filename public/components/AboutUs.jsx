import React from 'react';
import aboutUsApi from '../api/aboutUs.api';
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
        aboutUsApi
            .get()
            .then((response) => {
                this.setState({
                    aboutUs: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error getting about us');
            });
    }

    update(event) {
        event.preventDefault();

        aboutUsApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('About us updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving about us');
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

AboutUs.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

reactMixin(AboutUs.prototype, LinkedStateMixin);

export default AboutUs;
