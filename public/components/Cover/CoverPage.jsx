import React from 'react';
import CoverApi from '../../api/cover.api';
import { Jumbotron, Col } from 'react-bootstrap';
import CoverForm from './CoverForm.jsx';

class CoverPage extends React.Component {
    constructor() {
        super();

        this.state = {
            cover: {},
        };
    }

    componentDidMount() {
        CoverApi
            .get()
            .then((response) => {
                this.setState({
                    cover: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error saving getting cover');
            });
    }

    setCoverState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.cover[field] = value;
        return this.setState({cover: this.state.cover});
    }

    submit(event) {
        event.preventDefault();

        CoverApi
            .put(this.state.cover)
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

                    <CoverForm cover={this.state.cover} onChange={this.setCoverState.bind(this)} onSubmit={this.submit.bind(this)} />
                </Jumbotron>
            </Col>
        );
    }
}

CoverPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default CoverPage;
