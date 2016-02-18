import React from 'react';

import './LandingSection.styl';

class LandingSection extends React.Component {
    render() {
        return (
            <section className="landing-section">
                <h1 className="landing-section__title">{this.props.title}</h1>

                <div className="landing-section__content">
                    {this.props.children}
                </div>

                {this.props.postContent}
            </section>
        );
    }
}

LandingSection.propTypes = {
    children: React.PropTypes.element.isRequired,
    postContent: React.PropTypes.element,
    title: React.PropTypes.string.isRequired,
};

export default LandingSection;
