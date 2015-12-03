import React from 'react';
import { Jumbotron, Col, Table, Button, Glyphicon } from 'react-bootstrap';
import HoneymoonGiftListItem from './HoneymoonGiftListItem.jsx';
import honeymoonGiftListService from '../services/honeymoonGiftList';

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
        honeymoonGiftListService
            .post(item)
            .then(() => {
                this.close();
                this._loadItems();
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an error creating a new gift item'); //eslint-disable-line
                console.log('Error creating a gift item', error); //eslint-disable-line
            });
    }

    delete(item) {
        honeymoonGiftListService
            .delete(item._id)
            .then(() => {
                this.close();
                this._loadItems();
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an error deleting a gift item'); //eslint-disable-line
                console.log('Error deleting a gift item', error); //eslint-disable-line
            });
    }

    _loadItems() {
        honeymoonGiftListService
            .get()
            .then((response) => {
                this.setState({
                    items: response,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an error getting the gift item data'); //eslint-disable-line
                console.log('Error getting gift item data', error); //eslint-disable-line
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
            <Col md={8} mdOffset={2}>
                <Jumbotron>
                    <h1>Honeymoon Gift List <Button bsStyle="success" bsSize="small" onClick={this.open.bind(this)}><Glyphicon glyph="plus" /></Button></h1>

                    <Table striped bordered condensed hover>
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
                                <tr key={item.id}>
                                    <th>Coming Soon</th>
                                    <th>{item.name}</th>
                                    <th>{item.description}</th>
                                    <th>{item.requested}</th>
                                    <th>Coming Soon</th>
                                    <th>{item.price}</th>
                                    <th>Coming Soon!</th>
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

export default HoneymoonGiftList;
