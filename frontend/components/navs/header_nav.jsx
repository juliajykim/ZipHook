import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import SessionForm from "../session_form/session_form";

const HeaderNav = () => {
  const currentUser = useSelector((state) => state.session.currentUser);
  const dispatch = useDispatch();
  if (currentUser) {
    return (
      <div>
        <h1>Zip</h1>
        <h1>{currentUser.email}</h1>
        <button type="submit" onClick={() => dispatch(logout())}>
          LogOut
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Zip</h1>
        <Link to="/login">Login</Link>
        &nbsp; or &nbsp;
        <Link to="/signup">SignUp</Link>
      </div>
    );
  }
};

export default HeaderNav;
