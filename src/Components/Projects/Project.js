import React from "react";
import "./Project.css";

function Project({ image }) {
  return (
    <div className="project">
      <img className="project1" alt="" src={image} />
      <div className="project2 ">
        <div className="project__border">
          <div className="project__title">
            <h2 className="animate__animated animate__bounceInDown">HOME PAGE</h2>
            <p className="animate__animated animate__bounceInUp">Source Code / For Output</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
