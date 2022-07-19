import React from 'react'
import FooterOverlay from './FooterOverlay';
import './Footer.css';
import Footer1 from '../images/Footer1.png';
import Footer2 from '../images/Footer2.png';
import Footer3 from '../images/Footer3.png';
import Footer4 from '../images/Footer4.png';

function Footer() {
  return (
    <div className="footer section__padding" id="login">
    <FooterOverlay />
    <div className="footer-links">
      <div className="footer-links_email">
        <img src={Footer1} alt="Footer Photo1" />
        <h1 className="footer-headtext"> Our Email </h1>
        <p> coffee_House@gmail.com </p>
      </div>

      <div className="footer-links_work">
        <img src={Footer2} alt="Footer Photo2" />
        <h1 className="footer-headtext">Working Hours</h1>
        <p> Monday-Friday: 08:00 am - 12:00 am</p>
        <p> Saturday-Sunday: 07:00 am - 11:00 pm</p>
      </div>

      <div className="footer-links_location">
        <img src={Footer3} alt="Footer Photo3" />
        <h1 className="footer-headtext"> Shop Location </h1>
        <p> No:123, Galle Road, Colombo. </p>
      </div>

      <div className="footer-links_contact">
        <img src={Footer4} alt="Footer Photo4" />
        <h1 className="footer-headtext"> Our Phone </h1>
        <p> 011 1526528 </p>
        <p> 071 4566963 / 077 8956245 </p>
      </div>

    </div>

    <div className="footer__copyright">
      <p >2021 Coffee House. All Rights reserved.</p>
    </div>

  </div>
  )
}

export default Footer
