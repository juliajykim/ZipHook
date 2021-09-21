import React from "react";
import SavedHouses from "./saved_houses";

const ProfilePage = (props) => {
  const houses = useSelector((state) => state.entities.houses);
  const saves = useSelector((state) => {
    return state.session.currentUser.saves;
  });

  return (
    <div>
      <div>for Navs</div>
      <SavedHouses houses={houses} saves={saves} />
    </div>
  );
};

export const ProfilePage;