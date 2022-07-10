import React from 'react'
import './AboutUs.css';
import About from '../images/About.jpg'
import A1 from '../images/A1.jpg'
import A2 from '../images/A2.jpg'
import A3 from '../images/A3.jpg'
import A4 from '../images/A4.jpg'
import FooterImage from '../images/AboutFooter.png'
import Team from './team';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <div className='aboutUs'>
      <div className='about-main-image' >
        <img src={About} alt="About"/>
      </div>
      <h1 className='About-title'> About Us </h1>
      <div className = 'AboutUsContent'>
        <p>
          Coffee House is a shop that provides high quality cup of coffee for Sri Lankans.
        </p> <br/>
        <p>
          Coffee House is a startup which was created to cater to the true authentic coffee shop experience, 
          by emphasizing on the high-quality coffee, which we have not compromised whatever the situation we faced. 
          The true reason for the success of Coffee House is its work force, some employees being a part of 
          the Coffee House team since its inception, we at Coffee House appreciate 
          all employees starting from the security.
        </p> <br/>
        <p>    
          With our humble beginnings at Coffee House Colombo, throughout these three years Coffee House has 
          grown strength to strength expanding our branches to Bambalapitiya, Nawala and Nugegoda with 
          ideas of expanding even further to ensure that a good quality cup of coffee is just within your reach.
        </p> <br/>
      </div>
      <div className='aboutUsImage'>
        <img src={A1} alt="About01"/>
        <img src={A2} alt="About02"/>
        <img src={A3} alt="About03"/>
        <img src={A4} alt="About04"/>
      </div>
      <div className='aboutUsTeam'>
        <h2> Our Team </h2>
        <div className='aboutUsTeamImage'>
          <Team/>
        </div>
      </div>
      <div className = 'aboutFooterImage'>
        <img src={FooterImage} alt="BottomImage"/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
