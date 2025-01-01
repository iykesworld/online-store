import React from 'react'
import './Home.css'
import bannerone from '../assets/banner1.png'
import bannertwo from '../assets/banner2.png'
import bannerthree from '../assets/banner3.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-image-one">
            <img src={bannerone} alt="" />
        </div>
        <div className="banner-flex-container">
        <div className="banner-image-two">
            <img src={bannertwo} alt="" />
        </div>
        <div className="banner-image-three">
            <img src={bannerthree} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Banner