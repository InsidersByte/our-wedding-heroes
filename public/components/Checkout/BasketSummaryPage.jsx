import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import basketActions from '../../actions/basket.action.js';
import basketStore from '../../stores/basket.store.js';
import BasketSummary from './BasketSummary.jsx';

class BasketSummaryPage extends React.Component {
    constructor() {
        super();

        this.state = {
            items: basketStore.items,
            total: basketStore.total,
            basketCount: basketStore.count,
        };

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        basketStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        basketStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({
            items: basketStore.items,
            total: basketStore.total,
            basketCount: basketStore.count,
        });
    }

    removeFromBasket(item) {
        basketActions.removeFromBasket(item);
    }

    render() {
        return (
            <div>
                <BasketSummary items={this.state.items} total={this.state.total} onRemoveFromBasket={this.removeFromBasket.bind(this)} />

                <div style={{ textAlign: 'center' }}>
                    <Link to="gifter" className="btn btn-primary" role="button">Continue</Link>

                    <Link to="/" className="btn btn-default" role="button" style={{ marginLeft: '5px' }}>Back</Link>
                </div>
            </div>
        );
    }
}

export default BasketSummaryPage;
