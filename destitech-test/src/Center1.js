import React from "react";
import "./styles/Center1.css";
import centerImage from "./imgs/center-image.png";
;

function Center1() {
  return (
    <div className="Center1 container-fluid m-0">
      <div className="row">
        <img
          src={centerImage}
          alt="center image"
          className="center-image p-0"
        />
      </div>
    </div>
  );
}

export default Center1;
