class Employee {
    name:string
    protected company:string
    private _phone:string
    constructor(name:string,company:string,_phone:string){
        this.name=name
        this.company=company
        this._phone=_phone
    }
    // get phone(){
    //     return this._phone
    // }
    printInfo(){
        console.log(`${this.name} ${this.company} ${this._phone}`);
        
    }

}
let employee=new Employee(`duong`,`riki`,`0123456789`)
employee.printInfo()

