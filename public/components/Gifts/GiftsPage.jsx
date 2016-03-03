import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import GiftsTable from './GiftsTable.jsx';
import GiftApi from '../../api/gift.api';

class GiftsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            gifts: [],
        };

        this.markAsPaid = this.markAsPaid.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount() {
        this._loadGifts();
    }

    markAsPaid() {
        // TODO: Use a confirmation model instead of confirm
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }

        this.props.toastError('Not yet implemented, please come again soon');
    }

    delete(gift) {
        // TODO: Use a confirmation model instead of confirm
        if (!confirm('Are you sure you want to delete this gift?')) {
            return;
        }

        GiftApi
            .delete(gift._id)
            .then(() => {
                this._loadGifts();
                this.props.toastSuccess('Gift deleted');
            })
            .catch((error) => {
                this.props.toastError('There was an error deleting a gift', error);
            });
    }

    _loadGifts() {
        GiftApi
            .get()
            .then((response) => {
                this.setState({
                    gifts: response,
                });
            })
            .catch((error) => {
                this.props.toastError('There was an error getting gifts', error);
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>Gifts</h1>

                <GiftsTable gifts={this.state.gifts} onMarkAsPaid={this.markAsPaid} onDelete={this.delete} />
            </Jumbotron>
        );
    }
}

GiftsPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

GiftsPage.defaultProps = {};

export default GiftsPage;
