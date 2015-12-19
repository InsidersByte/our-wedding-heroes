import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import FontAwesome from '../common/FontAwesome.jsx';
import WeddingProfileApi from '../../api/weddingProfile.api.js';
import basketActions from '../../actions/basket.action.js';
import basketStore from '../../stores/basket.store.js';
import GiftItem from './GiftItem.jsx';

import './Landing.styl';

class LandingPage extends React.Component {
    constructor() {
        super();

        this.state = {
            weddingProfile: {
                cover: {},
                aboutUs: '',
                aboutOurDay: '',
                aboutOurHoneymoon: '',
                honeymoonGiftListItems: [],
            },
            items: basketStore.items,
            total: basketStore.total,
            basketCount: basketStore.count,
        };

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        WeddingProfileApi
            .get()
            .then((response) => {
                this.setState({
                    weddingProfile: response,
                });
            })
            .catch((error) => {
                // TODO: use some sort of toastr

                alert('There\'s an getting the wedding profile data'); //eslint-disable-line
                console.log('Error getting wedding profile data', error); //eslint-disable-line
            });

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

    addToBasket(item, event) {
        basketActions.addToBasket(item, parseInt(event.target.value, 10));
    }

    render() {
        return (
            <div className="landing">
                <header className="landing__header" style={{ backgroundImage: `url(${this.state.weddingProfile.cover.imageUrl})` }}>
                    <div className="landing__header__overlay"></div>
                    <div className="landing__header__content">
                        <h1 className="landing__header__content__header">{this.state.weddingProfile.cover.title}</h1>
                    </div>
                </header>

                <section className="landing__section">
                    <h1 className="landing__section__heading">A little bit about us</h1>

                    <div className="landing__section__content">
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutUs}
                        </span>
                    </div>
                </section>

                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">About our day</h1>

                    <div className="landing__section__content">
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurDay}
                        </span>
                    </div>
                </section>

                <section className="landing__section">
                    <h1 className="landing__section__heading">About our honeymoon</h1>

                    <div className="landing__section__content">
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurHoneymoon}
                        </span>
                    </div>
                </section>

                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">Honeymoon Gift List</h1>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            this.state.weddingProfile.honeymoonGiftListItems.map(item => (
                                <div className="gift-item" key={item._id}>
                                    <GiftItem item={item} addToBasket={this.addToBasket.bind(this, item)} basketItems={this.state.items} />
                                </div>
                            ))
                        }
                    </div>
                </section>

                { this.state.basketCount > 0 ?
                    <section className="basket">
                        <h3>Basket</h3>

                        <hr />

                        <ul className="basket__summary">
                            {
                                Object.keys(this.state.items).map(key => (
                                    <li key={key}>{this.state.items[key].name} x {this.state.items[key].quantity}</li>
                                ))
                            }
                        </ul>

                        <hr />

                        <p>Total: £{this.state.total}</p>

                        <Link to="basket"><Button bsSize="small" block><FontAwesome icon="shopping-basket" /> Go to Basket</Button></Link>
                    </section>
                    : null
                }
            </div>
        );
    }
}

export default LandingPage;
