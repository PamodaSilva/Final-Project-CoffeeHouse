import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function SignUp() {
  return (
    <>
    <div className='register'>
      <div className='registerContent'>
        <h2 className="registerTitle"> Sign Up </h2>
        <form className='registerForm'>
            <label>Name</label>
            <input type="text" className='registerInput' placeholder="Enter your Name..." />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder="Enter your password..." />
            <button className='registerButton'>Login</button>
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
