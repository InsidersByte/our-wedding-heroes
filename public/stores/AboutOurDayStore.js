import alt from '../helpers/alt';
import AboutOurDayActions from '../actions/AboutOurDayActions';
import BaseStore from './BaseStore';

const key = 'aboutOurDay';

class AboutOurDayStore extends BaseStore {
    constructor() {
        super({ actions: AboutOurDayActions, key });
    }
}

export default alt.createStore(AboutOurDayStore, 'AboutOurDayStore');
