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

export const fetchAllHouses = (filters) => {
  return (dispatch) => {
    HousesAPIUtil.fetchAllHouses(filters).then((houses) => {
      return dispatch(receiveAllHouses(houses));
    });
  };
};

export const fetchHouse = (houseId) => {
  return (dispatch) => {
    HousesAPIUtil.fetchHouse(houseId).then((house) => {
      return dispatch(receiveHouse(house));
    });
  };
};

export const addNewHouse = (formData) => {
  debugger;
  return (dispatch) => {
    HousesAPIUtil.createHouse(formData).then((house) => {
      return dispatch(receiveHouse(house));
    });
  };
};
