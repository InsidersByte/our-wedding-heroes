import React from 'react';

import './LandingSection.styl';

class LandingSection extends React.Component {
    render() {
        return (
            <section className="landing__section">
                <h1 className="landing__section__heading">{this.props.title}</h1>

                <div className="landing__section__content">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

LandingSection.propTypes = {
    children: React.PropTypes.element.isRequired,
    title: React.PropTypes.string.isRequired,
};

export default LandingSection;
