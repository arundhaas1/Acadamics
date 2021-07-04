import React from 'react'
import './Home.css'
import Header from './Header'
import Banner from './Banner'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'


function Home() {
    return (
        <div className="home">
           <Header />
           <Banner />
           <div className='leftright'>
               <HomeLeft />
               <HomeRight />
           </div>
        </div>
    )
}

export default Home
