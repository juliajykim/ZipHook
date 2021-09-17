import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNewHouse, receiveHouse } from "../../actions/houses_actions";
import { createHouse } from "../../util/house_utils";
import MyDropzone from "./dropzone";

const HouseSellForm = (props) => {
  const [currState, setCurrState] = useState({});
  const [photoFile, setPhotoFile] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [photoFiles, setPhotoFiles] = useState([]);
  const onInput = (e, type) => {
    e.preventDefault();
    setCurrState({ ...currState, [type]: e.currentTarget.value });
  };

  const handleFiles = (files) => {
    setPhotoFiles(files);
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
    if (photoFile) {
      formData.append("house[photo]", photoFile);
    }
    if (photoFiles) {
      for (let i = 0; i < photoFiles.length; i++) {
        formData.append("house[photos][]", photoFiles[i]);
      }
    }
    dispatch(addNewHouse(formData));
    createHouse(formData).then((house) => {
      debugger;
      history.replace(`zips/${house.id}`);
      dispatch(receiveHouse);
    });
  };

  return (
    <div>
      Create Listing
      <div className="house-sell-form-container">
        <div className="dripzone-container">
          <MyDropzone handleFiles={handleFiles} />
        </div>
        <div className="house-sell-input-container">
          <form onSubmit={handleSubmit}>
            <label>
              Address
              <input
                type="text"
                value={currState.address || ""}
                onChange={(e) => onInput(e, "address")}
                required
              />
            </label>
            <label>
              city
              <input
                type="text"
                value={currState.city || ""}
                onChange={(e) => onInput(e, "city")}
                required
              />
            </label>
            <label>
              state
              <input
                type="text"
                value={currState.state || ""}
                onChange={(e) => onInput(e, "state")}
                required
              />
            </label>
            <label>
              zipcode
              <input
                type="text"
                value={currState.zipcode || ""}
                onChange={(e) => onInput(e, "zipcode")}
                required
              />
            </label>
            <label>
              price
              <input
                type="text"
                value={currState.price || ""}
                onChange={(e) => onInput(e, "price")}
                required
              />
            </label>

            <label>
              baths
              <input
                type="text"
                value={currState.baths || ""}
                onChange={(e) => onInput(e, "baths")}
                required
              />
            </label>

            <label>
              beds
              <input
                type="text"
                value={currState.beds || ""}
                onChange={(e) => onInput(e, "beds")}
                required
              />
            </label>

            <label>
              sqft
              <input
                type="text"
                value={currState.sqft || ""}
                onChange={(e) => onInput(e, "sqft")}
                required
              />
            </label>

            <label>
              Rent
              <input
                type="radio"
                value={true}
                onChange={(e) => onInput(e, "isRent")}
                required
              />
            </label>

            <label>
              Sell
              <input
                type="radio"
                value={false}
                onChange={(e) => onInput(e, "isRent")}
                required
              />
            </label>

            <label>
              lat
              <input
                type="text"
                value={currState.lat}
                onChange={(e) => onInput(e, "lat")}
                required
              />
            </label>

            <label>
              lng
              <input
                type="text"
                value={currState.lng}
                onChange={(e) => onInput(e, "lng")}
                required
              />
            </label>

            <label>
              description
              <input
                type="text"
                value={currState.description}
                onChange={(e) => onInput(e, "description")}
                required
              />
            </label>

            <label>
              yrBuilt
              <input
                type="text"
                value={currState.yrBuilt}
                onChange={(e) => onInput(e, "yrBuilt")}
                required
              />
            </label>
            <button type="submit">Create House!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HouseSellForm;
