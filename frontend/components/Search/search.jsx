import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateFilter } from "../../actions/filter_action";
import HousesIndex from "../Houses/houses_index";
import Map from "../Map/map";
import MapClass from "../Map/map_class";

const Search = (props) => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.entities.houses);
  return (
    <div>
      <div>
        <h1 style={{ border: "10px solid red" }}>Search nav goes here</h1>
      </div>
      <div className="listing-page">
        <div className="listing-page-left">
          <MapClass
            dispatch={dispatch}
            updateFilter={updateFilter}
            houses={Object.values(houses)}
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
