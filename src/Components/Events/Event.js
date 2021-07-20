import React from "react";
import "./Event.css";
import { useHistory } from "react-router-dom";
import Banners from "./Banners";
import Next from "./Next";
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Event() {
  const history = useHistory();
  const toHome = () => {
    history.push("/");
  };
  return (
    <div className="event">
      <div className="event__body">
        <div className="event__bodyimg">
          <img
            alt=""
            src="https://vishal2612200.github.io/college-website-design/agenda/images/logo-2.png"
          />
        </div>
        <div className="event__bodydata">
          <h1>What is Agenda and why choose our festival?</h1>
          <p>
            We provide full support with good backrecord.We provide chance to
            every student to discover unique capabilites in it in our festival.
          </p>
          <div className="event__bodybutt">
            <button className="event__1">Read More</button>
            <button className="event__2">Register Now</button>
            <button className="event__3" onClick={toHome}>
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="event__banners">
        <Banners />
      </div>
      <div className="event__next">
        <Next />
      </div>
    </div>
  );
}

export default Event;
