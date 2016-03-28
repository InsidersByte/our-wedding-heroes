import React from 'react';
import FontAwesome from '../common/FontAwesome';
import WeddingProfileApi from '../../api/weddingProfile.api';
import basketActions from '../../actions/basket.action';
import basketStore from '../../stores/basket.store';
import GiftItems from './GiftItems';
import Basket from './Basket';
import LandingHeader from './LandingHeader';
import LandingSection from './LandingSection';
import MarkdownRenderer from 'react-markdown-renderer';
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
                weddingPlaylist: '',
                localFlavour: '',
                onTheDay: '',
            },
            items: basketStore.items,
            total: basketStore.total,
            basketCount: basketStore.count,
        };
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

    _onChange = () => {
        this.setState({
            items: basketStore.items,
            total: basketStore.total,
            basketCount: basketStore.count,
        });
    };

    addToBasket(item, event) {
        basketActions.addToBasket(item, parseInt(event.target.value, 10));
    }

    renderOfflineMessage = () => {
        if (this.state.weddingProfile.honeymoonGiftList.showOfflinePaymentMessage) {
            return (
                <span>
                    <br />
                    <br />

                    <FontAwesome icon="info-circle" /> {this.state.weddingProfile.honeymoonGiftList.offlinePaymentMessage}
                </span>
            );
        }

        return null;
    };

    renderDisclaimerMessage = () => {
        if (this.state.weddingProfile.honeymoonGiftList.showDisclaimerMessage) {
            return (
                <span style={{ marginBottom: '10px' }}>
                    <br />
                    <br />

                    <FontAwesome icon="info-circle" /> {this.state.weddingProfile.honeymoonGiftList.disclaimerMessage}
                </span>
            );
        }

        return null;
    };

    render() {
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

                <LandingSection title="Local Flavour">
                    <MarkdownRenderer markdown={this.state.weddingProfile.localFlavour} />
                </LandingSection>

                <LandingSection title="On The Day">
                    <MarkdownRenderer markdown={this.state.weddingProfile.onTheDay} />
                </LandingSection>

                <LandingSection title="the wedding playlist">
                    <MarkdownRenderer markdown={this.state.weddingProfile.weddingPlaylist} />
                </LandingSection>

                <LandingSection title="about our honeymoon">
                    <MarkdownRenderer markdown={this.state.weddingProfile.aboutOurHoneymoon} />
                </LandingSection>

                <LandingSection title="Gift List" postContent={giftItemsElement}>
                    <div>
                        <span style={{ whiteSpace: 'pre-wrap' }}>
                            {this.state.weddingProfile.honeymoonGiftList.content}
                        </span>

                        {this.renderOfflineMessage()}

                        {this.renderDisclaimerMessage()}
                    </div>
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
