import React from "react";
import "./Societies.css";
import LaptopIcon from "@material-ui/icons/Laptop";

function Societies({text}) {
  return (
    <div className="societies ">
      <LaptopIcon className="societies__icon" fontSize="large" />
      <h2>{text}</h2>
      <p className="societies__p">
        Lorem ipsum dolor sit amet, consectetur scing elit, sed do eiusmod,
        tempor incididunt labore et dolore magna aliqua. Ut enim ad minim ut
        veniam, quis nostrud exercitation ullamco aliquip ex ea commodo
        consequat.
      </p>
    </div>
  );
}

export default Societies;
