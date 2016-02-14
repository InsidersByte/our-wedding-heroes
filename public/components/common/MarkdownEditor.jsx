import React from 'react';
import markdown from 'markdown';

import './MarkdownEditor.styl';

class MarkdownEditorWrapper extends React.Component {
    render() {
        const html = markdown.parse(this.props.content);

        return (
            <div className="markdown-editor-container">
                <div className="markdown-editor">
                    <h2>Markdown</h2>

                    <textarea value={this.props.content} onChange={this.props.onChange} />
                </div>

                <div className="markdown-preview">
                    <h2>Preview</h2>

                    <div dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
        );
    }
}

MarkdownEditorWrapper.propTypes = {
    content: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

export default MarkdownEditorWrapper;
