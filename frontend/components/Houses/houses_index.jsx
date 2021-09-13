import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HouseItem from "./house_item";
import { useComponentDidMount } from "../../util/hook_util";
import { useDispatch } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";

const HousesIndex = () => {
  const houses = useSelector((state) => Object.values(state.entities.houses));
  const dispatch = useDispatch();

  //componentDidMount
  useEffect(() => dispatch(fetchAllHouses()), []);

  const mappedHouses = houses.map((house, i) => {
    return (
      <div>
        <HouseItem house={house} key={`house-${i}`} />
      </div>
    );
  });

  return <div>{mappedHouses}</div>;
};

export default HousesIndex;
