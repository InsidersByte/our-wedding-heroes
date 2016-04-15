import React from 'react';
import OnTheDayStore from '../../stores/OnTheDayStore';
import OnTheDayActions from '../../actions/OnTheDayActions';
import MarkdownEditorPage from '../common/MarkdownEditorPage';
import { ON_THE_DAY as key } from '../../constants/keys.constants';

function AboutOurDayPage() {
    return (
        <MarkdownEditorPage propKey={key} title="On The Day" store={OnTheDayStore} actions={OnTheDayActions} />
    );
}

export default AboutOurDayPage;
