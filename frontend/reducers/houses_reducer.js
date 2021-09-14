import { RECEIVE_ALL_HOUSES, RECEIVE_HOUSE } from "../actions/houses_actions";

const housesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_HOUSES:
      return action.houses;
    case RECEIVE_HOUSE:
      return { ...state, [action.house.id]: action.house };
    default:
      return state;
  }
};

export default housesReducer;
