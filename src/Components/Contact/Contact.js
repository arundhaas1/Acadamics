import React from "react";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

function Contact() {
  return (

    <div className="contact">
      <div className="contact__info">
        <h1>CONTACT INFO</h1>
        <div className="numbers">
          <div className="number">
            <PhoneIcon className="ics" fontSize="large" />
            <div className="cons__data">
              <h4>PHONE</h4>
              <p>+91-11-26382314</p>
            </div>
          </div>
          <div className="number">
            <LocationOnIcon className="ics" fontSize="large" />
            <div className="cons__data">
              <h4>LOCATION</h4>
              <p>GCE 110020 - Salem</p>
            </div>
          </div>
          <div className="number">
            <EmailIcon className="ics" fontSize="large" />
            <div className="cons__data">
              <h4>EMAIL</h4>
              <p>principal@gce.edu.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
