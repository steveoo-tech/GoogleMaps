import faker from "faker";
export class Students {
    private location = {}; 
    private lastName: string = '';
    private firstName: string = '';

    constructor() {
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
    getlocation() {
        return this.location;
    }
    getLastName() {
        return this.lastName;
    }
    getFirstName() {
        return this.firstName;
    }
}