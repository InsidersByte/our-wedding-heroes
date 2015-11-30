import React from 'react';
import { Jumbotron, Col, Table, Button } from 'react-bootstrap';

class HoneymoonGiftList extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
        };
    }

    addItem() {
        const items = this.state.items;
        items.push({id: this.state.items.length});

        this.setState({
            items,
        });
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
                                <th>Remove</th>
                            </tr>
                        </thead>

                        <tbody>
                        {this.state.items.map(item => (
                            <tr key={item.id}>
                                <th>{item.image}</th>
                                <th>{item.image}</th>
                                <th>{item.image}</th>
                                <th>{item.image}</th>
                                <th>{item.image}</th>
                                <th>{item.image}</th>
                                <th>{item.image}</th>
                            </tr>
                        ))}
                        </tbody>
                    </Table>

                    <Button onClick={this.addItem.bind(this)}>Add Item</Button>
                </Jumbotron>
            </Col>
        );
    }
}

export default HoneymoonGiftList;
