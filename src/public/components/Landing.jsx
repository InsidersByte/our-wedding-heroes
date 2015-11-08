import React from 'react';
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
                </section>
                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">About our day</h1>
                </section>
                <section className="landing__section">
                    <h1 className="landing__section__heading">Where is it</h1>
                </section>
                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">Requests for the day</h1>
                </section>
                <section className="landing__section">
                    <h1 className="landing__section__heading">About our honeymoon</h1>
                </section>
                <section className="landing__section landing__section--primary">
                    <h1 className="landing__section__heading">Honeymoon Gift List</h1>
                </section>
            </div>
        );
    }
}

export default Landing;
