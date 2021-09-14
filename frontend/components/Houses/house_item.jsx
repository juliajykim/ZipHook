import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchAllCities } from "../../actions/cities_actions";

const HouseItem = (props) => {
  //hooks
  const history = useHistory();
  const dispatch = useDispatch();

  //props
  const [isSaved, setIsSaved] = useState(false);
  const house = props.house;
  const currentUser = useSelector((state) => state.session.currentUser);
  const cities = useSelector((state) => state.entities.cities);

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
          <h3>
            {house.address} , {house.city}, {house.state}, {house.zipcode}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HouseItem;
