import React from 'react';
import aboutOurHoneymoonApi from '../../api/aboutOurHoneymoon.api';
import { Jumbotron } from 'react-bootstrap';
import AboutOurHoneymoonForm from './AboutOurHoneymoonForm';

class AboutOurHoneymoonPage extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurHoneymoon: '',
        };

        this.setAboutOurHoneymoonState = this.setAboutOurHoneymoonState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        aboutOurHoneymoonApi
            .get()
            .then((response) => {
                this.setState({
                    aboutOurHoneymoon: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error getting about our honeymoon', error);
            });
    }

    setAboutOurHoneymoonState(event) {
        this.setState({ aboutOurHoneymoon: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        aboutOurHoneymoonApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('About our honeymoon updated');
            })
            .catch((error) => {
                this.props.toastError('There was an error saving about our honeymoon', error);
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>About Our Honeymoon</h1>

                <AboutOurHoneymoonForm
                    aboutOurHoneymoon={this.state.aboutOurHoneymoon}
                    onChange={this.setAboutOurHoneymoonState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

AboutOurHoneymoonPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default AboutOurHoneymoonPage;
