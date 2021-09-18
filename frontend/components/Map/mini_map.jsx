import React, { useCallback, useEffect, useRef, useState } from "react";
import MarkerManager from "../../util/marker_manager";

const MiniMap = (props) => {
  const { lat, lng } = props.house;
  const mapRef = useRef(null);
  const mapOptions = {
    center: { lat: lat, lng: lng },
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
    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    const markerManager = new MarkerManager(map);
    markerManager.updateMarkers([props.house]);
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return <div id="mini-map-container" ref={mapRef} />;
};

export default MiniMap;
