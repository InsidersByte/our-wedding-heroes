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
            .catch(() => {
                this.props.toastError('There was an error loading the profile data');
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
        const backgroundImageStyle = { backgroundImage: `url(${this.state.weddingProfile.cover.imageUrl})` };

        return (
            <div className="landing">
                <header className="landing__header" style={backgroundImageStyle}>
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

                    <div className="landing__section__content">
                        the idea behind this was that we didn't want to do a traditional wedding list as you may know we
                        have been living together for a few years now, so we don't really need anything for the house. we
                        didn't want to just ask for money or vouchers, so we thought we would setup this website so that
                        if you do decide to give us a wedding gift, then you can give us a gift towards our honeymoon.
                        we are then going to send photos after our honeymoon matching the gifts you gave us.

                        <br /><br />

                        <FontAwesome icon="info-circle" /> all payments at the moment are offline (via bank transfer or cash).
                        We will send you our payment details after you have confirmed your gift.

                        <br /><br />

                        <FontAwesome icon="info-circle" /> these items might change slightly when we finalise our plans.
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                            this.state.weddingProfile.honeymoonGiftListItems.map(item => (
                                <GiftItem
                                    key={item._id}
                                    item={item}
                                    addToBasket={this.addToBasket}
                                    basketItems={this.state.items}
                                />
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

                        <Link to="basket">
                            <Button bsStyle="success" bsSize="small" block><FontAwesome icon="shopping-basket" /> Go to Basket</Button>
                        </Link>
                    </section>
                    : null
                }
            </div>
        );
    }
}

LandingPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default LandingPage;
