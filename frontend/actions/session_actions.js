import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.signup(user).then(
      (user) => dispatch(receiveCurrentUser(user)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionAPIUtil.login(user).then(
      (user) => dispatch(receiveCurrentUser(user)),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionAPIUtil.logout().then(
      () => dispatch(logoutCurrentUser()),
      (err) => dispatch(receiveErrors(err.responseJSON))
    );
  };
};
