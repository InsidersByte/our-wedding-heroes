import React from 'react';
import { Jumbotron, Col, Button, Glyphicon } from 'react-bootstrap';
import HoneymoonGiftListItem from './HoneymoonGiftListItem.jsx';
import honeymoonGiftListItemApi from '../../api/honeymoonGiftListItem.api.js';
import HoneymoonGiftListTable from './HoneymoonGiftListTable.jsx';

class HoneymoonGiftListPage extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            showModal: false,
        };
    }

    componentDidMount() {
        this._loadItems();
    }

    save(item) {
        honeymoonGiftListItemApi
            .post(item)
            .then(() => {
                this.close();
                this._loadItems();
                this.props.toastSuccess('Honeymoon gift list item created');
            })
            .catch(() => {
                this.props.toastError('There was an error creating honeymoon gift list item');
            });
    }

    delete(item) {
        honeymoonGiftListItemApi
            .delete(item._id)
            .then(() => {
                this.close();
                this._loadItems();
                this.props.toastSuccess('honeymoon gift list item deleted');
            })
            .catch(() => {
                this.props.toastError('There was an error deleting honeymoon gift list item');
            });
    }

    _loadItems() {
        honeymoonGiftListItemApi
            .get()
            .then((response) => {
                this.setState({
                    items: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error getting honeymoon gift list items');
            });
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    render() {
        return (
            <Col md={12}>
                <Jumbotron>
                    <h1>Honeymoon Gift List <Button bsStyle="success" bsSize="small" onClick={this.open.bind(this)}><Glyphicon glyph="plus" /></Button></h1>

                    <HoneymoonGiftListTable items={this.state.items} onDelete={this.delete.bind(this)} />
                </Jumbotron>

                <HoneymoonGiftListItem show={this.state.showModal} onHide={this.close.bind(this)} onSave={this.save.bind(this)} />
            </Col>
        );
    }
}

HoneymoonGiftListPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default HoneymoonGiftListPage;
