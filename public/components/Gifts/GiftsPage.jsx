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
    }

    componentDidMount() {
        GiftApi
            .get()
            .then((response) => {
                this.setState({
                    gifts: response,
                });
            })
            .catch(() => {
                this.props.toastError('There was an error getting gifts');
            });
    }

    render() {
        return (
            <Jumbotron>
                <h1>Gifts</h1>

                <GiftsTable gifts={this.state.gifts} />
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
