import React, {
  Component,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import MarkerManager from "../../util/marker_manager";
import { updateFilter } from "../../actions/filter_action";
import { useDispatch } from "react-redux";

const Map = (props) => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  let map;
  let markerManager = new MarkerManager({});

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

  //initialize map
  const initMap = useCallback(() => {
    map = new google.maps.Map(mapRef.current, mapOptions);
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  //componentDidMount
  useEffect(() => {
    if (!jQuery.isEmptyObject(map)) {
      markerManager = new MarkerManager(map);
    }
  });

  //ComponentDidUpdate;
  useEffect(() => {
    markerManager.updateMarkers(props.houses);
  }, [markerManager]);

  useEffect(() => {
    google.maps.event.addListener(map, "idle", () => {
      const { north, south, east, west } = map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      dispatch(updateFilter("bounds", bounds));
    });
  }, [map]);

  return <div id="map-container" ref={mapRef} />;
};

export default Map;
