import React from "react";

const LoadingSpinner = ({isLoading}) =>{
    return isLoading ? (
      <div>
        <div style={{width: "100px", border: "3px solid red"}}>this should be spinner !!</div>
      </div>
    ) : (
      <></>
    );
}

export default LoadingSpinner;