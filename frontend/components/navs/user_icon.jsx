import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";

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
      <h2>Dropdown goes here</h2>
    </div>
  );
  return currentUser ? hasUser() : noUser();
};

export default UserIcon;
