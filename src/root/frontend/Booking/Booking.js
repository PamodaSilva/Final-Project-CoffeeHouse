import React from 'react'
import './Booking.css';
import Footer from '../components/Footer';
import book01 from '../images/book1.jpg'
import book02 from '../images/book2.jpg'
import { Button } from '../components/Button';

function Booking() {

  return (
    <div className='main-booking'>
      <div className='bookingContent'>
        <div className='bookingImage'>
          <img src={book01} alt="Booking-Pic01" className='Booking01'/>
          <img src={book02} alt="Booking-Pic02" className='Booking02'/>
        </div>
        <div className='bookingForm'>
          <h3> Book Your Table </h3>
          <form className='Booking'>
            <input type='text' placeholder='Full Name'/>
            <input type='Email' placeholder='Your Email Address'/>
            <input type='text' placeholder='Your Telephone Number'/>
            <input type='text' placeholder='Date'/>
            <input type='text' placeholder='Time'/>
            <input type='text' placeholder='Number of Guest'/>
              <Button className='btns' buttonStyle='btn--inline' buttonSize='btn--medium'>
                  Book A Table
              </Button>
          </form>
        </div>
      </div>
      <div className='Note'>
        <p className='noteH'> *Note :-</p>
        <p> Registration is not mandatory. You can also book the table as a guest. </p>
      </div>
      <Footer/>
    </div>
  )
}

export default Booking
