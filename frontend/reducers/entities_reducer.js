import { combineReducers } from "redux";
import housesReducer from "./houses_reducer";

const entitiesReducer = combineReducers({
  houses: housesReducer,
});

export default entitiesReducer;