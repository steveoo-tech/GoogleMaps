
import { Students } from "./student";
import { Internship } from "./internship";
import { Map } from "./map";
import { InfoWindow } from "./infowindow";

console.log("Server is running")

export const map = new Map()
export const student = new Students() 
export const internship = new Internship()
export const infoWindow = new InfoWindow();
const parcer = (json: {}) => {
    return JSON.parse(JSON.stringify(json))
}
let studentLocation = parcer(student.getLocation());
map.addStudent(studentLocation.lat, studentLocation.lng, student.getStudentName());
let internLocation = parcer(internship.getLocation())
map.addIntern(internLocation.lat, internLocation.lng, internship.getInternName());
    
    
    

console.log("We made it to here");
=======
console.log("Artinnnn");

import {student} from './student';
import {internship} from './intership';


let HTMLElem:Element = document.getElementById("mapDiv")?;
let john = new student();





let company = new internship();



