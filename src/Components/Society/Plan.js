import React from "react";
import "./Plan.css";

function Plan ({ title }) {
  return (
    <div className="plan">
      <h2>{title}</h2>
      <p>The best to start</p>
      <h3 className={title === "SPORTS" ? "blue" : "yellow"}>
        Free<span> Entry</span>
      </h3>
      <div className="plan__data">
        <p className="gray">Alphabit</p>
        <p className="white">Robotics</p>
        <p className="gray">Car designing</p>
        <p className="white">Codeattack</p>
        <p className="gray">24/7 Support</p>
      </div>
      <button>LETS START</button>
    </div>
  );
}

export default Plan;
