class Company {
    static name: string = "Google"
    location = "Noida"

    getName() {
        // return this.name //it will not work without static getName()
        return "MetLife"
    }

}

Math.random()   //Math is an object in TS or JS
Company.name


var c1 = new Company()
// console.log(c1.name)

console.log(Company.name);
