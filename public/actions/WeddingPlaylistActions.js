import alt from '../helpers/alt';
import BaseActions from './BaseActions';
import api from '../api/weddingPlaylist.api';
import { WEDDING_PLAYLIST as key } from '../constants/keys.constants';

class WeddingPlaylistActions extends BaseActions {
    constructor() {
        super({ api, key });
    }
}

export default alt.createActions(WeddingPlaylistActions);
