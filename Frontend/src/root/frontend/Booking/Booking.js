import React, { useState } from 'react'
import './Booking.css';
import Footer from '../components/Footer';
import book01 from '../images/book1.jpg'
import book02 from '../images/book2.jpg'
import { Button } from '../components/Button';
import axios from "axios";
import { useQuery } from "react-query";

function Booking() {

  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [TPNumber, setTPNumber] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [NumberOfGuest, setNumberOfGuest] = useState("");
  
  const registerRequest = async () => {
    return await axios.post("http://localhost:4000/users/register", {
      FullName,
      Email,
      TPNumber,
      Date,
      Time,
      NumberOfGuest
    });
  };

  const onError = (error) => {
    alert(error.response.data.message);
  };

  const { refetch } = useQuery("Booking", registerRequest, {
    enabled: false,
    onError,
  });

  const Booking = () => {
    // validate Booking
    if (!FullName) {
      alert("Full Name Required");
    }
    if (!Email) {
      alert("Email Required");
    }
    if (!TPNumber) {
      alert("Telephone Number Required");
    }
    if (!Date) {
      alert("Date Required");
    }
    if (!Time) {
      alert("Time Required");
    }
    if (!NumberOfGuest) {
      alert("Number of Guest Required");
    }
    refetch();
  };

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
            <input 
              type='text' 
              placeholder='Full Name' 
              className='FullName'
              value={FullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}/>
            <input 
              type='Email' 
              placeholder='Your Email Address' 
              className='Email'
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}/>
            <input 
              type='text' 
              placeholder='Your Telephone Number' 
              className='TPNumber'
              value={TPNumber}
              onChange={(e) => {
                setTPNumber(e.target.value);
              }}/>
            <input 
              type='text' 
              placeholder='Date' 
              className='Date'
              value={Date}
              onChange={(e) => {
                setDate(e.target.value);
              }}/>
            <input 
              type='text' 
              placeholder='Time' 
              className='Time'
              value={Time}
              onChange={(e) => {
                setTime(e.target.value);
              }}/>
            <input 
              type='text' 
              placeholder='Number of Guest' 
              className='NumberOfGuest'
              value={NumberOfGuest}
              onChange={(e) => {
                setNumberOfGuest(e.target.value);
              }}/>
              <Button 
                className='btns' 
                buttonStyle='btn--inline' 
                buttonSize='btn--medium'
                onClick={(e) => {
                  e.preventDefault();
                  Booking();
                }}>
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
