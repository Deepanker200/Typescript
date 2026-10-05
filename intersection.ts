// type personTA={name:string}
// type personTB={age:number}
// type personTC=personTA &personTB

interface personTA{name:string}
interface personTB{age:number}
type personTC=personTA &personTB
// or
// interface personTC extends personTA, personTB {
// }

var PersonDataA:personTA={name:"Deepanker Tiawri"}
var PersonDataB:personTB={age:23}


var PersonDataC:personTC=
{name:"Shubham",age:16}

console.log(PersonDataC);
