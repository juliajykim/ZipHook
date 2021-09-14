import { combineReducers } from "redux";
import citiesReducer from "./cities_reducer";
import housesReducer from "./houses_reducer";

const entitiesReducer = combineReducers({
  houses: housesReducer,
});

export default entitiesReducer;
