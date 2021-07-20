import React from "react";
import "./Banners.css";

function Banners() {
  return (
    <div className="banners">
      <div className="banner1">
        <div className="image__1">
          <img className="events1" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/inaayat.jpeg" />
          <img className="events2" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/check-july.png" />
        </div>
        <div className="image__2">
          <img alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/2.jpg" />
        </div>
        <div className="image__3">
          <img className="events3" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/3.jpg" />
          <img className="events4" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/summer-festivals.jpg" />
        </div>
      </div>
      <div className="banner2">
        <div className="image__4">
          <img alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/90.jpg" />
        </div>
        <div className="image__5">
          <img className="events5" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/aarambh.jpeg" />
          <img className="events6" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/autumn.jpg" />
        </div>
        <div className="image__6">
          <img className="events7" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/smoke.jpg" />
          <img className="events8" alt="" src="https://vishal2612200.github.io/college-website-design/agenda/images/summer-festival.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Banners;
