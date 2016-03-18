import React from 'react';
import { Link } from 'react-router';
import basketActions from '../../actions/basket.action';
import basketStore from '../../stores/basket.store';
import BasketSummaryTable from './BasketSummaryTable';

import './BasketSummary.styl';

class BasketSummaryPage extends React.Component {
    constructor() {
        super();

        this.state = {
            items: basketStore.items,
            total: basketStore.total,
            basketCount: basketStore.count,
        };

        this._onChange = this._onChange.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.removeFromBasket = this.removeFromBasket.bind(this);
        this.deleteFromBasket = this.deleteFromBasket.bind(this);
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

    addToBasket(item) {
        basketActions.addToBasket(item);
    }

    removeFromBasket(item) {
        basketActions.removeFromBasket(item);
    }

    deleteFromBasket(item) {
        basketActions.deleteFromBasket(item);
    }

    render() {
        let content;

        if (basketStore.count > 0) {
            content = (
                <div className="basket-summary__container">
                    <h1 className="basket-summary__title">
                        Subtotal ({this.state.basketCount} items): £{this.state.total}
                    </h1>

                    <div className="basket-summary__content">
                        <BasketSummaryTable
                            items={this.state.items}
                            total={this.state.total}
                            onAdd={this.addToBasket}
                            onRemove={this.removeFromBasket}
                            onDelete={this.deleteFromBasket}
                        />
                    </div>

                    <div className="basket-summary__actions">
                        <Link to="giver" className="btn btn-success" role="button">Proceed to Checkout</Link>

                        <Link
                            to="/"
                            className="btn btn-default"
                            role="button"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            );
        } else {
            content = (
                <div className="basket-summary__container">
                    <h1 className="basket-summary__title">
                        Your Basket is empty!
                    </h1>

                    <div className="basket-summary__actions">
                        <Link
                            to="/"
                            className="btn btn-success"
                            role="button"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            );
        }

        return (
            <section className="basket-summary">
                {content}
            </section>
        );
    }
}

export default BasketSummaryPage;
