import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNewHouse, receiveHouse } from "../../actions/houses_actions";
import { createHouse } from "../../util/house_utils";
import MyDropzone from "./dropzone";
import GeocodingMap from "../Map/geocoding_map";

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
      history.replace(`zips/${house.id}`);
      dispatch(receiveHouse);
    });
  };

  return (
    <div>
      Create Listing
      <div className="house-sell-form-container">
        {/* NOTE : Dropzone */}
        <div className="dropzone-container">
          <MyDropzone handleFiles={handleFiles} />
        </div>
        <div className="house-sell-input-container">
          <form onSubmit={handleSubmit}>
            {/* NOTE: ADDRESS */}
            <label>
              Address
              <input
                type="text"
                value={currState.address || ""}
                onChange={(e) => onInput(e, "address")}
                required
              />
            </label>

            {/* NOTE: CITY */}
            <label>
              city
              <input
                type="text"
                value={currState.city || ""}
                onChange={(e) => onInput(e, "city")}
                required
              />
            </label>

            {/* NOTE: State */}
            <label>
              state
              <input
                type="text"
                value={currState.state || ""}
                onChange={(e) => onInput(e, "state")}
                required
              />
            </label>

            {/* NOTE: Zipcode */}
            <label>
              zipcode
              <input
                type="text"
                value={currState.zipcode || ""}
                onChange={(e) => onInput(e, "zipcode")}
                required
              />
            </label>

            {/* NOTE: Price */}
            <label>
              price
              <input
                type="text"
                value={currState.price || ""}
                onChange={(e) => onInput(e, "price")}
                required
              />
            </label>

            {/* NOTE: Bathrooms */}
            <label>
              baths
              <input
                type="text"
                value={currState.baths || ""}
                onChange={(e) => onInput(e, "baths")}
                required
              />
            </label>

            {/* NOTE: Bedrooms */}
            <label>
              beds
              <input
                type="text"
                value={currState.beds || ""}
                onChange={(e) => onInput(e, "beds")}
                required
              />
            </label>

            {/* NOTE: SQFT */}
            <label>
              sqft
              <input
                type="text"
                value={currState.sqft || ""}
                onChange={(e) => onInput(e, "sqft")}
                required
              />
            </label>

            {/* NOTE: Rent */}
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

            {/* NOTE: MAP */}
            <h1> Click map to get coordinates of your house!</h1>
            <GeocodingMap setCurrState={setCurrState} currState={currState} />

            {/* NOTE: LAT LNG */}
            <label>
              lat
              <input
                type="text"
                value={currState.lat || ""}
                onChange={(e) => onInput(e, "lat")}
                required
              />
            </label>

            <label>
              lng
              <input
                type="text"
                value={currState.lng || ""}
                onChange={(e) => onInput(e, "lng")}
                required
              />
            </label>

            {/* NOTE: Description */}
            <label>
              description
              <input
                type="text"
                value={currState.description || ""}
                onChange={(e) => onInput(e, "description")}
                required
              />
            </label>

            {/* NOTE: submit button */}

            <button type="submit">Create House!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HouseSellForm;
