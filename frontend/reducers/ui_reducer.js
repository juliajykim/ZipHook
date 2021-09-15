import { combineReducers } from "redux";
import filtersReducer from "./filters_reducer";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
  modal: modalReducer,
  filters: filtersReducer,
});

export default uiReducer;
