
import {student} from './student';
import {internship} from './intership';

export class GoogleMap{

    private _googleMap: google.maps.Map;

    constructor(DivId){
        this._googleMap = new google.maps.Map(document.getElementById(DivId),{
            zoom: 1,
            center:{
                lat: 0,
                lng: 0
            }
        });
    }


    addStudentMarker(student: student){

        new google.maps.Marker({
            map:this._googleMap,
            position:{
                lat: student._location.lat,
                lng: student._location.lng
            }
        });
    }

    addInternshipMarker(internship: internship){
        new google.maps.Marker({
            map:this._googleMap,
            position:{
                lat: internship._location.lat,
                lng: internship._location.lng
            }
        });
    }

}