import React from "react";
import MarkerManager from "../../util/marker_manager";

const mapOptions = {
  center: { lat: 40.740879, lng: -73.987135 },
  zoom: 13,
  disableDefaultUI: true,
  mapTypeControl: false,
  streetViewControl: false,
  scaleControl: false,
  zoomConrol: false,
  clickableIcons: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

class MapClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.history = this.props.history;
    this.MarkerManager = new MarkerManager(this.map, this.history);
    this.registerListeners();
    this.handleMarkerBounce();
    this.MarkerManager.updateMarkers(this.props.houses);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.houses);
    this.handleMarkerBounce();
  }

  registerListeners() {
    const { dispatch, updateFilter } = this.props;
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      dispatch(updateFilter("bounds", bounds));
    });
  }

  handleMarkerBounce() {
    const houses = document.querySelectorAll(".property-thumbnail-container");
    houses.forEach((house) =>
      house.addEventListener("mouseover", () => {
        let marker = this.MarkerManager.markers[house.id];
        marker.setIcon(
          "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        );
        marker.setAnimation(google.maps.Animation.BOUNCE);
      })
    );
    houses.forEach((house) =>
      house.addEventListener("mouseout", () => {
        let marker = this.MarkerManager.markers[house.id];
        marker.setIcon("https://maps.google.com/mapfiles/ms/icons/red-dot.png");
        marker.setAnimation(null);
      })
    );
  }

  render() {
    return <div id="map-container" ref={(map) => (this.mapNode = map)}></div>;
  }
}

export default MapClass;
