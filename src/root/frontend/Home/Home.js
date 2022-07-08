import React from 'react'
import './Home.css';
import HomeAbout from './HomeAbout/HomeAbout';

function home() {
  return (
    <div className='home-container'>
        <div className='home'>
            <h1> Coffee House </h1>
            <p>Start your day with the perfect Coffee. <br/> Drink Coffee to relax your mind a busy schedule.</p>
        </div>
        <HomeAbout/>
      </div>
  )
}

export default home;
