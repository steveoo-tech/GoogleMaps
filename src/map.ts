

const myLatlng = { lat: 49.1913, lng: -122.8490 };

export class Map {
  
  private markerArray: any = []; 
  private marker = google.maps.Marker.prototype;
  private _googleMap: google.maps.Map;
  constructor() {
    this._googleMap = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: myLatlng,
      zoom: 10,
    });
  }
  
  addMarker(position: {lat: number, lng: number}) {
    this.marker = new google.maps.Marker({
      map: this._googleMap,
      position: {
        lat: position.lat,
        lng: position.lng
      },
    });
    this.marker.setMap(this._googleMap)
    this.markerArray.push(this.marker)
  }

  getMap() {
    return this._googleMap;
  }
  getMarker() {
    return this.marker;
  }
  getMarkerArray() {
    return this.markerArray;
  }



  
// LISTEN FOR CLICK EVENT AND PLACE MARKER
  // listen() {
  //   this._googleMap.addListener("click", (mapsMouseEvent) => {
  //     console.log("listening");
  //     let json = JSON.parse(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2))
  //     let lng = json.lng;
  //     let lat = json.lat;
  //     this.addMarker( { lat, lng } )
  //   });
  // }
}  



