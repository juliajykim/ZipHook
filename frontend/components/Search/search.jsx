import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { updateFilter } from "../../actions/filter_action";
import HousesIndex from "../Houses/houses_index";
import Map from "../Map/map";
import MapClass from "../Map/map_class";
import SearchNav from "./search_nav";

const Search = (props) => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.entities.houses);
  const history = useHistory();

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
