import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import reactMixin from 'react-mixin';
import { Button, Modal, Input } from 'react-bootstrap';

class HoneymoonGiftListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSave(this.state);
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Input type="text" label="Name" placeholder="Enter Name" valueLink={this.linkState('name')} required/>
                        <Input type="textarea" rows="10" label="Description" placeholder="Enter Description" valueLink={this.linkState('description')} required/>
                        <Input type="number" label="Requested" placeholder="Enter Requested" valueLink={this.linkState('requested')} required/>
                        <Input type="number" label="Price (£)" placeholder="Enter Price" valueLink={this.linkState('price')} required/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" type="submit">Add</Button>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

HoneymoonGiftListItem.propTypes = {
    show: React.PropTypes.bool.isRequired,
    onHide: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
};

reactMixin(HoneymoonGiftListItem.prototype, LinkedStateMixin);

export default HoneymoonGiftListItem;
