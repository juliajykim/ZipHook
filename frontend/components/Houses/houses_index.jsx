import React, { useEffect, useState } from "react";
import HouseItem from "./house_item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";
import { useHistory, useLocation, useParams } from "react-router";

const HousesIndex = (props) => {
  const location = useLocation();
  const houses = useSelector((state) => Object.values(state.entities.houses));
  let filteredHouses;
  if (
    location.pathname.includes("rent") ||
    location.pathname.includes("zips")
  ) {
    filteredHouses = houses.filter((house) => house.isRent == true);
  }
  if (location.pathname.includes("buy")) {
    filteredHouses = houses.filter((house) => house.isRent == false);
  }
  const saves = useSelector((state) =>
    state.session.currentUser ? state.session.currentUser.saves : []
  );

  const mappedHouses = filteredHouses.map((house, i) => {
    return (
      <HouseItem
        key={`house-${i}`}
        house={house}
        saves={saves}
        isRent={house.isRent}
      />
    );
  });

  return (
    <div className="property-index-container">
      {mappedHouses.length > 0 ? (
        mappedHouses
      ) : (
        <h1 className="no-listing"> "No Listing available.." </h1>
      )}
    </div>
  );
};

export default HousesIndex;
