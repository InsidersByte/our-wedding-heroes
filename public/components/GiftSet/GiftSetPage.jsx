import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import GiftSetTable from './GiftSetTable.jsx';
import GiftSetApi from '../../api/giftSet.api';

class GiftSetPage extends React.Component {
    constructor() {
        super();

        this.state = {
            giftSets: [],
        };

        this.markAsPaid = this.markAsPaid.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this._loadGiftSets();
    }

    markAsPaid() {
        // TODO: Use a confirmation model instead of confirm
        if (!confirm('Are you sure you want to mark this gift as paid?')) {
            return;
        }

        this.props.toastError('Not yet implemented, please come again soon');
    }

    delete(giftSet) {
        // TODO: Use a confirmation model instead of confirm
        if (!confirm('Are you sure you want to delete this gift set?')) {
            return;
        }

        GiftSetApi
            .delete(giftSet._id)
            .then(() => {
                this._loadGiftSets();
                this.props.toastSuccess('Gift deleted');
            })
            .catch((error) => {
                this.props.toastError('There was an error deleting a gift set', error);
            });
    }

    _loadGiftSets() {
        GiftSetApi
            .get()
            .then((response) => {
                this.setState({
                    giftSets: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error getting gift sets', error);
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>Gift Sets</h1>

                <GiftSetTable giftSets={this.state.giftSets} onMarkAsPaid={this.markAsPaid} onDelete={this.delete} />
            </Jumbotron>
        );
    }
}

GiftSetPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

GiftSetPage.defaultProps = {};

export default GiftSetPage;
