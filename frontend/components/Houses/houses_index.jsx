import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HouseItem from "./house_item";
import { customDidMount } from "../../util/hook_util";
import { useDispatch } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";
import { fetchAllCities } from "../../actions/cities_actions";

const HousesIndex = () => {
  const houses = useSelector((state) => Object.values(state.entities.houses));
  const dispatch = useDispatch();

  //componentDidMount
  useEffect(() => dispatch(fetchAllHouses()), []);

  //FetchCities
  useEffect(() => {
    dispatch(fetchAllCities());
  }, []);

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
