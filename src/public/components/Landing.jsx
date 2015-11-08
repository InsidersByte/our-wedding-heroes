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
            </div>
        );
    }
}

export default Landing;
