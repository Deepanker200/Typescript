interface CollegeDataType {
    name: string    //Defines the requirement(Definition)
    displayTeachersName(): void
    getStudentList():string[]
}


class CollegeData implements CollegeDataType {
    name: string    //Declares the class property(Declaration)

    constructor(cName: string) {
        this.name = cName
    }

    displayTeachersName(): void {
        console.log("Rajesh","Vansh");
    }

    getStudentList(): string[] {
        return ['Sam','Conor','Periera']
    }

}

var college1 = new CollegeData('IPU Delhi')
console.log(college1.name);
console.log(college1.getStudentList());
