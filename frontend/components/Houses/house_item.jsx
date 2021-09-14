import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const HouseItem = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const house = props.house;
  const currentUser = useSelector((state) => state.session.currentUser);
  const history = useHistory();

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
    <div className="property-thumbnail-container" onClick={onClick}>
      <div className="property-thumbnail">
        <img src={house.photoUrl} alt="house-thumbnail" />
      </div>
      <div className="heart-container">
        <button id="heart">{heart()}</button>
      </div>
      <div className="property-thumbnail-info">
        <div>
          <h2>${`${house.price}`} /mo</h2>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
