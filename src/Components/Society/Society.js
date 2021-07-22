import React from "react";
import "./Society.css";
import Societies from './Societies'

function Society() {
  return (
    <div className="society">
      <h1>OUR SOCIETIES</h1>
      <div className="detail__border">
        <span></span>
      </div>
      <h5>
        Societies are that platform which help you to improve yourself to reach
        height in your career at unique level.They make common student stand out
        of mob to be differnt student from other
      </h5>
      <p>
        Join Societies to know about your interest other than studies also.
      </p>
      <div className="socs">
      <div className="society__grid">
        <Societies />
        <Societies />
        <Societies />
        <Societies />
        <Societies />
        <Societies />
      </div>
      </div>
    </div>
  );
}

export default Society;
