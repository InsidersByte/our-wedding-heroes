import React from 'react';
import marked from 'marked';

class MarkdownRenderer extends React.Component {
    render() {
        const html = marked(this.props.markdown || '', { sanitize: true });

        return (
            <div className={this.props.className} dangerouslySetInnerHTML={{ __html: html }}></div>
        );
    }
}

MarkdownRenderer.propTypes = {
    markdown: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
};

export default MarkdownRenderer;
