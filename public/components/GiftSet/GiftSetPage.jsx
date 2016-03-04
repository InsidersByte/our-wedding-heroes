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
    }

    componentDidMount() {
        this._loadGiftSets();
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

                <GiftSetTable giftSets={this.state.giftSets} />
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
