import React from 'react'
import logo from '../../assets/Logo.svg'
import './Footer.css'
import appstore from '../../assets/appstore 1.svg'
import bankcards from '../../assets/bank-cards.svg'
import googleplay from '../../assets/googleplay.svg'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
        <div className="footer-column-0ne">
        <div className="footer-one footerss">
            <img src={logo} alt="logo" />
            <p className='title'>Contact</p>
            <p className="title">Address: <span>No 54B Oslo DR. Maldives United States</span></p>
            <p className="title">Phone: <span>+13409587233 +23490875654</span></p>
            <p className="title">Hours: <span>24/7 Mon - Sun</span></p>
        </div>
        <div className="footer-two footerss">
            <p className="title">Home</p>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms and Condition</p>
            <p>Contact</p>
        </div>
        <div className="footer-three footerss">
        <p className="title">My Account</p>
            <p>Sign In</p>
            <p>View Cart</p>
            <p>My WatchList</p>
            <p>Track My Order</p>
            <p>Help</p>
        </div>
        <div className="footer-four footerss">
        <p className="title">Install</p>
            <p>From App Store or Google Play</p>
            <div className="install">
                <img src={appstore} alt="app store logo" />
                <img src={googleplay} alt="app store logo" />
            </div>
            <p>Secured Payment Gateway</p>
            <img className='bankcards' src={bankcards} alt="" />
        </div>
        </div>
        <div className="footer-five footerss">
            <p>@ {year} Iykes Designs all right reserved</p>
        </div>
    </div>
  )
}

export default Footer