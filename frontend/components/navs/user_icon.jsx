import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import UserDropDown from "./user_dropdown";

const UserIcon = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.currentUser);

  const noUser = () => (
    <a className="login-btn" onClick={() => dispatch(openModal("login"))}>
      Sign in
    </a>
  );
  const hasUser = () => (
    <div className="logged-in-user">
      <UserDropDown />
    </div>
  );
  return currentUser ? hasUser() : noUser();
};

export default UserIcon;
