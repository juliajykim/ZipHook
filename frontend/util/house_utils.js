export const fetchAllHouses = (houses) => {
  return $.ajax({
    method: "GET",
    url: "api/houses",
  });
};

export const fetchHouse = (house) => {
  return $.ajax({
    method: "GET",
    url: `api/house/${house.id}`,
  });
};
