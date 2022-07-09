import React from 'react'
import './Home.css';
import HomeAbout from './HomeAbout/HomeAbout';
import Facilities from './Facilities/Facilities';
import Gallery from './Gallery/Gallery';

function home() {
  return (
    <div>
      <div className='home-container'>
        <div className='home'>
            <h1> Coffee House </h1>
            <p>Start your day with the perfect Coffee. <br/> Drink Coffee to relax your mind a busy schedule.</p>
        </div>
    </div>
    <HomeAbout/>
    <Facilities/>
    <Gallery/>
    </div>
    
  )
}

export default home;
