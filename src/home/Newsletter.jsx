import React from 'react'
import './Home.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>GET 15% OFF YOUR <br />
            FIRST ORDER
        </h1>
        <div className="newsletter-input">
            <input type="text" placeholder='Enter Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter