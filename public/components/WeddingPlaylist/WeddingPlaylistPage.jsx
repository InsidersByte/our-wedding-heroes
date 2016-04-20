import React from 'react';
import WeddingPlaylistStore from '../../stores/WeddingPlaylistStore';
import WeddingPlaylistActions from '../../actions/WeddingPlaylistActions';
import MarkdownEditorPage from '../common/MarkdownEditorPage';
import { WEDDING_PLAYLIST as key } from '../../constants/keys.constants';

function AboutOurDayPage() {
    return (
        <MarkdownEditorPage propKey={key} title="Wedding Playlist" store={WeddingPlaylistStore} actions={WeddingPlaylistActions} />
    );
}

export default AboutOurDayPage;
