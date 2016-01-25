import React from 'react';
import { Link } from 'react-router';
import FontAwesome from '../common/FontAwesome.jsx';

class Basket extends React.Component {
    render() {
        let element;

        if (this.props.basketCount > 0) {
            element = (
                <section className="basket">
                    <h3>Basket</h3>

                    <hr />

                    <ul className="basket__summary">
                        {
                            Object.keys(this.props.items).map(key => (
                                <li key={key}>{this.props.items[key].name} x {this.props.items[key].quantity}</li>
                            ))
                        }
                    </ul>

                    <hr />

                    <p>Total: £{this.props.total}</p>

                    <Link to="basket" className="btn btn-success btn-sm btn-block">
                        <FontAwesome icon="shopping-basket" /> Go to Basket
                    </Link>
                </section>
            );
        } else {
            element = null;
        }

        return element;
    }
}

Basket.propTypes = {
    items: React.PropTypes.object.isRequired,
    basketCount: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
};

export default Basket;
