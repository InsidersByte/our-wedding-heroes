import React from 'react';
import FontAwesome from '../common/FontAwesome.jsx';
import WeddingProfileApi from '../../api/weddingProfile.api.js';
import basketActions from '../../actions/basket.action.js';
import basketStore from '../../stores/basket.store.js';
import GiftItem from './GiftItem.jsx';
import Basket from './Basket.jsx';

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
                honeymoonGiftList: {},
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
        let offlinePaymentMessage = null;
        let disclaimerMessage = null;

        if (this.state.weddingProfile.honeymoonGiftList.showOfflinePaymentMessage) {
            offlinePaymentMessage = (
                <span>
                    <br />
                    <br />

                    <FontAwesome icon="info-circle" /> {this.state.weddingProfile.honeymoonGiftList.offlinePaymentMessage}
                </span>
            );
        }

        if (this.state.weddingProfile.honeymoonGiftList.showDisclaimerMessage) {
            disclaimerMessage = (
                <span>
                    <br />
                    <br />

                    <FontAwesome icon="info-circle" /> {this.state.weddingProfile.honeymoonGiftList.disclaimerMessage}
                </span>
            );
        }

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
                    <h1 className="landing__section__heading">Gift List</h1>

                    <div className="landing__section__content">
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.honeymoonGiftList.content}
                        </span>

                        {offlinePaymentMessage}

                        {disclaimerMessage}
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

                <Basket items={this.state.items} basketCount={this.state.basketCount} total={this.state.total} />
            </div>
        );
    }
}

LandingPage.propTypes = {
    toastSuccess: React.PropTypes.func,
    toastError: React.PropTypes.func,
};

export default LandingPage;
