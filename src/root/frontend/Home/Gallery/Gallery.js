/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Gallery.css'
import Pic1 from '../../images/Pic1.jpg'
import Pic2 from '../../images/Pic2.jpg'
import Pic3 from '../../images/Pic3.jpg'
import Pic4 from '../../images/Pic4.jpg'
import Pic5 from '../../images/Pic5.jpg'
import Pic6 from '../../images/Pic6.jpg'
import Pic7 from '../../images/Pic7.jpg'
import Pic8 from '../../images/Pic8.jpg'

function Gallery() {
  return (
    <div>
      <h1 className="title1"> Our Gallery </h1>
      <div className='image-gallery'>
        <img src={Pic1} alt="Picture 01"/>
        <img src={Pic2} alt="Picture 02"/>
        <img src={Pic3} alt="Picture 03"/>
        <img src={Pic4} alt="Picture 04"/>
        <img src={Pic5} alt="Picture 05"/>
        <img src={Pic6} alt="Picture 06"/>
        <img src={Pic7} alt="Picture 07"/>
        <img src={Pic8} alt="Picture 08"/>
      </div>
    </div>
  )
}

export default Gallery
