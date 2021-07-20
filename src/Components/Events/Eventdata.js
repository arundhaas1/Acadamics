import React from 'react'
import './Eventdata.css'

function Eventdata({image,name,day,date}) {
    return (
        <div className="eventdata">
            <img alt="" src={image}/>
            <h2>{name}</h2>
            <h4>{day}<span>{date}</span></h4>
        </div>
    )
}

export default Eventdata
