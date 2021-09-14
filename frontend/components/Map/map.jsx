import React, { useCallback, useEffect, useRef, useState } from "react";
import MarkerManager from "../../util/marker_manager";

const Map = (props) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState({});
  const [MarkerManager, setMarkerManager] = useState({});

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
    setMap({ map: new window.google.maps.Map(mapRef.current, mapOptions) });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  useEffect(
    () => () => {
      initMarker();
    },
    [initMarker]
  );

  const initMarker = useCallback(() => {
    debugger;
    new MarkerManager(map);
  });

  return <div id="map-container" ref={mapRef} />;
};

export default Map;
