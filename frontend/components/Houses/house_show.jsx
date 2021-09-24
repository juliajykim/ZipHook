import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchHouse } from "../../util/house_utils";
import { fetchAllCities } from "../../actions/cities_actions";
import MiniMap from "../Map/mini_map";
import { createSave, deleteSave } from "../../actions/saves_actions";

const HouseShow = (props) => {
  //Hooks
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [house, setHouse] = useState({});
  const saves = useSelector((state) =>
    state.session.currentUser ? state.session.currentUser.saves : []
  );
  const currentUser = useSelector((state) => state.session.currentUser);

  //Props
  const houseId = props.match.params.id;
  const [isSaved, setIsSaved] = useState(saves.includes(parseInt(houseId)));

  //FetchHouse when componentDidMount
  useEffect(() => {
    fetchHouse(houseId).then((house) => setHouse(house));
    setIsSaved(saves.includes(parseInt(houseId)));
  }, [currentUser]);

  const handleSave = () => {
    setIsSaved((isSaved) => !isSaved);
    if (isSaved) {
      dispatch(deleteSave(house));
    } else {
      dispatch(createSave(house));
    }
  };

  const heart = () =>
    isSaved ? (
      <a className="fas fa-heart saved"></a>
    ) : (
      <a className="far fa-heart" style={{ color: "#006aff" }}></a>
    );

  const address = `${house.address}, ${house.city}, ${house.state} ${house.zipcode}`;

  return !jQuery.isEmptyObject(house) ? (
    <div className="modal-background-property" onClick={() => history.goBack()}>
      <div
        className="modal-child-property"
        onClick={(e) => e.stopPropagation()}>
        <div className="property-modal-container">
          <div className="property-photos-container">
            <div className="modal-main-photo">
              <img src={house.photoUrl} alt="" />
            </div>
            {house.photoUrls.slice(1).map((photo, i) => (
              <div className="modal-photos" key={`photo-${i + 1}`}>
                <img src={photo} className="photo" id={`photo${i + 1}`} />
              </div>
            ))}
          </div>

          <div className="property-info-container">
            <div className="property-info-header">
              <img className="" src={window.logoURL} />
              <div>
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
            <div className="property-info">
              <div className="property-pbbs">
                <h1>
                  {house.isRent ? (
                    <h1>${house.price} /mo</h1>
                  ) : (
                    <h1>${house.price.toLocaleString()}</h1>
                  )}
                </h1>
                <div className="modal-property-detail">
                  <p> {house.beds} bd </p>
                  <p> {house.baths} ba </p>
                  <p> {house.sqft} sqft </p>
                </div>
              </div>
              <div>{address}</div>
            </div>
            <div className="property-info-minimap">
              {/* <h1 style={{ border: "10px solid red", padding: "100px" }}>
                Mininmap Goes Here
              </h1> */}
              <MiniMap house={house} />
            </div>

            <div className="property-overview">
              <h1>OverView</h1>
              <h2>{house.description}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default HouseShow;
