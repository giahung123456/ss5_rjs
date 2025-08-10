class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    greet() {
        console.log(`${this.name} ${this.year} ${this.company}`);
    }
}
let vehicle1 = new Vehicle(`o to`, 2004, `lexus`);
vehicle1.greet();
let vehicle2 = new Vehicle(`xe may`, 1960, `honda`);
vehicle2.greet();

//# sourceMappingURL=ss5_01.js.map