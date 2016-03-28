import React from 'react';
import MarkdownRenderer from 'react-markdown-renderer';

import './MarkdownEditor.styl';

function MarkdownEditor(props) {
    return (
        <div className="markdown-editor">
            <div>
                <h2>Markdown</h2>

                <textarea value={props.content} onChange={props.onChange} />
            </div>

            <div>
                <h2>Preview</h2>

                <MarkdownRenderer className="markdown-editor__preview" markdown={props.content} />
            </div>
        </div>
    );
}

MarkdownEditor.propTypes = {
    content: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
};

export default MarkdownEditor;
