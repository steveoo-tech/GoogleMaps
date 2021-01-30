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