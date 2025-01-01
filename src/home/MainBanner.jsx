import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className='main-Banner'>
        <p>Special offer</p>
        <h1>UP TO 25% OFF</h1>
      
            <Link to = "/shop" className='hero-link-button' >Browse Collections</Link>
        
    </div>
  )
}

export default MainBanner