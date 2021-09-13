import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import UserIcon from "./user_icon";

const HeaderNav = () => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();

  return (
    <div className="NavHeader">
      <div className="NavHeader-left">
        <Link to="/zips"> Buy </Link>
        <Link to="/buy"> Rent </Link>
        <Link to="/buy"> Sell </Link>
        <Link to="/buy"> AgentFinder </Link>
      </div>
      <Link to="/" className="logo-container">
        <img className="logo" src={window.logoURL} />
      </Link>
      <div className="NavHeader-right">
        <a href="https://www.linkedin.com/in/julia-kim-350712213/"> LinkedIn</a>
        <a href="https://github.com/juliajykim/Zip">Github</a>
        <a href="https://angel.co/u/juliajykim"> AngeList </a>
        <UserIcon />
      </div>
    </div>
  );
};

export default HeaderNav;
