import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HouseItem from "./house_item";
import { customDidMount } from "../../util/hook_util";
import { useDispatch } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";
import { fetchAllCities } from "../../actions/cities_actions";

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
