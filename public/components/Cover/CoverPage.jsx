import React from 'react';
import CoverApi from '../../api/cover.api';
import { Jumbotron, Col } from 'react-bootstrap';
import CoverForm from './CoverForm';
import moment from 'moment';

class CoverPage extends React.Component {
    constructor() {
        super();

        this.state = {
            cover: {},
        };

        this.setCoverState = this.setCoverState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        CoverApi
            .get()
            .then((response) => {
                const cover = response;

                if (cover.weddingDate) {
                    const weddingDate = moment(cover.weddingDate);
                    cover.weddingDate = weddingDate.format('YYYY-MM-DD');
                }

                this.setState({
                    cover,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error loading the cover data', error);
            });
    }

    setCoverState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.cover[field] = value;
        return this.setState({ cover: this.state.cover });
    }

    submit(event) {
        event.preventDefault();

        CoverApi
            .put(this.state.cover)
            .then(() => {
                this.props.toastSuccess('Cover updated');
            })
            .catch((error) => {
                this.props.toastError('There was an error saving cover', error);
            });
    }

    render() {
        return (
            <Col md={8} mdOffset={2}>
                <Jumbotron>
                    <h1>Cover</h1>

                    <CoverForm cover={this.state.cover} onChange={this.setCoverState} onSubmit={this.submit} />
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
