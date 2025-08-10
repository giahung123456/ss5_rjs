class Employee {
    name;
    company;
    _phone;
    constructor(name, company, _phone) {
        this.name = name;
        this.company = company;
        this._phone = _phone;
    }
    // get phone(){
    //     return this._phone
    // }
    printInfo() {
        console.log(`${this.name} ${this.company} ${this._phone}`);
    }
}
let employee = new Employee(`duong`, `riki`, `0123456789`);
employee.printInfo();
export {};
//# sourceMappingURL=ss5_03.js.map