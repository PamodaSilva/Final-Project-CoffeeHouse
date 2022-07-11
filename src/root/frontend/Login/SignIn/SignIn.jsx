import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function SignIn() {
  return (
    <>
    <div className='signIn'>
      <div className='signInContent'> 
      <h2 className="signInTitle"> Sign In </h2>
      <form className='signInForm'>
          <label>Email</label>
          <input type="text" className='signInInput' placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" className='signInInput' placeholder="Enter your password" />
          <button className='signInButton'>Login</button>
      </form>
      </div>
      <Link
        to='/sign-up'>
          <button className='signInRegisterButton'>Register</button>
        </Link>
    </div>
    <Footer/>
    </>
  )
}

export default SignIn
