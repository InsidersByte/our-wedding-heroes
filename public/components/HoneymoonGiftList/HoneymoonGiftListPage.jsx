import React from 'react';
import { Jumbotron, Col, Button, Glyphicon } from 'react-bootstrap';
import HoneymoonGiftListItem from './HoneymoonGiftListItem.jsx';
import honeymoonGiftListItemApi from '../../api/honeymoonGiftListItem.api';
import HoneymoonGiftListTable from './HoneymoonGiftListTable.jsx';

class HoneymoonGiftListPage extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            showModal: false,
            item: {},
        };
    }

    componentDidMount() {
        this._loadItems();
    }

    save(item) {
        if (item._id) {
            honeymoonGiftListItemApi
                .put(item, item._id)
                .then(() => {
                    this.close();
                    this._loadItems();
                    this.props.toastSuccess('Honeymoon gift list item saved');
                })
                .catch(() => {
                    this.props.toastError('There was an error saving honeymoon gift list item');
                });
        } else {
            honeymoonGiftListItemApi
                .post(item)
                .then(() => {
                    this.close();
                    this._loadItems();
                    this.props.toastSuccess('Honeymoon gift list item saved');
                })
                .catch(() => {
                    this.props.toastError('There was an error saving honeymoon gift list item');
                });
        }
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

    open(item) {
        this.setState({showModal: true, item});
    }

    setItemState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.item[field] = value;
        return this.setState({item: this.state.item});
    }

    render() {
        return (
            <Col md={12}>
                <Jumbotron>
                    <h1>Honeymoon Gift List <Button bsStyle="success" bsSize="small" onClick={this.open.bind(this, {})}><Glyphicon glyph="plus" /></Button></h1>

                    <HoneymoonGiftListTable items={this.state.items} onEdit={this.open.bind(this)} onDelete={this.delete.bind(this)} />
                </Jumbotron>

                <HoneymoonGiftListItem item={this.state.item} show={this.state.showModal} onHide={this.close.bind(this)} onSubmit={this.save.bind(this)} onChange={this.setItemState.bind(this)} />
            </Col>
        );
    }
}

HoneymoonGiftListPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default HoneymoonGiftListPage;
