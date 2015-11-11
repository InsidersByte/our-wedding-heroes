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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula consectetur
                            pharetra.
                            Vivamus consectetur dapibus nibh, eu ullamcorper tellus posuere at. Ut vehicula nec elit
                            vitae
                            finibus. Aliquam sit amet nulla sed metus eleifend consequat. In vel tincidunt velit.
                            Praesent
                            porttitor viverra gravida. Donec fringilla ante nec lobortis aliquam.
                        </p>
                        <p>
                            Maecenas aliquam gravida aliquam. Cras blandit molestie posuere. Vivamus ornare euismod
                            euismod.
                            Cras cursus augue arcu, a vehicula massa maximus et. Aliquam eu turpis ac tortor
                            eleifend
                            faucibus.
                            Nullam imperdiet molestie semper. Morbi porttitor consequat gravida. Integer nibh leo,
                            aliquam
                            non
                            elit sit amet, auctor blandit ligula.
                        </p>
                        <p>
                            Cras justo elit, vulputate vitae ante ac, tempor vehicula justo. Class aptent taciti
                            sociosqu ad
                            litora torquent per conubia nostra, per inceptos himenaeos. Curabitur in ligula massa.
                            Vivamus
                            consectetur tellus ac mauris elementum, id volutpat tortor fringilla. Aliquam dignissim
                            nibh
                            ac
                            orci
                            congue, gravida hendrerit purus egestas. Suspendisse potenti. Nullam egestas rutrum
                            magna at
                            varius.
                            Morbi suscipit ex vel neque efficitur, nec rhoncus risus lacinia. Maecenas feugiat ex ut
                            lorem
                            accumsan ullamcorper. Aliquam ultricies orci in urna dignissim vulputate. Suspendisse
                            aliquam
                            lobortis tempor. Quisque sit amet accumsan lacus, non dictum odio. Phasellus pulvinar
                            enim a
                            felis
                            ullamcorper consequat. Aliquam magna magna, ultrices eu molestie et, facilisis non
                            turpis.
                            Duis
                            at
                            ultrices nisi, sed aliquet tortor. Donec rhoncus rhoncus gravida.
                        </p>
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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet nulla id risus
                            venenatis, sed hendrerit ipsum tincidunt. Curabitur et nunc placerat, cursus turpis et,
                            fermentum ante. Maecenas in egestas metus, ac accumsan ipsum. Pellentesque sit amet
                            tristique odio. Pellentesque nibh turpis, vulputate a ante in, mattis pretium nunc.
                            Praesent
                            volutpat, lorem ut congue tempus, eros justo pretium ex, in auctor purus lacus sed
                            nulla.
                            Nam quis viverra quam.
                        </p>
                        <p>
                            Nullam sed tempus felis. Sed mollis risus et odio imperdiet faucibus. Maecenas
                            vestibulum
                            diam vitae egestas aliquet. Proin commodo et neque vitae efficitur. Praesent et ante eu
                            nibh
                            lacinia faucibus aliquet aliquam nibh. Vivamus a consequat diam. Morbi ornare consequat
                            quam
                            a semper. Phasellus ac libero ut mi dignissim convallis eu ac nulla.
                        </p>
                        <p>
                            Duis dictum facilisis nibh, ac aliquet mi convallis ut. Curabitur faucibus venenatis
                            eros
                            eget dictum. Sed non fermentum ex. Donec pellentesque condimentum est. Phasellus
                            porttitor
                            turpis sed ligula convallis condimentum. Nunc semper ornare enim rutrum gravida. Fusce
                            id
                            nibh accumsan, sollicitudin risus vitae, placerat mauris. Vivamus gravida odio a
                            scelerisque
                            aliquam. Nunc in sodales justo.
                        </p>
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
