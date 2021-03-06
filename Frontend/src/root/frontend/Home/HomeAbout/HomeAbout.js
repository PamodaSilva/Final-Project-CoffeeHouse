import React from 'react'
import Icon from '../../images/Icon.png';
import CoffeeHouse from '../../images/CoffeeHouse.jpg';
import HomeMenu from '../../images/HomeMenu.jpg';
import { Link } from 'react-router-dom';
import './HomeAbout.css';

function HomeAbout() {

  return (
    <div className="aboutUs" id="about">
    
      <div className="aboutUs-content">
        <div className="aboutUs-content_about">
          <img src= {CoffeeHouse} alt='Coffee House' className='image1'/>
          <h1> Who we are </h1>
          <p> <b>Coffee House </b>is a place where you can get delicious high quality 
                  coffee drinks at affordable prices. </p>
        <Link to='/AboutUs'>
          <button type="button" className="custom__button" > More Details </button>
        </Link>
      </div>

      <div className="aboutUs-content_coffee">
        <img src={Icon} alt="about_coffee" />
      </div>

      <div className="aboutUs-content_menu">
        <h1> Our Menu </h1>
        <p> A Cup Of Coffee Can Complete Your Day. </p>
        <Link to='/Menu'>
          <button type="button" className="custom__button"> See Our Menu </button>
        </Link>
        <img src= {HomeMenu} alt='Coffee House' className='image2'/>
      </div>
    </div>
  </div>
  )
}

export default HomeAbout
