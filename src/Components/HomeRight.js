import React, { useState } from "react";
import "./HomeRight.css";
import SearchIcon from "@material-ui/icons/Search";

function HomeRight() {
  const [input, setInput] = useState("");

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const data = `https://www.google.com/search?q=${input}&rlz=1C1ONGR_enIN928IN928&oq=arun&aqs=chrome..69i57j46i67j46i67i433j46i433l4j46i67i175i199j0i433j0i271.1020j0j15&sourceid=chrome&ie=UTF-8`;
  return (
    <div className="homeright">
      <div className="right__input">
        <input onChange={changeInput} placeholder="search..." type="text" />
        <button>
          <SearchIcon fontSize="medium" className="right__icon" />
          <p className="right__p">
            <a href={data}>Google</a>
          </p>
        </button>
      </div>

      <div className="right__news">
        <h3>LATEST NEWS</h3>
        <p>
          <span>⦿</span> Post-matric Scholarship for Students
        </p>
        <p>
          <span>⦿</span> Financial Assistance{" "}
        </p>
        <p>
          <span>⦿</span> PRIME MINISTER'S SCHOLARSHIP
        </p>
        <p>
          <span>⦿</span> FAQ_MOMA
        </p>
        <p>
          <span>⦿</span> CENTRAL SECTOR SCHOLARSHIP
        </p>
        <p>
          <span>⦿</span> Central Armed Police Forces{" "}
        </p>
        <p>
          <span>⦿</span> Invitation for International Science Festival
        </p>
        <p>
          <span>⦿</span> Result For Walk-in-Interview
        </p>
        <p>
          <span>⦿</span> Sessional Exam-Intimation for back paper
        </p>
        <p>
          <span>⦿</span> Notice-POST-MATRIC SCHOLARSHIP
        </p>
        <p>
          <span>⦿</span> Notice-MERIT CUM SCHOLARSHIP
        </p>
      </div>

      <div className="right__archives">
        <h3>ARCHIVES</h3>
        <p>
          <span>👉</span>Febrauary 2017
        </p>
        <p>
          <span>👉</span>January 2017
        </p>
        <p>
          <span>👉</span>November 2018
        </p>
        <p>
          <span>👉</span>June 2021
        </p>
        <p>
          <span>👉</span>May 2020
        </p>
      </div>

      <div className="right__post">
        <h3>RECENT POST</h3>
        <div className="right__1">
          <img
            alt=""
            src="https://vishal2612200.github.io/college-website-design/images/blog/4.jpg"
          />
          <div className="right__2">
            <p className="right__2p">
              4th International Conference on Computers
            </p>
            <p className="right_p">28 September, 2018</p>
          </div>
        </div>

        <div className="right__1">
          <img
            alt=""
            src="https://vishal2612200.github.io/college-website-design/images/blog/5.jpg"
          />
          <div className="right__2">
            <p className="right__2p">Inceptum 2018 </p>
            <p className="right_p">25 September, 2018</p>
          </div>
        </div>

        <div className="right__1">
          <img
            alt=""
            src="https://vishal2612200.github.io/college-website-design/images/blog/6.jpg"
          />
          <div className="right__2">
            <p className="right__2p">
              Workshop(Career guidance and Start to Python)
            </p>
            <p className="right_p">27 September, 2018</p>
          </div>
        </div>

        <div className="right__1">
          <img
            alt=""
            src="https://vishal2612200.github.io/college-website-design/images/blog/7.jpg"
          />
          <div className="right__2">
            <p className="right__2p">Academic Calender</p>
            <p className="right_p">27 September, 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeRight;
