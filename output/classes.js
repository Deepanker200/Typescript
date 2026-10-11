class Product {
    name;
    price;
    pId;
    inCart = false; //type inference
    isOrdered = false; //explicit type annotation
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    //This function syntax can only be used inside Class 
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered in ${this.price}`;
        }
        else {
            return `no product in cart`;
        }
    }
}
class Order extends Product {
    constructor() {
        super('Laptop', 50000, 401);
    }
    getPrice() {
        return this.price;
    }
}
class Order1 extends Product {
    constructor(name, price, pId) {
        super(name, price, pId);
    }
    getPrice() {
        return this.price;
    }
}
var product = new Product("Samsung", 100000, 101);
product.addToCart();
console.log(product.buyProduct());
// console.log(product.price);
// Access Modifiers
var order = new Order();
console.log(order.getPrice());
export {};
//# sourceMappingURL=classes.js.map