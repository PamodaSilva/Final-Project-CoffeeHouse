import React, { useState } from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function SignIn() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const Login = () => {
    if (!Email) {
      alert("Email Required");
    }
    if (!Password) {
      alert("Password Required");
    }
  };

  return (
    <>
    <div className='signIn'>
      <div className='signInContent'> 
      <h2 className="signInTitle"> Sign In </h2>
      <form className='signInForm'>
          <label>Email</label>
          <input 
            type="text" 
            className='signInInput' 
            placeholder="Enter your email" 
            value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}/>

          <label>Password</label>
          <input 
            type="password" 
            className='signInInput' 
            placeholder="Enter your password" 
            value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}/>

          <button 
          className='signInButton'
          onClick={(e) => {
            e.preventDefault();
            Login();
          }}>  Login    </button>

          <label> Don't have an Account ? </label>
          <Link to='/sign-up'>
            <button className='signInRegisterButton'>Register</button>
          </Link>
      </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignIn
