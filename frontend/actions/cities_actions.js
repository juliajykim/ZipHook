import * as CitiesAPIUtil from "../util/city_utils";

export const RECEIVE_ALL_CITIES = "RECEIVE_ALL_CITIES";

export const receiveAllCities = (cities) => {
  return {
    type: RECEIVE_ALL_CITIES,
    cities,
  };
};

export const fetchAllCities = () => {
  return (dispatch) => {
    CitiesAPIUtil.fetchALLCities().then((cities) => {
      return dispatch(receiveAllCities(cities));
    });
  };
};
