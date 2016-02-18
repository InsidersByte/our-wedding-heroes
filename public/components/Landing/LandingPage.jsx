import React from 'react';
import FontAwesome from '../common/FontAwesome.jsx';
import WeddingProfileApi from '../../api/weddingProfile.api.js';
import basketActions from '../../actions/basket.action.js';
import basketStore from '../../stores/basket.store.js';
import GiftItems from './GiftItems.jsx';
import Basket from './Basket.jsx';
import LandingHeader from './LandingHeader.jsx';
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
                songSuggestions: '',
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
                <span style={{ marginBottom: '10px' }}>
                    <br />
                    <br />

                    <FontAwesome icon="info-circle" /> {this.state.weddingProfile.honeymoonGiftList.disclaimerMessage}
                </span>
            );
        }

        const giftItemsElement = (
            <GiftItems
                giftItems={this.state.weddingProfile.honeymoonGiftListItems}
                addToBasket={this.addToBasket}
                basketItems={this.state.items}
            />
        );

        return (
            <div className="landing">
                <LandingHeader cover={this.state.weddingProfile.cover} />

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

                <LandingSection title="Gift List" postContent={giftItemsElement}>
                    <span style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.weddingProfile.honeymoonGiftList.content}
                        </span>

                    {offlinePaymentMessage}

                    {disclaimerMessage}
                </LandingSection>

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
