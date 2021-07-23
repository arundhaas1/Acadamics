import React from 'react'
import Society from './Society'
import Plan from './Plan'
import './Students.css'

function Students() {
    return (
        <div className="students">
            <Society />
            <div className="students__plan">
                <Plan title={"TECHNICAL"} />
                <Plan title={"SPORTS"} />
                <Plan title={"EXTRACURRICULAR"} />
            </div>
                
        </div>
    )
}

export default Students
