import { fetchAllHouses } from "./houses_actions";

export const CHANGE_FILTER = "CHANGE_FILTER";
export const CLEAR_ALL_FILTER = "CLEAR_ALL_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const changeFilter = (filter, value) => {
  return {
    type: CHANGE_FILTER,
    filter,
    value,
  };
};

export const clearFilter = (filter) => {
  return {
    type: CLEAR_FILTER,
    filter,
  };
};

export const clearAllFilter = () => {
  return {
    type: CLEAR_ALL_FILTER,
  };
};

export function updateFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchAllHouses(getState().ui.filters)(dispatch);
  };
}

export function removeFilter(filter) {
  return (dispatch, getState) => {
    dispatch(clearFilter(filter));
    return fetchAllHouses(getState().ui.filters)(dispatch);
  };
}

export function removeAllFilter() {
  return (dispatch, getState) => {
    dispatch(clearAllFilter());
    return fetchAllHouses(getState().ui.filters)(dispatch);
  };
}
