class MarkerManager {
  constructor(map, history) {
    this.map = map;
    this.history = history;
    this.markers = {};
    debugger
  }

  updateMarkers(houses) {
    const housesOjb = {};

    //generating key/val pairs for houses
    houses.forEach((house) => (housesOjb[house.id] = house));

    // create a new marker for newHouse and add marker
    houses
      .filter((house) => !this.markers[house.id])
      .forEach((newHouse) => this.createMarkerFromHouse(newHouse));

    //remove marker if a house is not in state
    Object.keys(this.markers)
      .filter((houseId) => !housesOjb[houseId])
      .forEach((houseId) => this.removeMarker(this.markers[houseId]));
  }

  createMarkerFromHouse(newHouse) {
    const position = new google.maps.LatLng(newHouse.lat, newHouse.lng);

    const contentStr = `<div style="display: flex; justify-content: space-between;">
        <div>
          <img src="${newHouse.photoUrls}" style= 'width: 70px; height:70px; padding-right:15px;'></img>
        </div>
        <div className = "infoWindow-right">
          <h3> $ ${newHouse.price}</h3>
          <h2> ${newHouse.beds} bd ${newHouse.baths} ba  ${newHouse.sqft} sqft</h2>
        </div>
      </div>`;

    const houseInfoWindow = new google.maps.InfoWindow({
      content: contentStr,
      disableAutoPan: true,
    });

    const onClick = () => {
      this.history.push(`zips/${newHouse.id}`);
    };

    const mouseOver = () => {
      marker.infoWindow.open(this.map, marker);
      marker.setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");
    };
    const mouseOut = () => {
      marker.infoWindow.close(this.map, marker);
      marker.setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
    };

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      infoWindow: houseInfoWindow,
      houseId: newHouse.id,
      icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    });
    marker.addListener("mouseover", mouseOver);
    marker.addListener("mouseout", mouseOut);
    marker.addListener("click", onClick);
    this.markers[marker.houseId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.houseId].setMap(null);
    delete this.markers[marker.houseId];
  }
}

export default MarkerManager;
