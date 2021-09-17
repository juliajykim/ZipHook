export const fetchAllHouses = (data) => {
  return $.ajax({
    method: "GET",
    url: "api/houses",
    data,
  });
};

export const fetchHouse = (houseId) => {
  return $.ajax({
    method: "GET",
    url: `api/houses/${houseId}`,
  });
};

export const createHouse = (data) => {
  return $.ajax({
    method: "POST",
    url: "api/houses",
    data,
    contentType: false,
    processData: false,
  });
};
