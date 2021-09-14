import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchHouse } from "../../util/house_utils";

const HouseShow = (props) => {
  const houseId = props.match.params.id;
  const dispatch = useDispatch();
  const [house, setHouse] = useState({});
  const fetched = useSelector((state) => {
    state.entities.houses[houseId];
  });

  useEffect(() => {
    fetchHouse(houseId).then((house) => setHouse(house));
  }, [house]);

  const price = `$${house.price}`;
  const address = `${house.address}, ${house.city}, ${house.state} ${house.zipcode}`;
  const beds = `${house.beds} bd`;
  const baths = `${house.baths} ba`;
  const sqft = `${house.sqft} sqft`;
  debugger;
  return (
    <div>
      <h1>{price}</h1>
      <h1>{address}</h1>
      <h1>{beds}</h1>
      <h1>{baths}</h1>
      <h1>{sqft}</h1>
    </div>
  );
};

export default HouseShow;
