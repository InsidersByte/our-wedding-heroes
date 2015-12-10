import {ADD_TO_BASKET} from '../constants/basket.constants';
import BaseStore from './base.store.js';

class BasketStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._items = [];
    }

    get items() {
        return this._items;
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case ADD_TO_BASKET:
                this._items.push({
                    item: action.item,
                    quantity: action.quantity,
                });
                this.emitChange();
                break;

            default:
                break;
        }
    }
}

export default new BasketStore();
