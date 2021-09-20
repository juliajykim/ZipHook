export const createSave = (house) => {
  debugger;
  return $.ajax({
    method: "POST",
    url: `api/houses/${house.id}/save`,
    house,
  });
};

export const deleteSave = (house) => {
  return $.ajax({
    method: "DELETE",
    url: `api/houses/${house.id}/unsave`,
  });
};
