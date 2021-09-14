export const fetchALLCities = () => {
  return $.ajax({
    method: "GET",
    url: "api/cities",
  });
};
