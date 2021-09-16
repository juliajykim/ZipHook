import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewHouse } from "../../actions/houses_actions";

const HouseSellForm = (props) => {
  const [currState, setCurrState] = useState({});
  const [photoFile, setPhotoFile] = useState(null);
  const dispatch = useDispatch();

  const onInput = (e, type) => {
    e.preventDefault();
    setCurrState({ ...currState, [type]: e.currentTarget.value });
  };

  const handleFile = (e) => {
    setPhotoFile(e.currentTarget.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("house[address]", currState.address);
    formData.append("house[city]", currState.city);
    formData.append("house[state]", currState.state);
    formData.append("house[zipcode]", currState.zipcode);
    formData.append("house[price]", currState.price);
    formData.append("house[baths]", currState.baths);
    formData.append("house[beds]", currState.beds);
    formData.append("house[sqft]", currState.sqft);
    formData.append("house[is_rent]", currState.isRent);
    formData.append("house[lat]", currState.lat);
    formData.append("house[lng]", currState.lng);
    formData.append("house[description]", currState.description);
    formData.append("house[yr_built]", currState.yrBuilt);
    formData.append("house[photo]", photoFile);
    dispatch(addNewHouse(formData));
  };

  console.log(currState);
  return (
    <div>
      FORM!!!
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Address
          <input
            type="text"
            value={currState.address || ""}
            onChange={(e) => onInput(e, "address")}
          />
        </label>
        <label>
          city
          <input
            type="text"
            value={currState.city || ""}
            onChange={(e) => onInput(e, "city")}
          />
        </label>
        <label>
          state
          <input
            type="text"
            value={currState.state}
            onChange={(e) => onInput(e, "state")}
          />
        </label>
        <label>
          zipcode
          <input
            type="integer"
            value={currState.zipcode}
            onChange={(e) => onInput(e, "zipcode")}
          />
        </label>
        <label>
          price
          <input
            type="integer"
            value={currState.price}
            onChange={(e) => onInput(e, "price")}
          />
        </label>

        <label>
          baths
          <input
            type="integer"
            value={currState.baths}
            onChange={(e) => onInput(e, "baths")}
          />
        </label>

        <label>
          beds
          <input
            type="integer"
            value={currState.beds}
            onChange={(e) => onInput(e, "beds")}
          />
        </label>

        <label>
          sqft
          <input
            type="integer"
            value={currState.sqft}
            onChange={(e) => onInput(e, "sqft")}
          />
        </label>

        <label>
          Rent
          <input
            type="radio"
            value={true}
            onChange={(e) => onInput(e, "isRent")}
          />
        </label>

        <label>
          Sell
          <input
            type="radio"
            value={false}
            onChange={(e) => onInput(e, "isRent")}
          />
        </label>

        <label>
          lat
          <input
            type="float"
            value={currState.lat}
            onChange={(e) => onInput(e, "lat")}
          />
        </label>

        <label>
          lng
          <input
            type="float"
            value={currState.lng}
            onChange={(e) => onInput(e, "lng")}
          />
        </label>

        <label>
          description
          <input
            type="text"
            value={currState.description}
            onChange={(e) => onInput(e, "description")}
          />
        </label>

        <label>
          yrBuilt
          <input
            type="integer"
            value={currState.yrBuilt}
            onChange={(e) => onInput(e, "yrBuilt")}
          />
        </label>

        <label htmlFor="">
          Photos
          <input type="file" onChange={(e) => handleFile(e)} />
        </label>
        <button type="submit">Create House!</button>
      </form>
    </div>
  );
};

export default HouseSellForm;
