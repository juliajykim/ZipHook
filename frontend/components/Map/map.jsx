import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";

import MarkerManager from "../../util/marker_manager";
import { updateFilter } from "../../actions/filter_action";
import { useDispatch, useSelector } from "react-redux";

const Map = (props) => {
  const houses = useSelector((state) => Object.values(state.entities.houses));
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  let map;
  let markerManager;
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

  // initialize map when component did mount
  // useEffect(() => {
  //   map = new google.maps.Map(mapRef.current, mapOptions);
  //   markerManager = new MarkerManager(map);
  // }, [houses]);

  useLayoutEffect(() => {
    map = map = new google.maps.Map(mapRef.current, mapOptions);
    markerManager = new MarkerManager(map);
    markerManager.updateMarkers(houses);
  });

  useEffect(() => {
    google.maps.event.addListener(map, "idle", () => {
      const { north, south, east, west } = map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      dispatch(updateFilter("bounds", bounds));
    });
  }, []);

  // ComponentDidUpdate;

  return <div id="map-container" ref={mapRef} />;
};

export default Map;
