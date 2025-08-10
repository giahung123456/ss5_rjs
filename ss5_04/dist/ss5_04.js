class Vehicle {
    id;
    name;
    year;
    _company;
    constructor(id, name, year, _company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this._company = _company;
    }
    get company() {
        return this._company;
    }
    display() {
        console.log(`${this.id},${this.name},${this.year},${this._company}`);
    }
}
let vehicle = new Vehicle(1, `nam`, 2000, `riki`);
vehicle.display();
export {};
//# sourceMappingURL=ss5_04.js.map