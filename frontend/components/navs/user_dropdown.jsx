import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";

const UserDropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openDropDown = (e) => {
    setIsOpen(true);
  };

  const closeDropDown = (e) => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };
  return (
    <button
      onFocus={openDropDown}
      onBlur={closeDropDown}
      className="fas fa-user-circle">
      <div id="user-dropdown" className={isOpen ? "show" : "hidden"}>
        <Link to="/zips/saves"> Saved Houses </Link>
        <Link to="/zips/saves"> Saved Search </Link>
        <Link to="/zips/saves"> Your home </Link>
        <a onClick={() => dispatch(logout())}> Sign out</a>
      </div>
    </button>
  );
};

export default UserDropDown;
