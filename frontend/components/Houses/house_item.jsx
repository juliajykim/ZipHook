import React from "react";

const HouseItem = (props) => {
  const house = props.house;
  return <div>{house.address}</div>;
};

export default HouseItem;
