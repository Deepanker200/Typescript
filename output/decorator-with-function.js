var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function updatedSum(target, key, descriptor) {
    descriptor.value = function sum(x, y) {
        let output = x + y;
        return `The output of ${x} and ${y} is ${output}`;
    };
}
class CustomMaths1 {
    sum(x, y) {
        return x + y;
    }
}
__decorate([
    updatedSum
], CustomMaths1.prototype, "sum", null);
var cm2 = new CustomMaths1();
console.log(cm2.sum(10, 20));
export {};
//# sourceMappingURL=decorator-with-function.js.map