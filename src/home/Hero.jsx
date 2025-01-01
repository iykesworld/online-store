import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <h1>Find Your Perfect Fit - <br />
        Shop Now</h1>
        <p>Discover our new Collection - Free Shipping on all deals</p>
        
            <Link to = "/shop" className='hero-link-button' >Browse Collections</Link>
        
    </div>
  )
}

export default Hero