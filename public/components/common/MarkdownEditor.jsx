import React from 'react';
import MarkdownRenderer from './MarkdownRenderer.jsx';

import './MarkdownEditor.styl';

class MarkdownEditorWrapper extends React.Component {
    render() {
        return (
            <div className="markdown-editor">
                <div>
                    <h2>Markdown</h2>

                    <textarea value={this.props.content} onChange={this.props.onChange} />
                </div>

                <div>
                    <h2>Preview</h2>

                    <MarkdownRenderer className="markdown-editor__preview" markdown={this.props.content} />
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
