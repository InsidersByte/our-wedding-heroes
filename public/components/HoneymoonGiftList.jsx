import React from 'react';
import { Jumbotron, Col, Table, Button } from 'react-bootstrap';
import HoneymoonGiftListItem from './HoneymoonGiftListItem.jsx';

class HoneymoonGiftList extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            showModal: false,
        };
    }

    save() {
        const items = this.state.items;
        items.push({});

        this.setState({
            items,
        });

        this.close();
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
                    <h1>Honeymoon Gift List</h1>

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
                                    <th>{item.image}</th>
                                    <th>{item.name}</th>
                                    <th>{item.description}</th>
                                    <th>{item.requested}</th>
                                    <th>{item.remaining}</th>
                                    <th>{item.price}</th>
                                    <th>Coming Soon!</th>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Button onClick={this.open.bind(this)}>Add Item</Button>
                </Jumbotron>

                <HoneymoonGiftListItem show={this.state.showModal} onHide={this.close.bind(this)} />
            </Col>
        );
    }
}

export default HoneymoonGiftList;
