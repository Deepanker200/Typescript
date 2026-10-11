class CollegeData {
    name; //Declares the class property(Declaration)
    constructor(cName) {
        this.name = cName;
    }
    displayTeachersName() {
        console.log("Rajesh", "Vansh");
    }
    getStudentList() {
        return ['Sam', 'Conor', 'Periera'];
    }
}
var college1 = new CollegeData('IPU Delhi');
console.log(college1.name);
console.log(college1.getStudentList());
export {};
//# sourceMappingURL=collegeData.js.map