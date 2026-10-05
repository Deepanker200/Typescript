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

// userData.name="Tiwari"
// userData.age=25
// console.log(userData);



//Any data-type object
// var userData:{
//     name:string,
//     age:number,
//     company:string | undefined
// }={
//     name:"Deepanker",
//     age:23,
//     company:undefined
// }


// userData.company="MetLife"
// console.log(userData);



//*IMP: Any key-value data-type object
// var userData:{
//     [key:string]:string | number | undefined
// }={
//     name:"Deep",
//     age:30
// }

// userData.company='MetLife Noida'
// console.log(userData);



//Nested Object
// var userData:{
//     name:string,
//     age:number,
//     company:string,
//     // address:{}
//     address:{
//         houseNo:string,
//         sector:string,
//         city:string
//     }
// }={
//     name:"Deepanker",
//     age:23,
//     company:"GeMTech",
//     address:{
//         houseNo:"A-56/B-2",
//         sector:"Rohini-22",
//         city:"Delhi"
//     }
// }

// userData.address.city="Noida"
// console.log(userData);



//For interview purpose as it is short code using recursive approach of creating nested objects
type UserData = {
    [key: string]: string | number | undefined | UserData;
}

var userData: UserData = {
    name: "Deep",
    age: 30
};

userData.address = {
    state: "Haryana"
};

userData.address.state = "Delhi";

console.log(userData);
