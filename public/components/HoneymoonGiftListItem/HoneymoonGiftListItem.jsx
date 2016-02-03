import React from 'react';
import { Button, Modal, Input } from 'react-bootstrap';

class HoneymoonGiftListItem extends React.Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.props.item);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <form onSubmit={this.handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Input
                            name="imageUrl"
                            type="url"
                            label="Image Url"
                            placeholder="Enter url"
                            value={this.props.item.imageUrl}
                            onChange={this.props.onChange}
                            required
                        />

                        <Input
                            name="name"
                            type="text"
                            label="Name"
                            placeholder="Enter name"
                            value={this.props.item.name}
                            onChange={this.props.onChange}
                            required
                        />

                        <Input
                            name="description"
                            type="textarea"
                            rows="10"
                            label="Description"
                            placeholder="Enter description"
                            value={this.props.item.description}
                            onChange={this.props.onChange}
                            required
                        />

                        <Input
                            name="requested"
                            type="number"
                            label="Requested"
                            placeholder="Enter requested"
                            value={this.props.item.requested}
                            onChange={this.props.onChange}
                            required
                        />

                        <Input
                            name="price"
                            type="number"
                            label="Price (£)"
                            placeholder="Enter price"
                            value={this.props.item.price}
                            onChange={this.props.onChange}
                            required
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" type="submit">Save</Button>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

HoneymoonGiftListItem.propTypes = {
    item: React.PropTypes.object.isRequired,
    show: React.PropTypes.bool.isRequired,
    onHide: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

export default HoneymoonGiftListItem;
