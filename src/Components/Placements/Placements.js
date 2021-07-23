import React from "react";
import "./Placements.css";
import Sponser from "./Sponser";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

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
      <div className="staffs">
        <div className="staff__img">
          <div className="team__staff">
            <img
              alt=""
              src="https://vishal2612200.github.io/college-website-design/images/team/2.jpg"
            />
          </div>
          <div className="s">
            <div className="staff__data">
              <h3>Holly Vincenmai</h3>
              <p>Graphic Design</p>
            </div>
            <div className="staff__dataopacity">
              <FacebookIcon className="staff__iconf" />
              <WhatsAppIcon className="staff__iconw" />
              <GitHubIcon className="staff__icong" />
              <InstagramIcon className="staff__iconi" />
            </div>
          </div>
        </div>
        <div className="staff__img">
          <div className="team__staff">
            <img
              alt=""
              src="https://vishal2612200.github.io/college-website-design/images/team/3.jpg"
            />
          </div>
          <div className="s">
            <div className="staff__data">
              <h3>Holly Vincenmai</h3>
              <p>Graphic Design</p>
            </div>
            <div className="staff__dataopacity">
              <FacebookIcon className="staff__iconf" />
              <WhatsAppIcon className="staff__iconw" />
              <GitHubIcon className="staff__icong" />
              <InstagramIcon className="staff__iconi" />
            </div>
          </div>
        </div>
      </div>
      <Sponser />
    </div>
  );
}

export default Placements;
