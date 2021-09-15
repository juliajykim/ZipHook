import React, { useEffect, useState } from "react";
import HouseItem from "./house_item";

const HousesIndex = (props) => {
  const houses = Object.values(props.houses);

  const mappedHouses = houses.map((house, i) => {
    return (
      <div className="property-index-container">
        <HouseItem key={`house-${i}`} house={house} />
      </div>
    );
  });

  return <div>{mappedHouses}</div>;
};

export default HousesIndex;
