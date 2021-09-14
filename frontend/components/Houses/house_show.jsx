import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchHouse } from "../../util/house_utils";

const HouseShow = (props) => {
  //Hooks
  const history = useHistory();
  const dispatch = useDispatch();
  const [house, setHouse] = useState({});

  //Props
  const houseId = props.match.params.id;
  const fetched = useSelector((state) => {
    state.entities.houses[houseId];
  });

  //FetchHouse when componentDidMount
  useEffect(() => {
    fetchHouse(houseId).then((house) => setHouse(house));
  }, []);

  const price = `$${house.price}`;
  const address = `${house.address}, ${house.city}, ${house.state} ${house.zipcode}`;
  const beds = `${house.beds} bd`;
  const baths = `${house.baths} ba`;
  const sqft = `${house.sqft} sqft`;

  const onClose = () => {
    debugger;
  };
  return house ? (
    <div className="modal-background-property" onClick={() => history.goBack()}>
      <div
        className="modal-child-property"
        onClick={(e) => e.stopPropagation()}>
        <div className="property-modal-container">
          <div className="property-photos-container">
            <div className="modal-main-photo">
              <img src={house.photoUrl} alt="" />
            </div>
          </div>

          <div className="property-info-container">
            <div className="property-info-header">
              <img className="" src={window.logoURL} />
              <div>
                <button
                  id="heart"
                  className="far fa-heart"
                  style={{ color: "blue" }}></button>
              </div>
            </div>
            <div className="property-info">
              <div className="property-pbbs">
                <h1>
                  ${house.price} <p>/mo</p>
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
              <h1 style={{ border: "10px solid red", padding: "100px" }}>
                Mininmap Goes Here
              </h1>
              {/* <MiniMap property={property} /> */}
            </div>

            <div className="property-overview">
              <h1>OverView</h1>
              <h2>
                {house.description} {house.description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default HouseShow;
