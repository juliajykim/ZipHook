import * as HousesAPIUtil from "../util/house_utils";

export const RECEIVE_ALL_HOUSES = "RECEIVE_ALL_HOUSES";
export const RECEIVE_HOUSE = "RECEIVE_HOUSE";

export const receiveAllHouses = (houses) => {
  return {
    type: RECEIVE_ALL_HOUSES,
    houses,
  };
};

export const receiveHouse = (house) => {
  return {
    type: RECEIVE_HOUSE,
    house,
  };
};

export const fetchAllHouses = () => {
  return (dispatch) => {
    HousesAPIUtil.fetchAllHouses().then((houses) => {
      return dispatch(receiveAllHouses(houses));
    });
  };
};
