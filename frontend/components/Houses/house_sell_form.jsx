import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewHouse } from "../../actions/houses_actions";
import Dropzone from "react-dropzone";
import MyDropzone from "./dropzone";

const HouseSellForm = (props) => {
  const [currState, setCurrState] = useState({});
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState();
  const dispatch = useDispatch();

  const onInput = (e, type) => {
    e.preventDefault();
    setCurrState({ ...currState, [type]: e.currentTarget.value });
  };

  const handleFile = (e) => {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPhotoFile(file);
      setPhotoUrl(fileReader.result);
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
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
    dispatch(addNewHouse(formData));
  };

  const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  console.log(photoUrl);
  const preview = photoUrl ? <img src={photoUrl} /> : null;

  return (
    <div>
      Create Listing
      <div className="house-sell-form-container">
        <div className="dripzone-container">
          <MyDropzone handleFile={handleFile} onDrop={onDrop} />
        </div>
        <div className="house-sell-input-container">
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
                type="text"
                value={currState.zipcode}
                onChange={(e) => onInput(e, "zipcode")}
              />
            </label>
            <label>
              price
              <input
                type="text"
                value={currState.price}
                onChange={(e) => onInput(e, "price")}
              />
            </label>

            <label>
              baths
              <input
                type="text"
                value={currState.baths}
                onChange={(e) => onInput(e, "baths")}
              />
            </label>

            <label>
              beds
              <input
                type="text"
                value={currState.beds}
                onChange={(e) => onInput(e, "beds")}
              />
            </label>

            <label>
              sqft
              <input
                type="text"
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
                type="text"
                value={currState.lat}
                onChange={(e) => onInput(e, "lat")}
              />
            </label>

            <label>
              lng
              <input
                type="text"
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
                type="text"
                value={currState.yrBuilt}
                onChange={(e) => onInput(e, "yrBuilt")}
              />
            </label>

            <label htmlFor="">
              Photos
              <input type="file" onChange={(e) => handleFile(e)} />
            </label>

            <h3>img preview {preview}</h3>
            <button type="submit">Create House!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HouseSellForm;
