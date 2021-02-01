
import faker from "faker";

export class Students {
    private location = {}; 
    private lastName: string = '';
    private firstName: string = '';

    constructor() {
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    getLocation() {
        return this.location;
    }
    getStudentName() {
        return this.firstName + this.lastName;
    }
    
    
}



class student{

    private _first_name: string = "";
    private _last_name: string = "";
    private _location: {
        lat:number,
        lng:number,
    };
    constructor(){
        this._first_name = faker.name.firstName();
        this._last_name= faker.name.lastName();
        this._location ={
            lat = parseFloat(faker.address.latitude()),
            lng = parseFloat(faker.address.longitude())
        }
    }

    showFullName(_first_name:string,_last_name:string){
        return `${_first_name} ${_last_name}`;
    }
    
};

