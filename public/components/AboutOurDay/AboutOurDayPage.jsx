import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import AboutOurDayForm from './AboutOurDayForm';
import AboutOurDayStore from '../../stores/AboutOurDayStore';
import AboutOurDayActions from '../../actions/AboutOurDayActions';

class AboutOurDayPage extends React.Component {
    constructor() {
        super();

        this.state = AboutOurDayStore.getState();

        this.setAboutOurDayState = this.setAboutOurDayState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        AboutOurDayStore.listen(this.onChange);
        AboutOurDayActions.fetch();
    }

    componentWillUnmount() {
        AboutOurDayStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    setAboutOurDayState(event) {
        this.setState({ aboutOurDay: event.target.value });
    }

    submit(event) {
        event.preventDefault();
        AboutOurDayActions.update(this.state);
    }

    render() {
        return (
            <Jumbotron>
                <h1>About Our Day</h1>

                <AboutOurDayForm
                    aboutOurDay={this.state.aboutOurDay}
                    onChange={this.setAboutOurDayState}
                    onSubmit={this.submit}
                    saving={this.state.saving}
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
