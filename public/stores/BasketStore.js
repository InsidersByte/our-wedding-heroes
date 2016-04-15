import alt from '../helpers/alt';
import basketActions from '../actions/BasketActions';

class BasketStore {
    constructor() {
        this.bindActions(basketActions);

        this.items = {};
        this.basketCount = 0;
        this.total = 0;
    }

    setCountAndTotal() {
        let basketCount = 0;
        let total = 0;

        for (const key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                const item = this.items[key];
                basketCount += item.quantity;
                total += item.price * item.quantity;
            }
        }

        this.setState({
            basketCount,
            total,
        });
    }

    addToBasket(item) {
        const existingItem = this.items[item._id] || { quantity: 0 };
        existingItem.quantity += 1;
        const updatedItem = Object.assign({}, existingItem, item);

        if (updatedItem.quantity > updatedItem.remaining) {
            updatedItem.quantity = updatedItem.remaining;
        }

        this.items[item._id] = updatedItem;
        this.setCountAndTotal();
    }

    removeFromBasket({ _id }) {
        if (this.items[_id].quantity <= 1) {
            return;
        }

        this.items[_id].quantity -= 1;
        this.setCountAndTotal();
    }

    deleteFromBasket({ _id }) {
        delete this.items[_id];
        this.setCountAndTotal();
    }

    emptyBasket() {
        this.items = {};
        this.setCountAndTotal();
    }
}

export default alt.createStore(BasketStore, 'BasketStore');
