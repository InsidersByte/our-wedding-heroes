import React from 'react';
import { Link } from 'react-router';
import basketActions from '../../actions/basket.action.js';
import basketStore from '../../stores/basket.store.js';
import BasketSummaryTable from './BasketSummaryTable.jsx';

class BasketSummaryPage extends React.Component {
    constructor() {
        super();

        this.state = {
            items: basketStore.items,
            total: basketStore.total,
            basketCount: basketStore.count,
        };

        this._onChange = this._onChange.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
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
            <section className="landing__section">
                <h1 className="landing__section__heading">
                    Subtotal ({this.state.basketCount} items): £{this.state.total}
                </h1>

                <div className="landing__section__content">
                    <BasketSummaryTable
                        items={this.state.items}
                        total={this.state.total}
                        onRemoveFromBasket={this.removeFromBasket}
                    />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Link to="giver" className="btn btn-primary" role="button">Continue</Link>

                    <Link
                        to="/"
                        className="btn btn-default"
                        role="button"
                        style={{ marginLeft: '5px' }}
                    >
                        Back
                    </Link>
                </div>
            </section>
        );
    }
}

export default BasketSummaryPage;
