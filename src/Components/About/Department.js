import React from "react";
import "./Department.css";

function Department() {
  return (
    <div className="department">
      <div className="deps__img">
        <img
          alt=""
          src="https://png.pngitem.com/pimgs/s/378-3788500_-gradient-fade-colorful-colourful-circle-background-circle.png"
        />
      </div>
      <h2>CSE DEPARTMENT</h2>
      <p>
        The department of Computer Science Engineering attracts the best
        students across the country . It offers broad under graduate curriculum
        based on application and theoretical foundation of computers with the
        vision to provide excellence and relevance teaching. It offers intensive
        exposure to latest technologies including commerce, multimedia, data
        mining, advance computer architecture etc.
      </p>
      <div className="dep__butt">
        <button>
          <span>More Details</span>
        </button>
      </div>
    </div>
  );
}

export default Department;
