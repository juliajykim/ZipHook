import React, { useEffect, useState } from "react";
import HouseItem from "./house_item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";

const HousesIndex = (props) => {
  const houses = useSelector((state) => Object.values(state.entities.houses));

  const mappedHouses = houses.map((house, i) => {
    return <HouseItem key={`house-${i}`} house={house} />;
  });

  return <div className="property-index-container">{mappedHouses}</div>;
};

export default HousesIndex;
