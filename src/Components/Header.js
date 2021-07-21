import React,{useState} from "react";
import "./Header.css";
import ListIcon from "@material-ui/icons/List";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();

  const[Click,setClick]=useState(false);

  const toAbout = () => {
    history.push("/about");
  };

  const toHome = () => {
    history.push("/");
  };

  const toEvent = () => {
    history.push("/event");
  };

  const toProjects = () => {
    history.push("/projects");
  };

  const changeToogle=()=>{
    setClick(!Click)
  }

  return (
    <div className="header">
      <div className="header__logo">
        <img alt="" src="images/logo.png" />
      </div>
      <div className="header__list">
        <p onClick={toHome}>HOME</p>
        <p onClick={toAbout}>ABOUT</p>
        <p>NOTICES</p>
        <p onClick={toEvent}>EVENTS</p>
        <p onClick={toProjects}>PROJECTS</p>
        <p>STUDENTS CORNER</p>
        <p>PLACEMENTS</p>
        <p>ACADAMICS</p>
        <p>CONTACT</p>
      </div>
      <ListIcon onClick={changeToogle} fontSize="large" className="menu" />

     {Click ? 
      <div className="toggle">
      <p onClick={toHome}>HOME</p>
      <p onClick={toAbout}>ABOUT</p>
      <p>NOTICES</p>
      <p onClick={toEvent}>EVENTS</p>
      <p onClick={toProjects}>PROJECTS</p>
      <p>STUDENTS CORNER</p>
      <p>PLACEMENTS</p>
      <p>ACADAMICS</p>
      <p>CONTACT</p>
    </div> : null}
    </div>
  );
}

export default Footer;
