import React from 'react';
import aboutOurDayApi from '../../api/aboutOurDay.api';
import { Jumbotron } from 'react-bootstrap';
import AboutOurDayForm from './AboutOurDayForm.jsx';

class AboutOurDayPage extends React.Component {
    constructor() {
        super();

        this.state = {
            aboutOurDay: '',
        };

        this.setAboutOurDayState = this.setAboutOurDayState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        aboutOurDayApi
            .get()
            .then((response) => {
                this.setState({
                    aboutOurDay: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error loading the about our day data');
            });
    }

    setAboutOurDayState(event) {
        this.setState({ aboutOurDay: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        aboutOurDayApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('About our day updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving about our day');
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>About Our Day</h1>

                <AboutOurDayForm
                    aboutOurDay={this.state.aboutOurDay}
                    onChange={this.setAboutOurDayState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

AboutOurDayPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default AboutOurDayPage;
