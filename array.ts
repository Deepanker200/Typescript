//1st way
var users:string[]=['deep','shubh','bhavik']
var marks:number[]=[100,30,90]

//2nd way
var fighters:Array<string>=['Conor','Ilia','Khabib']
fighters.push('Islam')
console.log(fighters);

marks.push(80)
console.log(marks);


//*IMP: Cannot modify array
var cities1:readonly string[]=['Delhi','Mumbai',"Uttrakhand"]
// cities1.push('England')
//Alternate Syntax
var cities2:ReadonlyArray<string>=['Jaipur','Panaji',"Assam"]

console.log(cities1);
console.log(cities2);
