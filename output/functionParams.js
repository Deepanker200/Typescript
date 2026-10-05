"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalPrice(item, price, text) {
    if (text) {
        console.log(text, price * item);
    }
    else {
        console.log(price * item);
    }
}
totalPrice(5, 60, "Total price is:");
totalPrice(5, 60);
function simple(data) {
    console.log(data);
}
simple("Deep");
//# sourceMappingURL=functionParams.js.map