import React, { useCallback, useEffect, useRef, useState } from "react";
import MarkerManager from "../../util/marker_manager";

const GeocodingMap = (props) => {
  const mapRef = useRef(null);
  let markers = [];
  const mapOptions = {
    center: { lat: 40.77247667478867, lng: -73.96232993103025 },
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

    map.addListener("click", function (event) {
      props.setCurrState({
        ...props.currState,
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });

      addMarker(event.latLng, map);
    });
  }, [mapRef]);

  const addMarker = (position, map) => {
    if (markers.length > 0) {
      markers[0].setMap(null);
      markers = [];
    }

    const marker = new google.maps.Marker({
      position,
      map: map,
      icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
    });
    markers.push(marker);
  };

  useEffect(() => {
    initMap();
  }, [initMap]);

  return <div id="geocoding-map-container" ref={mapRef} />;
};

export default GeocodingMap;
