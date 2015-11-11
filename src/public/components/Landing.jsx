import React from 'react';
import {GoogleMap} from 'react-google-maps';
import {Col, Panel} from 'react-bootstrap';
import weddingProfile from '../services/weddingProfile';
import './landing.styl';

class Landing extends React.Component {
    constructor() {
        super();

        this.state = {
            weddingProfile: {
                cover: {},
                aboutUs: '',
                aboutOurDay: '',
                aboutOurHoneymoon: '',
            },
        };
    }

    componentDidMount() {
        weddingProfile
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
    }

    render() {
        return (
            <div className="landing">
                <header className="landing__header">
                    <div className="landing__header__content">
                        <h1 className="landing__header__content__header">{this.state.weddingProfile.cover.title}</h1>
                    </div>
                </header>
                <section className="landing__section">
                    <h1 className="landing__section__heading">A little bit about us</h1>

                    <Col md={6} mdOffset={3}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutUs}
                        </span>
                    </Col>
                </section>
                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">About our day</h1>

                    <Col md={6} mdOffset={3}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurDay}
                        </span>
                    </Col>
                </section>
                <section className="landing__section">
                    <h1 className="landing__section__heading">Where is it</h1>

                    <Col md={6} mdOffset={3}>
                        <GoogleMap
                            containerProps={{style: {height: '500px'}}}
                            ref="map"
                            defaultZoom={3}
                            defaultCenter={{lat: -25.363882, lng: 131.044922}}/>
                    </Col>
                </section>
                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">Requests for the day</h1>

                    <Col md={4}>
                        <Panel className="landing__section__panel">
                            <h3>Request</h3>
                        </Panel>
                    </Col>

                    <Col md={4}>
                        <Panel className="landing__section__panel">
                            <h3>Request</h3>
                        </Panel>
                    </Col>

                    <Col md={4}>
                        <Panel className="landing__section__panel">
                            <h3>Request</h3>
                        </Panel>
                    </Col>
                </section>
                <section className="landing__section">
                    <h1 className="landing__section__heading">About our honeymoon</h1>

                    <Col md={6} mdOffset={3}>
                        <span className="landing__section__pre">
                            {this.state.weddingProfile.aboutOurHoneymoon}
                        </span>
                    </Col>
                </section>
                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">Honeymoon Gift List</h1>
                </section>
            </div>
        );
    }
}

export default Landing;
