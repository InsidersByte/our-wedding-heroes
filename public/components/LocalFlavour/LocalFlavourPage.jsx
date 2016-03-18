import React from 'react';
import localFlavourApi from '../../api/localFlavour.api';
import { Jumbotron } from 'react-bootstrap';
import LocalFlavourForm from './LocalFlavourForm';

class LocalFlavourPage extends React.Component {
    constructor() {
        super();

        this.state = {
            localFlavour: '',
        };

        this.updateState = this.updateState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        localFlavourApi
            .get()
            .then((response) => {
                this.setState({
                    localFlavour: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error loading the local flavour data', error);
            });
    }

    updateState(event) {
        this.setState({ localFlavour: event.target.value });
    }

    submit(event) {
        event.preventDefault();

        localFlavourApi
            .put(this.state)
            .then(() => {
                this.props.toastSuccess('Local flavour updated');
            })
            .catch((error) => {
                this.props.toastError('There was an error saving local flavour', error);
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>Local Flavour</h1>

                <LocalFlavourForm
                    localFlavour={this.state.localFlavour}
                    onChange={this.updateState}
                    onSubmit={this.submit}
                />
            </Jumbotron>
        );
    }
}

LocalFlavourPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default LocalFlavourPage;
