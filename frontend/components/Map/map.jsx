import React, { useCallback, useEffect, useRef, useState } from "react";

const Map = (props) => {
  const mapRef = useRef(null);
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
    new window.google.maps.Map(mapRef.current, mapOptions);
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return <div id="map-container" ref={mapRef} />;
};

export default Map;
