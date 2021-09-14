import { RECEIVE_ALL_CITIES } from "../actions/cities_actions";

const citiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return action.cities;
    default:
      return state;
  }
};

export default citiesReducer;
