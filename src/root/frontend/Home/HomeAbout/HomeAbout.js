import React from 'react'
import Icon from '../../images/Icon.png';
import CoffeeHouse from '../../images/CoffeeHouse.jpg';
import HomeMenu from '../../images/HomeMenu.jpg';
import './HomeAbout.css';


function HomeAbout() {

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
    
      <div className="app__aboutus-content flex__center">
            
        <div className="app__aboutus-content_about">
          <img src= {CoffeeHouse} alt='Coffee House' className='image1'/>
          <h1> Who we are </h1>
          <p> <b>Coffee House </b>is a place where you can get delicious high quality 
                  coffee drinks at affordable prices. </p>
        <button type="button" className="custom__button" 
        > More Details </button>
      </div>

      <div className="app__aboutus-content_coffee flex__center">
        <img src={Icon} alt="about_coffee" />
      </div>

      <div className="app__aboutus-content_menu">
        <h1> Our Menu </h1>
        <p> A Cup Of Coffee Can Complete Your Day. </p>
        <button type="button" className="custom__button"> See Our Menu </button>
        <img src= {HomeMenu} alt='Coffee House' className='image2'/>
      </div>
    </div>
  </div>
  )
}

export default HomeAbout
