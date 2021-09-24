import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { updateFilter } from "../../actions/filter_action";
import HousesIndex from "../Houses/houses_index";
import Map from "../Map/map";
import MapClass from "../Map/map_class";
import SearchNav from "./search_nav";

const Search = (props) => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.entities.houses);
  const history = useHistory();
  const location = useLocation();

  let filteredHouses;
  if (
    location.pathname.includes("rent") ||
    location.pathname.includes("zips")
  ) {
    filteredHouses = Object.values(houses).filter(
      (house) => house.isRent == true
    );
  }
  if (location.pathname.includes("buy")) {
    filteredHouses = Object.values(houses).filter(
      (house) => house.isRent == false
    );
  }
  return (
    <div>
      <div>
        <SearchNav />
      </div>
      <div className="listing-page">
        <div className="listing-page-left">
          <MapClass
            dispatch={dispatch}
            history={history}
            updateFilter={updateFilter}
            houses={filteredHouses}
          />
        </div>
        <div className="listing-page-right">
          <h1>Listings</h1>
          <HousesIndex />
        </div>
      </div>
    </div>
  );
};

export default Search;
