import React from "react"
import image1 from '../../images/F1.png'
import image2 from '../../images/F2.png'
import image3 from '../../images/F3.png'
import image4 from '../../images/F4.png'

function FCard() {
  return (
    <>
      <div className='content grid5 mtop'>
          <div className='box' >
            <img src={image1} alt='Image01' />
            <h3> Varieties of Coffee </h3>
            <label> At Coffee house you can find lots of tasty coffee flavors. </label>
          </div>
          <div className='box' >
            <img src={image2} alt='Image02' />
            <h3> Coffee Beans </h3>
            <label> Enjoy the aroma of selected coffee beans available at our shop. </label>
          </div>
          <div className='box' >
            <img src={image3} alt='Image03' />
            <h3> Breakfast and Sweets </h3>
            <label> Have breakfast at the coffee House. </label>
          </div>
          <div className='box' >
            <img src={image4} alt='Image04' />
            <h3> Ready to go Coffee </h3>
            <label> Stay refreshed throughout the day. </label>
          </div>
      </div>
    </>
  )
}

export default FCard
