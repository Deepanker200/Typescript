let PersonData = {
    name: "Deepanker",
    age: 23,
    isEmp: true
};
// let PersonDataX:PersonX
let PersonDataX;
// PersonDataX="Deep"   //wrong way only keys can be access
PersonDataX = "name";
PersonDataX = "age";
//How to use object keys with typeof~ Using keyof to get object keys
const user = {
    name: "Deepanker",
    age: 25,
    isActive: true
};
export {};
// type UserKeys = "name" | "age" | "isActive"  //It only takes these 3 key as values
//# sourceMappingURL=keyof.js.map