import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import SessionForm from "../Session_form/session_form";
import { closeModal } from "../../actions/modal_actions";
import { useSelector } from "react-redux";

const Modal = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const ui = useSelector((state) => state.ui);
  if (!ui) {
    return null;
  }
  let component;
  switch (ui.modal) {
    case "login":
      component = <SessionForm />;
      break;
    case "signup":
      component = <SessionForm />;
      break;
    default:
      null;
  }

  return (
    <div
      className={`modal-background-${ui.modal}`}
      onClick={() => dispatch(closeModal())}>
      <div
        className={`modal-child-${ui.modal}`}
        onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
