//Using Partial
let CollegeData3 = {
    name: "IIT Delhi",
    location: "Delhi"
};
// console.log(CollegeData3);
function getCollegeData(data) {
    return data;
}
var abc = getCollegeData({ name: "DTU", location: "Delhi" });
// console.log(abc);
//Using Required: It means optional(?) key also requires value
function getCollegeData2(data) {
    return data;
}
var collegeData2 = getCollegeData2({ name: "DTU", location: "Delhi", students: 30, branch: "CSE" });
// console.log(collegeData2);
function getCollegeData4(data) {
    return data;
}
//Using Readonly: Means we can't change the value of a particular key
var CollegeData4 = {
    name: "DTU",
    location: "Delhi",
    students: 30,
    branch: "CSE"
};
//Using Pick: Means only pick particular keys
var CollegeData5 = {
    name: "IIT BHU",
    location: "Banaras",
};
//Using Omit
var CollegeData7 = {
    name: "IIT Madras",
    location: "Chennai",
    branch: "ECE",
};
console.log(CollegeData7);
var APICall = 'success'; //Definition and Declaration
APICall = 'loading';
// APICall='pending'
//Difference
// - Exclude removes types from a union.
// - Omit removes properties (keys) from an object type.
//Using Extract
var APICall2;
APICall2 = 'error'; //it works
var randomData = 20;
var siteRoleOption = 'Admin';
var RoleName = {
    Admin: "Deepanker",
    user: "Tiwari",
    guest: "Peter"
};
export {};
//# sourceMappingURL=utility-types.js.map