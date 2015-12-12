import React from 'react';
import {Col, Table} from 'react-bootstrap';
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
            items: [],
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
        });
    }

    addToBasket(item, event) {
        basketActions.addToBasket(item, parseInt(event.target.value, 10));
    }

    render() {
        return (
            <div className="landing">
                <header className="landing__header" style={{backgroundImage: `url(${this.state.weddingProfile.cover.imageUrl})`}}>
                    <div className="landing__header__overlay"></div>
                    <div className="landing__header__content">
                        <h1 className="landing__header__content__header">{this.state.weddingProfile.cover.title}</h1>
                    </div>
                </header>

                <section className="landing__section">
                    <h1 className="landing__section__heading">A little bit about us</h1>

                    <Col md={8} mdOffset={2}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutUs}
                        </span>
                    </Col>
                </section>

                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">About our day</h1>

                    <Col md={8} mdOffset={2}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurDay}
                        </span>
                    </Col>
                </section>

                <section className="landing__section">
                    <h1 className="landing__section__heading">About our honeymoon</h1>

                    <Col md={8} mdOffset={2}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurHoneymoon}
                        </span>
                    </Col>
                </section>

                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">Honeymoon Gift List</h1>

                    <Col md={10} mdOffset={1}>
                        <Table condensed responsive className="table--vertical-align-middle">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Requested</th>
                                    <th>Remaining</th>
                                    <th>Price (£)</th>
                                    <th>Gift</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.weddingProfile.honeymoonGiftListItems.map(item => (
                                    <GiftItem key={item._id} item={item} addToBasket={this.addToBasket.bind(this, item)} />
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </section>

                <section className="landing__section">
                    <h1 className="landing__section__heading">Basket</h1>

                    <Col md={8} mdOffset={2}>
                        <Table condensed responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price (£)</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.items.map(item => (
                                        <tr key={item._id}>
                                            <th>{item.name}</th>
                                            <th>{item.quantity}</th>
                                            <th>{item.price}</th>
                                            <th>Coming Soon!</th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </section>
            </div>
        );
    }
}

export default LandingPage;
