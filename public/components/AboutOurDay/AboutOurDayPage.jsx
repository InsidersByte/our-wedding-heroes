import React from 'react';
import AboutOurDayStore from '../../stores/AboutOurDayStore';
import AboutOurDayActions from '../../actions/AboutOurDayActions';
import MarkdownEditorPage from '../common/MarkdownEditorPage';

function AboutOurDayPage() {
    return (
        <MarkdownEditorPage propKey="aboutOurDay" title="About Our Day" store={AboutOurDayStore} actions={AboutOurDayActions} />
    );
}

export default AboutOurDayPage;
