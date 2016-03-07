import React from 'react';
import aboutUsApi from '../../api/aboutUs.api';
import { Jumbotron } from 'react-bootstrap';
import AboutUsForm from './AboutUsForm.jsx';

class AboutUsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutUs: '',
        };

        this.setAboutUsState = this.setAboutUsState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        aboutUsApi
            .get()
            .then((response) => {
                this.setState({
                    aboutUs: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error getting about us', error);
            });
    }

    setAboutUsState(event) {
        this.setState({ aboutUs: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        aboutUsApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('About us updated');
            })
            .catch((error) => {
                this.props.toastError('There was an error saving about us', error);
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>About Us</h1>

                <AboutUsForm
                    aboutUs={this.state.aboutUs}
                    onChange={this.setAboutUsState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

AboutUsPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default AboutUsPage;
