import React, { useState } from "react";
import "./Header.css";
import ListIcon from "@material-ui/icons/List";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();

  const [Click, setClick] = useState(false);

  const toAbout = () => {
    history.push("/about");
    setClick(false);

  };

  const toHome = () => {
    history.push("/");
    setClick(false);

  };

  const toEvent = () => {
    history.push("/event");
    setClick(false);

  };

  const toProjects = () => {
    history.push("/projects");
    setClick(false);
  };

  const toPlacements = () => {
    history.push("/placements");
    setClick(false);

  };
  const toContact = () => {
    history.push("/contact");
    setClick(false);

  };

  const toSociety = () => {
    history.push("/society");
    setClick(false);

  };

  const changeToogle = () => {
    setClick(!Click);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <img alt="" src="images/logo.png" />
      </div>
      <div className="header__list">
        <p onClick={toHome}>HOME</p>
        <p onClick={toAbout}>ABOUT</p>
        <p>
          <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=547462">
            FEES
          </a>
        </p>
        <p onClick={toEvent}>EVENTS</p>
        <p onClick={toProjects}>PROJECTS</p>
        <p onClick={toSociety}>STUDENTS CORNER</p>
        <p onClick={toPlacements}>PLACEMENTS</p>
        <p onClick={toPlacements}>ACADAMICS</p>
        <p onClick={toContact}>CONTACT</p>
      </div>
      <ListIcon onClick={changeToogle} fontSize="large" className="menu" />

      {Click ? (
        <div className="toggle">
          <p onClick={toHome}>HOME</p>
          <p onClick={toAbout}>ABOUT</p>
          <p>
            <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=547462">
              FEES
            </a>
          </p>
          <p onClick={toEvent}>EVENTS</p>
          <p onClick={toProjects}>PROJECTS</p>
          <p onClick={toSociety}>STUDENTS CORNER</p>
          <p onClick={toPlacements}>PLACEMENTS</p>
          <p onClick={toPlacements}>ACADAMICS</p>
          <p onClick={toContact}>CONTACT</p>
        </div>
      ) : null}
    </div>
  );
}

export default Footer;
