import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";
import HousesIndex from "../Houses/houses_index";
import Map from "../Map/map";

const Search = (props) => {
  //hooks
  // return !jQuery.isEmptyObject(houses) ? (
  //   <div>
  //     <div>
  //       <h1 style={{ border: "10px solid red" }}>Search nav goes here</h1>
  //     </div>
  //     <div className="listing-page">
  //       <div className="listing-page-left">
  //         <Map houses={Object.values(houses)} />
  //       </div>
  //       <div className="listing-page-right">
  //         <h1>Listings</h1>
  //         <HousesIndex houses={houses} />
  //       </div>
  //     </div>
  //   </div>
  // ) : (
  //   "Loading"
  // );
  // return (
  //   <div>
  //     <div>
  //       <h1 style={{ border: "10px solid red" }}>Search nav goes here</h1>
  //     </div>
  //     <div className="listing-page">
  //       <div className="listing-page-left">
  //         <Map houses={Object.values(houses)} filters={filters} />
  //       </div>
  //       <div className="listing-page-right">
  //         <h1>Listings</h1>
  //         <HousesIndex houses={houses} />
  //       </div>
  //     </div>
  //   </div>
  // );

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
