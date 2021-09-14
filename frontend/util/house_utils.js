export const fetchAllHouses = (houses) => {
  return $.ajax({
    method: "GET",
    url: "api/houses",
  });
};

export const fetchHouse = (houseId) => {
  return $.ajax({
    method: "GET",
    url: `api/houses/${houseId}`,
  });
};

