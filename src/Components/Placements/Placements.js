import React from "react";
import "./Placements.css";

function Placements() {
  return (
    <div className="placement__new">
      <div className="team">
        <h1>MEET OUR TEAM</h1>
        <div className="detail__border">
          <span></span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>
      <div className="team__staff">
            <img alt="" src="https://vishal2612200.github.io/college-website-design/images/team/2.jpg" />
            <div className="staff__data">
            <h3>Holly Vincenmai</h3>
            <p>Graphic Design</p>
            </div>
      </div>
      <div className="team__staff">
            <img alt="" src="https://vishal2612200.github.io/college-website-design/images/team/3.jpg" />
            <div className="staff__data">
            <h3>Ramirez Minita</h3>
            <p>Media Partner</p>
            </div>
      </div>
    </div>
  );
}

export default Placements;
