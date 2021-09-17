import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";
import { RECEIVE_ALL_HOUSES, RECEIVE_HOUSE } from "../actions/houses_actions";

const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
      return [];

    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ALL_HOUSES:
      return [];
    case RECEIVE_HOUSE:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
