"use strict";
class Shop {
    items;
    constructor(items = []) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
class BaseProduct {
    name;
    price;
    discount;
    constructor(params) {
        this.name = params.name;
        this.price = params.price;
        this.discount = params.discount;
    }
}
class Banan extends BaseProduct {
    size;
    constructor(price, discount, size) {
        super({ name: 'Banan', price, discount });
        this.size = size;
    }
}
class IceCream extends BaseProduct {
    withGlace;
    constructor(price, discount, withGlace) {
        super({ name: 'IceCream', price, discount });
        this.withGlace = withGlace;
    }
}
const shop = new Shop([new BaseProduct({ name: '123', discount: 11, price: 11 })]);
const iceCream = new IceCream(10, 0, true);
const banan = new Banan(5, 0.1, 'small');
shop.addItem(banan);
