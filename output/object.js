"use strict";
//Simple Object
// var userData:{
//     name:string,
//     age:number,
//     city:string
// }={
//     name:"Deepanker",
//     age:23,
//     city:"Delhi"
// }
Object.defineProperty(exports, "__esModule", { value: true });
var userData = {
    name: "Deep",
    age: 30
};
userData.address = {
    state: "Haryana"
};
userData.address.state = "Delhi";
console.log(userData);
//# sourceMappingURL=object.js.map