import React from 'react';
import {GoogleMap} from 'react-google-maps';
import {Col, Panel} from 'react-bootstrap';
import './landing.styl';

class Landing extends React.Component {
    render() {
        return (
            <div className="landing">
                <header className="landing__header">
                    <div className="landing__header__content">
                        <h1 className="landing__header__content__header">Our Wedding</h1>
                    </div>
                </header>
                <section className="landing__section">
                    <h1 className="landing__section__heading">A little bit about us</h1>

                    <Col md={6} mdOffset={3}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus arcu, sit
                            amet
                            maximus quam rhoncus et. Aliquam tristique tortor leo, ut sollicitudin justo scelerisque
                            vel. Sed sed pretium neque. Curabitur id dui ac orci faucibus rhoncus. Nullam sodales mi
                            vel
                            euismod lacinia. Proin ac efficitur quam, eu faucibus nibh. In et arcu a purus semper
                            sollicitudin ac a sapien. Sed at sem nunc. Nunc neque ante, pellentesque ut egestas et,
                            facilisis vehicula eros. Suspendisse potenti. Vivamus vel ornare ante. Class aptent
                            taciti
                            sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Pellentesque nec mauris id ante venenatis
                            vulputate.
                            Sed vestibulum ut ante ut imperdiet. Morbi eget mi consequat, pretium urna id, efficitur
                            libero.
                            Nullam odio dui, faucibus nec fringilla at, pellentesque nec magna.
                        </p>
                        <p>
                            Fusce interdum tincidunt ipsum in ornare. Vestibulum finibus turpis ante, sit amet
                            ornare
                            est
                            auctor placerat. Ut vitae blandit quam, eleifend rhoncus metus. Proin hendrerit nunc id
                            dolor
                            interdum rutrum. Phasellus faucibus, erat id dapibus facilisis, arcu nisl hendrerit
                            odio, et
                            malesuada velit felis ac velit. Nulla eleifend bibendum dolor eu commodo. Aliquam
                            ullamcorper
                            volutpat enim, eu eleifend quam rutrum sed. Fusce bibendum finibus mauris a vehicula. In
                            luctus
                            ex nec ex dapibus tincidunt. Aliquam sed dolor augue. Donec facilisis eros sed purus
                            lobortis
                            bibendum. Nulla ligula est, cursus eu posuere vitae, finibus quis magna. Nullam pulvinar
                            ultrices felis nec efficitur. Donec lorem erat, fermentum id sollicitudin a, auctor sit
                            amet
                            quam. Curabitur elementum, dui in placerat tincidunt, lorem nisi finibus erat, ut
                            euismod
                            diam
                            ipsum sed lectus. Nullam eget ullamcorper est.
                        </p>
                        <p>
                            Phasellus condimentum lacus arcu, at sodales neque semper in. Sed ut enim sed purus
                            mollis
                            auctor sit amet blandit quam. In rutrum venenatis aliquam. Sed sed ipsum velit. Aenean
                            eget
                            libero lacus. Mauris egestas facilisis magna eget interdum. Etiam urna nulla, viverra
                            commodo
                            lorem in, molestie posuere urna. Praesent ante purus, accumsan quis porta id, rhoncus
                            vitae
                            urna. Phasellus condimentum ante sed malesuada mattis. Pellentesque habitant morbi
                            tristique
                            senectus et netus et malesuada fames ac turpis egestas. Suspendisse tincidunt velit at
                            vestibulum mollis. In pellentesque metus ac lorem condimentum auctor. Quisque mollis,
                            lorem
                            eget
                            hendrerit tristique, metus nunc rutrum magna, a auctor ante metus in nulla.
                        </p>
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
