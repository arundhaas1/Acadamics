import React from 'react'
import './About.css'
import Header from '../Header'
import AboutData from './AboutData'
import AboutDetails from './AboutDetails'

function About() {
    return (
        <div className="about">
            <Header />
            <AboutData />
            <AboutDetails />
        </div>
    )
}

export default About
