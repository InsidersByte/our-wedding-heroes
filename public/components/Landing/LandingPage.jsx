import React from 'react';
import FontAwesome from '../common/FontAwesome.jsx';
import WeddingProfileApi from '../../api/weddingProfile.api.js';
import basketActions from '../../actions/basket.action.js';
import basketStore from '../../stores/basket.store.js';
import GiftItem from './GiftItem.jsx';
import Basket from './Basket.jsx';
import LandingSection from './LandingSection.jsx';
import MarkdownRenderer from '../common/MarkdownRenderer.jsx';
import moment from 'moment';

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
                rsvp: '',
                songSuggestion: '',
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
                const weddingProfile = response;

                if (weddingProfile.cover && weddingProfile.cover.weddingDate) {
                    const weddingDate = moment(weddingProfile.cover.weddingDate);
                    const now = moment.now();

                    const daysToGo = weddingDate.diff(now, 'days');

                    weddingProfile.cover.daysToGo = daysToGo;
                }

                this.setState({
                    weddingProfile,
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
        let daysTillIDoCountdown = null;

        if (this.state.weddingProfile.cover.weddingDate) {
            daysTillIDoCountdown = (
                <h2>
                    {this.state.weddingProfile.cover.daysToGo} Days until I Do
                </h2>
            );
        }

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

                        {daysTillIDoCountdown}

                        <div style={{ flex: '1 1 10%', maxHeight: '10%' }}></div>
                    </div>
                </header>

                <LandingSection title="A little bit about us">
                    <MarkdownRenderer markdown={this.state.weddingProfile.aboutUs} />
                </LandingSection>

                <LandingSection title="RSVP">
                    <MarkdownRenderer markdown={this.state.weddingProfile.rsvp} />
                </LandingSection>

                <LandingSection title="About our Day">
                    <MarkdownRenderer markdown={this.state.weddingProfile.aboutOurDay} />
                </LandingSection>

                <LandingSection title="the wedding playlist">
                    <MarkdownRenderer markdown={this.state.weddingProfile.songSuggestions} />
                </LandingSection>

                <LandingSection title="about our honeymoon">
                    <MarkdownRenderer markdown={this.state.weddingProfile.aboutOurHoneymoon} />
                </LandingSection>

                <section className="landing__section">
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
