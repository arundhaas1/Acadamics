import React from "react";
import "./Next.css";
import Eventdata from './Eventdata'

function Next() {
  return (
    <div className="next">
      <h1>Our Next Projects</h1>
      <p>
        Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui.
        Nullam tellus risus, pellentesque at facilisis et, scelerisque sit amet
        metus. Duis vel semper turpis, ac tempus libero. Maecenas id ultrices
        risus. Aenean nec ornare ipsum, lacinia.
      </p>
      <div className="next__events">
        <h1>Events of GCE</h1>

        <div className="next__event">
            <Eventdata image={"https://vishal2612200.github.io/college-website-design/agenda/images/event-slider-2.jpg"} name={"Broadway Hit"} day={"SATURDAY"} date={"Jan 27, 2018"}/>
            <Eventdata image={"https://vishal2612200.github.io/college-website-design/agenda/images/event-slider-3.jpg"} name={"U2 Concert"} day={"MONDAY"} date={"Feb 03, 2018"} />
            <Eventdata image={"https://vishal2612200.github.io/college-website-design/agenda/images/event-slider-4.jpg"} name={"Gallery Exhibition"} day={"WEDNESDAY"} date={"July 24, 2018"} />
            <Eventdata image={"https://vishal2612200.github.io/college-website-design/agenda/images/event-slider-5.jpg"} name={"Art Gallery"} day={"FRIDAY"} date={"Jan 17, 2018"} />
            <Eventdata image={"https://vishal2612200.github.io/college-website-design/agenda/images/event-slider-6.jpg"} name={"Music Concert"} day={"SATURDAY"} date={"March 08, 2018"} />
            <Eventdata  image={"https://vishal2612200.github.io/college-website-design/agenda/images/event-slider-1.jpg"} name={"DFT Festival"} day={"SUNDAY"} date={"May 31, 2018"} />
        </div>
        <h1 className="nextdat animate__animated animate__fadeInUp">ENJOY THE WORLD IS YOURS</h1>
      </div>
    </div>
  );
}

export default Next;
