import React from 'react'
import './team.css';
import team1 from '../images/team1.jpg'
import team2 from '../images/team2.jpg'
import team3 from '../images/team3.jpg'
import team4 from '../images/team4.jpg'
import team5 from '../images/team5.jpg'
import team6 from '../images/team6.jpg'
import team7 from '../images/team7.jpg'

function team() {
  return (
    <div className='teamMain'>

      <div className='set01'>
        <div className='TImage1'>
            <img src={team1} alt="team01"/>
            <p> Devon Albert (Manager) </p>
        </div>
        <div className='TImage2'>
            <img src={team2} alt="team02"/>
            <p> Mishel Silva (Work on Calling Center) </p>
        </div>
        <div className='TImage3'>
            <img src={team3} alt="team03"/>
            <p> Zoya Grace (Work on Calling Center) </p>
        </div>
      </div>

      <div className='set02'>
        <div className='TImage4'>
            <img src={team4} alt="team04"/>
            <p> Joseph Smith (Coffee Maker and waiter) </p>
        </div>
        <div className='TImage5'>
            <img src={team5} alt="team05"/>
            <p> James Silva (Coffee Maker and waiter) </p>
        </div>
        <div className='TImage6'>
            <img src={team6} alt="team06"/>
            <p> Emily Rose (Waiter and Coffee Maker) </p>
        </div>
        <div className='TImage7'>
            <img src={team7} alt="team07"/>
            <p> Jack (Waiter) </p>
        </div>
      </div>
    </div>
  )
}

export default team
