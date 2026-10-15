type UserData7Type = {
    name:string
    id:number
    marks:number
    readonly [key: string]: number | string | boolean
}

var userData7:UserData7Type = {
    name:"Deep",
    mobile: 9999,
    id: 10,
    marks: 90,
    age: 30,
    semester:6
}


// userData7.city="Noida"   //Unable to add key as it is readonly now
console.log(userData7);
