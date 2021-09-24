import React from "react";

const LoadingSpinner = ({ isLoading }) => {
  return isLoading ? (
    <div className="loader-background">
      <div className="loader-child">
        <img src={window.loaderlogoGif} alt="" />
        <h1>Zip! BAM! DANG!! We are building your house 🏡</h1>
        <img src={window.loaderGif} alt="" />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default LoadingSpinner;
