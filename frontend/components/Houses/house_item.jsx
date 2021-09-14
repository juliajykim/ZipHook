import React, { useState } from "react";
import { useSelector } from "react-redux";

const HouseItem = (props) => {
  const [isSaved, setIsSaved] = useState(false);
  const house = props.house;
  const currentUser = useSelector((state) => state.session.currentUser);

  const heart = () =>
    isSaved && currentUser ? (
      <a className="fas fa-heart saved"></a>
    ) : (
      <a className="far fa-heart"></a>
    );

  return (
    <div className="property-thumbnail-container">
      <div className="property-thumbnail">
        <img src={house.photoUrl} alt="house-thumbnail" />
      </div>
      <div className="heart-container">
        <button id="heart">{heart}</button>
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
