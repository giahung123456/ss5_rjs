class Vehicle {
    readonly id:number
    name:string
    protected year:number
    private _company :string
    constructor(id:number,name:string,year:number,_company:string){
        this.id=id
        this.name=name
        this.year=year
        this._company=_company

    }
    get company(){
        return this._company
    }
    display(){
        console.log(`${this.id},${this.name},${this.year},${this._company}`);
        
    }
}
let vehicle=new Vehicle(1,`nam`,2000,`riki`)
vehicle.display()