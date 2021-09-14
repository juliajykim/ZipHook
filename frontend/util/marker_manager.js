class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(houses) {
    const housesOjb = {};

    //generating key/val pairs for houses
    houses.forEach((house) => (housesOjb[house.id] = house));

    // create a new marker for newHouse and add marker
    houses
      .filter((house) => !this.markers[house.id])
      .forEach((newHouse) => this.createMarkerFromHouse(newHouse));
    console.log("time to update!");

    //remove marker if a house is not in state
    Object.keys(this.markers)
      .filter((houseId) => !housesOjb[houseId])
      .forEach((houseId) => this.removeMarker(this.markers[houseId]));
  }

  createMarkerFromHouse(newHouse) {
    return null;
  }

  removeMarker(marker) {
    return null;
  }
}

export default MarkerManager;
