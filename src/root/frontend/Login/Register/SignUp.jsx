import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function SignUp() {
  return (
    <>
    <div className='register'>
      <div className='registerContent'>
        <h2 className="registerTitle">Register</h2>
        <form className='registerForm'>
            <label>Name</label>
            <input type="text" className='registerInput' placeholder="Enter your username..." />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className='registerInput' placeholder="Enter your password..." />
            <button className='registerButton'>Login</button>
        </form>
        <Link
        to='/sign-in'>
        <button className='registerLoginButton'>Login</button>
        </Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SignUp
