import React from 'react';
import AboutOurHoneymoonStore from '../../stores/AboutOurHoneymoonStore';
import AboutOurHoneymoonActions from '../../actions/AboutOurHoneymoonActions';
import MarkdownEditorPage from '../common/MarkdownEditorPage';
import { ABOUT_OUR_HONEYMOON as key } from '../../constants/keys.constants';

function AboutOurDayPage() {
    return (
        <MarkdownEditorPage propKey={key} title="About Our Honeymoon" store={AboutOurHoneymoonStore} actions={AboutOurHoneymoonActions} />
    );
}

export default AboutOurDayPage;
