"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sym = Symbol();
var sym2 = Symbol();
var sym3 = Symbol();
console.log(sym == sym2);
const dId = Symbol('id');
const obj = {
    [dId]: 100,
    name: "Deepanker Tiwari"
};
console.log(obj[dId]);
//# sourceMappingURL=symbol.js.map