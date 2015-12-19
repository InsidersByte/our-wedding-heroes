import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../constants/actionTypes.constants';
import BaseStore from './base.store.js';

class BasketStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));
        this._items = {};
    }

    get items() {
        return this._items;
    }

    get count() {
        let count = 0;

        for (const key in this._items) {
            if (this._items.hasOwnProperty(key)) {
                const item = this._items[key];
                count += item.quantity;
            }
        }

        return count;
    }

    get total() {
        let total = 0;

        for (const key in this._items) {
            if (this._items.hasOwnProperty(key)) {
                const item = this._items[key];
                total += item.price * item.quantity;
            }
        }

        return total;
    }

    _addToBasket(id, item) {
        const existingItem = this._items[id] || { quantity: 0 };
        existingItem.quantity += 1;
        this._items[id] = Object.assign({}, existingItem, item);
    }

    _removeFromBasket(id) {
        delete this._items[id];
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case ADD_TO_BASKET:
                this._addToBasket(action.item._id, action.item);
                break;

            case REMOVE_FROM_BASKET:
                this._removeFromBasket(action.item._id);
                break;

            default:
                return;
        }

        this.emitChange();
    }
}

export default new BasketStore();
