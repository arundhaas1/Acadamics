import React from "react";
import "./Sponser.css";

function Sponser() {
  return (
    <div className="sponser">
      <h1>SEE OUR PLACEMENTS</h1>
      <div className="detail__border">
        <span></span>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type.
      </p>
      <div className="sponser__data">
        <img
          alt=""
          src="https://raw.githubusercontent.com/vishal2612200/college-website-design/master/images/logo/goorej.jpg"
        />
        <img
          alt=""
          src="https://raw.githubusercontent.com/vishal2612200/college-website-design/master/images/logo/infogain.jpg"
        />
        <img
          alt=""
          src="https://raw.githubusercontent.com/vishal2612200/college-website-design/master/images/logo/infosys.jpg"
        />
        <img
          alt=""
          src="https://raw.githubusercontent.com/vishal2612200/college-website-design/master/images/logo/maruti.jpg"
        />
        <img
          alt=""
          src="https://raw.githubusercontent.com/vishal2612200/college-website-design/master/images/logo/microsoft.jpg"
        />
      </div>
    </div>
  );
}

export default Sponser;
