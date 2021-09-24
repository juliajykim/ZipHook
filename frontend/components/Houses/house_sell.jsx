import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { openModal } from "../../actions/modal_actions";
import HouseSellForm from "./house_sell_form";

const HouseSell = (props) => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="sell-page">
      <img src={window.sellBg1} className="sell-background" />
      <div className="main-sell">
        <div className="sell-slogan">
          <h1>Sell your home with confidence</h1>
          <h2>Zip is making it simpler to sell our home and move forward!</h2>
          {currentUser ? (
            <button
              className="add-house logged-in"
              onClick={() => history.push("/sell/form")}>
              Add My Sweet Home
            </button>
          ) : (
            <button
              className="add-house"
              onClick={() => dispatch(openModal("login"))}>
              Login to sell my house
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HouseSell;
