import React from "react";
import HousesIndex from "../Houses/houses_index";
import Map from "../Map/map";

const Search = (props) => {
  return (
    <div>
      <div>
        <h1 style={{ border: "10px solid red" }}>Search nav goes here</h1>
      </div>
      <div className="listing-page">
        <div className="listing-page-left">
          <Map />
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
