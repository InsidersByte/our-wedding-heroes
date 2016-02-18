import React from 'react';

import './LandingHeader.styl';

class LandingHeader extends React.Component {
    render() {
        const backgroundImageStyle = { backgroundImage: `url(${this.props.cover.imageUrl})` };
        let daysTillIDoCountdown = null;

        if (this.props.cover.weddingDate) {
            daysTillIDoCountdown = (
                <h2>
                    {this.props.cover.daysToGo} Days until I Do
                </h2>
            );
        }

        return (
            <header className="landing-header" style={backgroundImageStyle}>
                <div className="landing-header__overlay"></div>
                <div className="landing-header__content">
                    <h1 className="landing-header__title">{this.props.cover.title}</h1>

                    {daysTillIDoCountdown}

                    <div style={{ flex: '1 1 10%', maxHeight: '10%' }}></div>
                </div>
            </header>
        );
    }
}

LandingHeader.propTypes = {
    cover: React.PropTypes.object.isRequired,
};

LandingHeader.defaultProps = {
    cover: {},
};

export default LandingHeader;
