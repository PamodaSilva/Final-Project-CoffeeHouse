import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import axios from "axios";
import { useQuery } from "react-query";
import Footer from '../../components/Footer';

function SignUp() {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  
  const registerRequest = async () => {
    return await axios.post("http://localhost:3000/", {
      Name,
      Email,
      Password,
    });
  };

  const onError = (error) => {
    alert(error.response.data.message);
  };

  const { refetch } = useQuery("Register", registerRequest, {
    enabled: false,
    onError,
  });

  const Register = () => {
    if (!Name) {
      alert("Name Required");
    }
    if (!Email) {
      alert("Email Required");
    }
    if (!Password) {
      alert("Password Required");
    }
    refetch();
  };

  return (
    <>
    <div className='register'>
      <div className='registerContent'>
        <h2 className="registerTitle"> Sign Up </h2>
        <form className='registerForm'>
            <label>Name</label>
            <input 
              type="text" 
              className='registerInput' 
              placeholder="Enter your Name..."
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}/>
            <label>Email</label>
            <input 
              type="text" 
              className='registerInput' 
              placeholder="Enter your Email..." 
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}/>
            <label>Password</label>
            <input 
              type="password" 
              className='registerInput' 
              placeholder="Enter your Password..." 
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            <button 
              className='registerButton'
              onClick={(e) => {
                e.preventDefault();
                Register();
              }}>
                Register
            </button>
            <label> Do have an Account ? </label>
            <Link to='/sign-in'>
              <button className='registerLoginButton'> Login </button>
            </Link>
        </form>
        
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp
