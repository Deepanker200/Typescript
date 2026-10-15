interface CollegeType {
    name: string,
    location: string,
    students: number,
    branch?: string
}

//Using Partial
let CollegeData3: Partial<CollegeType> = {
    name: "IIT Delhi",
    location: "Delhi"
}

// console.log(CollegeData3);

function getCollegeData(data: Partial<CollegeType>): object {
    return data
}

var abc = getCollegeData({ name: "DTU", location: "Delhi" })
// console.log(abc);


//Using Required: It means optional(?) key also requires value
function getCollegeData2(data: Required<CollegeType>) {
    return data
}

var collegeData2 = getCollegeData2({ name: "DTU", location: "Delhi", students: 30, branch: "CSE" })
// console.log(collegeData2);


function getCollegeData4(data: Required<CollegeType>) {
    return data
}

//Using Readonly: Means we can't change the value of a particular key
var CollegeData4: Readonly<CollegeType> = {
    name: "DTU",
    location: "Delhi",
    students: 30,
    branch: "CSE"
}


//Using Pick: Means only pick particular keys
var CollegeData5: Pick<CollegeType, "name" | "location"> = {
    name: "IIT BHU",
    location: "Banaras",
}

//Using Omit
var CollegeData7: Omit<CollegeType, 'students'> = {
    name: "IIT Madras",
    location: "Chennai",
    branch: "ECE",
}

console.log(CollegeData7);


//Using Exclude
type APIStatus = "loading" | "error" | "pending" | "success"

var APICall: Exclude<APIStatus, 'pending'> = 'success'  //Definition and Declaration
APICall = 'loading'
// APICall='pending'


//Difference
// - Exclude removes types from a union.
// - Omit removes properties (keys) from an object type.


//Using Extract
var APICall2: Extract<APIStatus, 'error' | 'success'>
APICall2 = 'error'    //it works


//NonNullable: It removes null and undefined data type from RandomType
type RandomType = string | number | undefined | null | string[]
var randomData:NonNullable<RandomType>=20


//Using Record: Datatypes become object keys
type SiteRole='Admin' | 'user' | 'guest'

var siteRoleOption:SiteRole='Admin'
var RoleName:Record<SiteRole,string>={
    Admin:"Deepanker",
    user:"Tiwari",
    guest:"Peter"
}