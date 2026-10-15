type PersonT={
    name:string
    age:number
    isEmp:boolean
}

let PersonData:PersonT={
    name:"Deepanker",
    age:23,
    isEmp:true
}

type PersonX=keyof PersonT;
// let PersonDataX:PersonX
let PersonDataX:keyof PersonT
// PersonDataX="Deep"   //wrong way only keys can be access
PersonDataX="name"
PersonDataX="age"

//How to use object keys with typeof~ Using keyof to get object keys

const user = {
    name: "Deepanker",
    age: 25,
    isActive: true
}

type UserKeys = keyof typeof user
// type UserKeys = "name" | "age" | "isActive"  //It only takes these 3 key as values