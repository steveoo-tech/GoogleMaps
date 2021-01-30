import faker from 'faker';


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