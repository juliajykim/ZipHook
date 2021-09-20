import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchAllCities } from "../../actions/cities_actions";
import { openModal } from "../../actions/modal_actions";
import { createSave, deleteSave } from "../../actions/saves_actions";
import HouseShow from "./house_show";

const HouseItem = (props) => {
  //hooks
  const house = props.house;
  const currentUser = useSelector((state) => state.session.currentUser);
  const saves = useSelector((state) =>
    currentUser ? state.session.currentUser.saves : []
  );
  const [isSaved, setIsSaved] = useState(saves.includes(house.id));

  const history = useHistory();
  const dispatch = useDispatch();

  //props

  const handleSave = () => {
    setIsSaved(!isSaved);
    if (isSaved) {
      dispatch(deleteSave(house));
    } else {
      dispatch(createSave(house));
    }
  };

  const heart = () =>
    isSaved && currentUser ? (
      <a className="fas fa-heart saved"></a>
    ) : (
      <a className="far fa-heart"></a>
    );

  const onClick = () => {
    history.push(`zips/${house.id}`);
  };

  return (
    <div className="property-thumbnail-container">
      <div className="property-thumbnail">
        <img src={house.photoUrls} alt="house-thumbnail" onClick={onClick} />
      </div>
      <div className="heart-container">
        <button
          id="heart"
          onClick={
            currentUser
              ? () => handleSave(house)
              : () => dispatch(openModal("login"))
          }>
          {heart()}
        </button>
      </div>
      <div className="property-thumbnail-info">
        <div>
          <h2>${`${house.price}`} /mo</h2>
          <h3>
            {house.address} , {house.city}, {house.state}, {house.zipcode}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
