var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function classLogger(constructor) {
    console.log(constructor.name);
}
function getKeyDetails(target, key) {
    console.log(key);
}
let CustomMaths123 = class CustomMaths123 {
    value1;
    value2;
    constructor(x, y) {
        this.value1 = x;
        this.value2 = y;
    }
};
__decorate([
    getKeyDetails
], CustomMaths123.prototype, "value1", void 0);
CustomMaths123 = __decorate([
    classLogger
], CustomMaths123);
export {};
// var cm1=new CustomMaths123(10,20)
//# sourceMappingURL=decorators.js.map