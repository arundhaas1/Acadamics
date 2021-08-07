import React from "react";
import "./Projects.css";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects">
      <h1>OUR AWESOME PROJECTS</h1>
      <div className="detail__border">
        <span></span>
      </div>
      <h5>
        Every year lots of project are developed but don,t get chance to publish
        on their college platform . Here This page is totaly deicated to that
        students projects.
      </h5>
      <p>Few of them are shown below </p>
      <div className="projects__pro">
        <Project image={"https://arundhaas1.netlify.app/assets/Whatsapp.3829d4dd52a8fc0128a56244d0c46b18.png"}/>
        <Project image={"https://arundhaas1.netlify.app/assets/amazon2.32aa4762b3fcea0a1e142ebde1fd9e00.png"}/>
        <Project image={"https://arundhaas1.netlify.app/assets/Netflix.3439282b685a69b08a955e79dd66c512.png"} />
        <Project image={"https://vishal2612200.github.io/college-website-design/images/project/homepage.jpg"} />
        <Project image={"https://arundhaas1.netlify.app/assets/Messenger.26f3f3fdbee968d8e4f546ad07befa47.png"} />
        <Project image={"https://arundhaas1.netlify.app/assets/Disney.8b0c428a59d97c700130145887eed726.png"} />
        <Project image={"https://arundhaas1.netlify.app/assets/spotify2%20(2).f5691aaced2be37a36f787022ee19b38.png"} />
        <Project image={"https://vishal2612200.github.io/college-website-design/images/project/priyaart.jpg"} />
        <Project image={"https://vishal2612200.github.io/college-website-design/images/project/todolist.png"} />
      </div>
    </div>
  );
}

export default Projects;
