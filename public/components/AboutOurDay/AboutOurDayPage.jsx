import React from 'react';
import AboutOurDayStore from '../../stores/AboutOurDayStore';
import AboutOurDayActions from '../../actions/AboutOurDayActions';
import MarkdownEditorPage from '../common/MarkdownEditorPage';
import { ABOUT_OUR_DAY as key } from '../../constants/keys.constants';

function AboutOurDayPage() {
    return (
        <MarkdownEditorPage propKey={key} title="About Our Day" store={AboutOurDayStore} actions={AboutOurDayActions} />
    );
}

export default AboutOurDayPage;
