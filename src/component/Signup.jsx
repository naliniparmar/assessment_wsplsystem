import React from 'react';
import './signup.css';  // Assuming the compiled CSS is saved as signup.css
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="container">
        <div className="wrapper">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Create password" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Confirm password" required />
            </div>
            <div className="policy">
              <input type="checkbox" />
              <h3>I accept all terms & conditions</h3>
            </div>
            <div className="input-box button">
              <input type="submit" value="Register Now" />
            </div>
            <div className="text">
              <h3>Already have an account? <Link to="/login">Login Now</Link></h3>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
