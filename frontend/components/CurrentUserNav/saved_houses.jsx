import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { fetchAllHouses } from "../../actions/houses_actions";
import { fetchAllHouses } from "../../util/house_utils";
import HouseItem from "../Houses/house_item";

const SavedHouses = (props) => {
  const dispatch = useDispatch();
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    fetchAllHouses({}).then((houses) => setHouses(houses));
  }, []);
  const saves = useSelector((state) => {
    debugger;
    return state.session.currentUser.saves;
  });

  return (
    <div className="saved-properties-container">
      <h1 id="my-saves"> Saved Properties </h1>
      <div className="saved-properties">
        {!jQuery.isEmptyObject(houses)
          ? saves.map((id) => {
              debugger;
              return <HouseItem key={id} house={houses[id]} saves={saves} />;
            })
          : null}
      </div>
    </div>
  );
};

export default SavedHouses;
