import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNewHouse, receiveHouse } from "../../actions/houses_actions";
import { createHouse } from "../../util/house_utils";
import MyDropzone from "./dropzone";
import GeocodingMap from "../Map/geocoding_map";
import LoadingSpinner from "../Utils/loader";
import { useSelector } from "react-redux";

const HouseSellForm = (props) => {
  const [currState, setCurrState] = useState({});
  const [photoFile, setPhotoFile] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [photoFiles, setPhotoFiles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const errors = useSelector((state) => state.errors);

  const onInput = (e, type) => {
    // e.preventDefault();
    setCurrState({ ...currState, [type]: e.currentTarget.value });
  };

  const handleFiles = (files) => {
    setPhotoFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger;
    setLoading(true);
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
      setLoading(false);
      history.replace(`zips/${house.id}`);
      dispatch(receiveHouse);
    });
  };

  if (errors.length > 0) {
    window.alert(errors)
  }
  return (
    <div>
      <LoadingSpinner isLoading={isLoading} />
      <div className="house-sell-form-container">
        {/* NOTE : Dropzone */}
        <div className="dropzone-container">
          <h1>Upload photos of your Home Sweet Home </h1>
          <MyDropzone handleFiles={handleFiles} />
        </div>
        <div className="house-sell-input-container">
          <form onSubmit={handleSubmit}>
            {/* NOTE: ADDRESS */}
            <label id="sell-form-input">
              <p>Address</p>
            </label>
            <input
              type="text"
              value={currState.address || ""}
              onChange={(e) => onInput(e, "address")}
              required
            />

            {/* NOTE: CITY & STATE */}
            <div className="city-state-input">
              <div>
                <label id="sell-form-input">
                  <p>City</p>
                </label>
                <input
                  type="text"
                  value={currState.city || ""}
                  onChange={(e) => onInput(e, "city")}
                  required
                />
              </div>
              <div>
                <label id="sell-form-input">
                  <p>State</p>
                </label>
                <input
                  type="text"
                  value={currState.state || ""}
                  onChange={(e) => onInput(e, "state")}
                  required
                />
              </div>
            </div>

            {/* NOTE: Zipcode */}
            <label id="sell-form-input">
              <p>Zipcode</p>
            </label>
            <input
              type="text"
              value={currState.zipcode || ""}
              onChange={(e) => onInput(e, "zipcode")}
              required
            />
            {/* NOTE: Price */}
            <label id="sell-form-input">
              <p>Price</p>
            </label>
            <input
              type="text"
              value={currState.price || ""}
              onChange={(e) => onInput(e, "price")}
              required
            />
            {/* NOTE: Bedrooms Bathrooms */}
            <div className="bd-ba-input">
              <div>
                <label id="sell-form-input">
                  <p>Bedrooms</p>
                </label>
                <input
                  type="text"
                  value={currState.beds || ""}
                  onChange={(e) => onInput(e, "beds")}
                  required
                />
              </div>
              <div>
                <label id="sell-form-input">
                  <p>Bathrooms</p>
                </label>
                <input
                  type="text"
                  value={currState.baths || ""}
                  onChange={(e) => onInput(e, "baths")}
                  required
                />
              </div>
              <div>
                <label id="sell-form-input">
                  <p>Sqft</p>
                </label>
                <input
                  type="text"
                  value={currState.sqft || ""}
                  onChange={(e) => onInput(e, "sqft")}
                  required
                />
              </div>
            </div>
            {/* NOTE: IsRent */}
            <div className="rent-sell-container">
              <div>
                <input
                  type="radio"
                  id="rent"
                  name="isRent"
                  value={true}
                  checked={currState.is_rent === "true"}
                  onChange={(e) => onInput(e, "is_rent")}
                />
                <label htmlFor="rent">
                  <p id="isRent-text">Rent</p>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="sell"
                  name="isRent"
                  value={false}
                  onChange={(e) => onInput(e, "is_rent")}
                  checked={currState.is_rent === "false"}
                />
                <label htmlFor="sell">
                  <p id="isRent-text">Sell</p>
                </label>
              </div>
            </div>
            {/* NOTE: MAP */}
            <div className="geo-coding-container">
              <h1>
                Click map to get coordinates{" "}
                <img
                  src="https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  id="pin"
                />
              </h1>
              <GeocodingMap setCurrState={setCurrState} currState={currState} />
            </div>

            {/* NOTE: LAT LNG */}
            <div className="lat-lng-container">
              <div>
                <label id="sell-form-input">
                  <p>Latitude</p>
                </label>
                <input
                  type="text"
                  value={currState.lat || ""}
                  onChange={(e) => onInput(e, "lat")}
                  required
                />
              </div>
              <div>
                <label id="sell-form-input">
                  <p>Longitude </p>
                </label>
                <input
                  type="text"
                  value={currState.lng || ""}
                  onChange={(e) => onInput(e, "lng")}
                  required
                />
              </div>
            </div>
            {/* NOTE: Description */}
            <label id="sell-form-input">
              <p>Description</p>
            </label>
            <textarea
              value={currState.description || ""}
              onChange={(e) => onInput(e, "description")}
              required
            />
            {/* NOTE: submit button */}
            <button type="submit" id="create-house-btn">
              Create House!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HouseSellForm;
