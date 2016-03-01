import React from 'react';
import { Jumbotron, Col, Button, Glyphicon } from 'react-bootstrap';
import HoneymoonGiftListItem from './HoneymoonGiftListItem.jsx';
import honeymoonGiftListItemApi from '../../api/honeymoonGiftListItem.api';
import HoneymoonGiftListItemTable from './HoneymoonGiftListItemTable.jsx';

class HoneymoonGiftListItemPage extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            showModal: false,
            item: {},
        };

        this.add = this.add.bind(this);
        this.open = this.open.bind(this);
        this.delete = this.delete.bind(this);
        this.close = this.close.bind(this);
        this.save = this.save.bind(this);
        this.setItemState = this.setItemState.bind(this);
    }

    componentDidMount() {
        this._loadItems();
    }

    setItemState(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.state.item[field] = value;
        return this.setState({ item: this.state.item });
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
        // TODO: Use a confirmation model instead of confirm
        if (!confirm('Are you sure you want to delete this gift item?')) { //eslint-disable-line
            return;
        }

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

    add() {
        this.open({});
    }

    close() {
        this.setState({ showModal: false });
    }

    open(itemToEdit) {
        const item = Object.assign({}, itemToEdit);
        this.setState({ showModal: true, item });
    }

    render() {
        return (
            <Col md={12}>
                <Jumbotron>
                    <h1>
                        Honeymoon Gift List Items&nbsp;
                        <Button bsStyle="success" bsSize="small" onClick={this.add}>
                            <Glyphicon glyph="plus" />
                        </Button>
                    </h1>

                    <HoneymoonGiftListItemTable items={this.state.items} onEdit={this.open} onDelete={this.delete} />
                </Jumbotron>

                <HoneymoonGiftListItem
                    item={this.state.item}
                    show={this.state.showModal}
                    onHide={this.close}
                    onSubmit={this.save}
                    onChange={this.setItemState}
                />
            </Col>
        );
    }
}

HoneymoonGiftListItemPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default HoneymoonGiftListItemPage;