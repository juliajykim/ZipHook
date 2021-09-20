import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllHouses } from "../../actions/houses_actions";
import HouseItem from "../Houses/house_item";

const SavedHouses = (props) => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.entities.houses);
  const saves = useSelector((state) => state.session.currentUser.saves);
  // debugger;
  //   const houses = useSelector((state) => state.entities.houses);
  useEffect(() => {
    dispatch(fetchAllHouses({}));
  }, []);

  return (
    <div className="saved-properties-container">
      <h1 id="my-saves"> Saved Properties </h1>
      <div className="saved-properties">
        {!jQuery.isEmptyObject(houses)
          ? saves.map((id) => <HouseItem key={id} house={houses[id]} />)
          : null}
      </div>
    </div>
  );
};

export default SavedHouses;
