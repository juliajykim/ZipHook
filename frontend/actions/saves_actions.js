import * as SaveApiUtil from "../util/save_utils";
import { receiveErrors } from "./session_actions";

export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const DELETE_SAVE = "DELETE_SAVE";

export const receiveSave = (save) => {
  return {
    type: RECEIVE_SAVE,
    save,
  };
};

export const removeSave = (save) => {
  return {
    type: DELETE_SAVE,
    save,
  };
};

export const createSave = (house) => {
  return (dispatch) => {
    return SaveApiUtil.createSave(house).then(
      (save) => dispatch(receiveSave(save)),
      (err) => dispatch(dispatch(receiveErrors(err.responseJSON)))
    );
  };
};

export const deleteSave = (house) => {
  return (dispatch) => {
    return SaveApiUtil.deleteSave(house).then(
      (save) => dispatch(removeSave(save)),
      (err) => dispatch(dispatch(receiveErrors(err.responseJSON)))
    );
  };
};
