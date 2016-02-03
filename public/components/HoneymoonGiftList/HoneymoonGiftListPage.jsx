import React from 'react';
import HoneymoonGiftListApi from '../../api/honeymoonGiftList.api';
import { Jumbotron, Col } from 'react-bootstrap';
import HoneymoonGiftListForm from './HoneymoonGiftListForm.jsx';

class HoneymoonGiftListPage extends React.Component {
    constructor() {
        super();

        this.state = {
            honeymoonGiftList: {},
        };

        this.setHoneymoonGiftListState = this.setHoneymoonGiftListState.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        HoneymoonGiftListApi
            .get()
            .then((response) => {
                this.setState({
                    honeymoonGiftList: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error loading the honeymoonGiftList data');
            });
    }

    setHoneymoonGiftListState(event) {
        const field = event.target.name;
        let value = event.target.value;

        if (event.target.checked !== undefined) {
            value = event.target.checked;
        }

        this.state.honeymoonGiftList[field] = value;
        return this.setState({ honeymoonGiftList: this.state.honeymoonGiftList });
    }

    submit(event) {
        event.preventDefault();

        HoneymoonGiftListApi
            .put(this.state.honeymoonGiftList)
            .then(() => {
                this.props.toastSuccess('HoneymoonGiftList updated');
            })
            .catch(() => {
                this.props.toastError('There was an error saving honeymoonGiftList');
            });
    }

    render() {
        return (
            <Col md={8} mdOffset={2}>
                <Jumbotron>
                    <h1>Honeymoon Gift List</h1>

                    <HoneymoonGiftListForm
                        honeymoonGiftList={this.state.honeymoonGiftList}
                        onChange={this.setHoneymoonGiftListState}
                        onSubmit={this.submit}
                    />
                </Jumbotron>
            </Col>
        );
    }
}

HoneymoonGiftListPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default HoneymoonGiftListPage;
