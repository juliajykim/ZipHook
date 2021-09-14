export const fetchAllHouses = (houses) => {
  return $.ajax({
    method: "GET",
    url: "api/houses",
  });
};

export const fetchHouse = (houseId) => {
  debugger;
  return $.ajax({
    method: "GET",
    url: `api/houses/${houseId}`,
  });
};
