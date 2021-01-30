import faker from "faker";
export class Internship {
    location = {}; 
    internName: string = '';

    constructor() {
        this.internName = faker.name.jobTitle()
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
}