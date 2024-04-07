import React from "react";
import Tenor from "./Tenor.gif";

const Spinner = () => {
  return (
    <div className="text-center my-4">
      <img
        src={Tenor}
        alt="Tenor"
        style={{ height: "200px", width: "200px", borderRadius: "40%" }}
      />
    </div>
  );
};

export default Spinner;
