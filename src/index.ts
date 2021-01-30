import { Students } from "./student";
import { Internship } from "./internship";
import { isJSDocNamepathType } from "typescript";
import { Map } from "./map";
import { InfoWindow } from "./infowindow";

console.log("Server is running")



export const map = new Map()
export const student = new Students() 
export const internship = new Internship()
export const infoWindow = new InfoWindow();




map.addMarker({lat: 49.07, lng: -122.5});
map.addMarker({lat: 49.13, lng: -123.1})
infoWindow.listen();

console.log("We made it to here");
