import React from 'react';
import { Jumbotron, Col, Table, Button, Glyphicon } from 'react-bootstrap';
import HoneymoonGiftListItem from './HoneymoonGiftListItem.jsx';
import honeymoonGiftListItemApi from '../../api/honeymoonGiftListItem.api.js';

class HoneymoonGiftList extends React.Component {
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

                    <Table striped bordered condensed hover responsive>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Requested</th>
                                <th>Remaining</th>
                                <th>Price (£)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.items.map(item => (
                                <tr key={item._id}>
                                    <th>{item.imageUrl}</th>
                                    <th>{item.name}</th>
                                    <th>{item.description}</th>
                                    <th>{item.requested}</th>
                                    <th>{item.remaining}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        <Button bsSize="xsmall" bsStyle="primary"><Glyphicon glyph="pencil" /></Button>
                                        <Button bsSize="xsmall" bsStyle="danger" style={{marginLeft: '5px'}} onClick={this.delete.bind(this, item)}><Glyphicon glyph="trash" /></Button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Jumbotron>

                <HoneymoonGiftListItem show={this.state.showModal} onHide={this.close.bind(this)} onSave={this.save.bind(this)} />
            </Col>
        );
    }
}

HoneymoonGiftList.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default HoneymoonGiftList;
