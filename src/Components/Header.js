import React from "react";
import "./Header.css";
import ListIcon from "@material-ui/icons/List";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();

  const toAbout = () => {
    history.push("/about");
  };
  return (
    <div className="header">
      <div className="header__logo">
        <img alt="" src="images/logo.png" />
      </div>
      <div className="header__list">
        <p>HOME</p>
        <p onClick={toAbout}>ABOUT</p>
        <p>NOTICES</p>
        <p>EVENTS</p>
        <p>PROJECTS</p>
        <p>STUDENTS CORNER</p>
        <p>PLACEMENTS</p>
        <p>ACADAMICS</p>
        <p>CONTACT</p>
      </div>
      <ListIcon fontSize="large" className="menu" />
    </div>
  );
}

export default Footer;
