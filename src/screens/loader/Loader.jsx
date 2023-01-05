import React from "react";
import loader from "../../assets/loader.gif";

export const Loader = () => {
  return (
    <div>
      <div className="text-center">
        <img src={loader} alt="" />
      </div>
    </div>
  );
};
