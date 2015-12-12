import {ADD_TO_BASKET} from '../constants/actionTypes.constants';
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
                const existingItem = this._items.find(item => item._id === action.item._id);

                if (existingItem === undefined) {
                    this._items.push(Object.assign({}, action.item, {quantity: action.quantity}));
                }

                this.emitChange();
                break;

            default:
                break;
        }
    }
}

export default new BasketStore();
