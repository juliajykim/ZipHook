import { DELETE_SAVE, RECEIVE_SAVE } from "../actions/saves_actions";
import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const _nullUser = Object.freeze({
  currentUser: null,
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  const newState = { ...oldState };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };

    case LOGOUT_CURRENT_USER:
      return _nullUser;

    case RECEIVE_SAVE:
      return { currentUser: action.save };

    case DELETE_SAVE:
      return { currentUser: action.save };

    default:
      return oldState;
  }
};

export default sessionReducer;
