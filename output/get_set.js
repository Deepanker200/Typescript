class EmpInfo {
    _name = "Deepanker";
    _email = "deep@test.com";
    get nameFn() {
        return "MR. " + this._name;
    }
    set email(val) {
        this._email = "emp_" + val;
    }
}
var emp1 = new EmpInfo();
console.log(emp1.nameFn);
// emp1.email="peter@gmail.com"
emp1._name = "Peter";
console.log("New Name: ", emp1._name);
console.log(emp1._email);
export {};
//# sourceMappingURL=get_set.js.map