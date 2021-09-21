import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchAllCities } from "../../actions/cities_actions";
import { removeAllFilter } from "../../actions/filter_action";
import { openModal } from "../../actions/modal_actions";
import { createSave, deleteSave } from "../../actions/saves_actions";

const HouseItem = (props) => {
  //hooks
  const { house, saves } = props;
  debugger;
  const currentUser = useSelector((state) => state.session.currentUser);

  const [isSaved, setIsSaved] = useState(saves.includes(house.id));

  const history = useHistory();
  const dispatch = useDispatch();
  debugger;

  useEffect(() => {
    setIsSaved(saves.includes(house.id));
  }, [currentUser]);
  //props

  // useEffect(() => {
  //   return () => {
  //     debugger;
  //     dispatch(removeAllFilter());
  //   };
  // }, []);

  const handleSave = () => {
    setIsSaved((isSaved) => !isSaved);
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
    history.push(`../zips/${house.id}`);
  };

  return (
    <div className="property-thumbnail-container">
      <div className="property-thumbnail">
        <img src={house.photoUrls} alt="house-thumbnail" onClick={onClick} />
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
      </div>
      <div className="property-thumbnail-info">
        <div>
          <h2>${`${house.price}`} /mo</h2>
          <p>
            {house.address} , {house.city}, {house.state}, {house.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
