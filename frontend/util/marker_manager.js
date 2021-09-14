/* attribute: Google map Doc && BenchBnB project*/
import { openModal, closeModal } from '../actions/modal_actions'

class MarkerManager {
  constructor(map, handleMarkerClick) {
    this.map = map;
    this.handleMarkerClick = handleMarkerClick;
    this.markers = {}
  }

  updateMarkers(properties) {
    const propertiesObj = {};
    properties.forEach(property => propertiesObj[property.id] = property);

    properties
      .filter(property => !this.markers[property.id])
      .forEach(property => this.createMarker(property, this.handleMarkerClick))

    Object.keys(this.markers)
      .filter(propertyId => !propertiesObj[propertyId])
      .forEach((propertyId) => this.removeMarker(this.markers[propertyId]))
  }


  createMarker(property) {

    // const icon = '../../app/assets/images/pin.png'
    const position = new google.maps.LatLng(property.lat, property.lng);

    const contentStr =
      `<div style="display: flex; justify-content: space-between;">
        <div>
          <img src="${property.photoUrls}" style= 'width: 70px; height:70px; padding-right:15px;'></img>
        </div>
        <div className = "infoWindow-right">
          <h3> $ ${property.price}</h3>
          <h2> ${property.beds} bd ${property.baths} ba  ${property.sqft} sqft</h2>
        </div>
      </div>`

    const propertyInfoWindow = new google.maps.InfoWindow({
      content: contentStr,
    });

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      infoWindow: propertyInfoWindow,
      propertyId: property.id,
    })

    marker.addListener('mouseover', () => marker.infoWindow.open(this.map, marker));
    marker.addListener('mouseout', () => marker.infoWindow.close(this.map, marker));
    marker.addListener('click', () => this.handleMarkerClick(property))
    this.markers[marker.propertyId] = marker;

  }
  handleMarkerClick(property) {
    this.handleMarkerClick(property)
  }

  removeMarker(marker) {
    this.markers[marker.propertyId].setMap(null);
    delete this.markers[marker.propertyId];
  }
}

export default MarkerManager;