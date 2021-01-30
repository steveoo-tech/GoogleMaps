import { map } from "./index"
import { student } from "./index"



export class InfoWindow {

  private infoWindow = google.maps.InfoWindow.prototype;

  listen() {

    let m = map.getMarkerArray()
    m.forEach((m: any) => {
      m.addListener("click", (mapsMouseEvent: any) => {
        this.infoWindow = new google.maps.InfoWindow({
          position: mapsMouseEvent.latLng,
        })
        console.log("listening in info window")
        let studentName = (student.getFirstName() + ' ' + student.getLastName())
        this.infoWindow.setContent(studentName);
        this.infoWindow.open(map.getMap())
      })
    });
  }
}