import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import configureStore from "../../store/store";
import MarkerManager from "../../util/marker_manager";
import { updateFilter } from "../../actions/filter_action";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";
import { useComponentDidUpdate } from "../../util/hook_util";

const Map = (props) => {
  const houses = useSelector((state) => Object.values(state.entities.houses));
  const [currHouses, setCurrHouses] = useState(houses);
  
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

  const initMap = useCallback(() => {
    map = new google.maps.Map(mapRef.current, mapOptions);
  }, [mapRef]);

  useEffect(() => {
    initMap();
    registerLister();
    registerMarkerManager(map);
    setCurrHouses(houses);
  }, [initMap, registerLister, currHouses]);

  const registerMarkerManager = (map) => {
    markerManager = new MarkerManager(map);
    markerManager.updateMarkers(currHouses);
  };

  useEffect(() => {
    if (currHouses.length != 0) {
      markerManager.updateMarkers(currHouses);
    }
  }, [currHouses]);

  const registerLister = useCallback(() => {
    map = new google.maps.Map(mapRef.current, mapOptions);
    google.maps.event.addListener(map, "idle", () => {
      const { north, south, east, west } = map.getBounds().toJSON();
      let bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      dispatch(updateFilter("bounds", bounds));
    });
  }, [mapRef]);

  return <div id="map-container" ref={mapRef} />;
};

export default Map;
