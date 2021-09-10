import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import SessionForm from "../session_form/session_form";
import { closeModal } from "../../actions/modal_actions";
import { useSelector } from "react-redux";

const Modal = () => {
  const ui = useSelector((state) => state.ui.modal);
  if (!ui) {
    return null;
  }
  let dispatch = useDispatch();
  let component;
  let history = useHistory();
  switch (ui.modal) {
    case "login":
      history.push("/login");
      component = <SessionForm />;
      break;
    case "signup":
      history.push("/signup");
      component = <SessionForm />;
      break;
    default:
      null;
  }

  return (
    <div className="modal-background" onClick={() => dispatch(closeModal)}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
