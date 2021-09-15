import {
  CHANGE_FILTER,
  CLEAR_ALL_FILTER,
  CLEAR_FILTER,
} from "../actions/filter_action";

const defaultFilters = Object.freeze({
  bounds: {},
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, [action.filter]: action.value };
    case CLEAR_FILTER:
      const newState = { ...state };
      delete newState[action.filter];
      return newState;
    case CLEAR_ALL_FILTER:
      return defaultFilters;
    default:
      return defaultFilters;
  }
};

export default filtersReducer;
