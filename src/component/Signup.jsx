import React from 'react';
import './signup.css';  // Assuming the compiled CSS is saved as signup.css
import { Link } from 'react-router-dom';
import backgroundImage from './assest/bg_img.jpg'; // Ensure the path is correct

const Signup = () => {

    return (
      <div 
        className="bg-img" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          height: '100vh', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="signup-page">
          <div className="container">
            <div className="info">
              <h1>SignUp Form</h1>
            </div>
            <div className="form">
              <div className="thumbnail">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" alt="Thumbnail" />
              </div>
              <form className="register-form">
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button type="button">Create</button>
                <div className="input-box">
                    <input type="text" placeholder="Enter your name" required />
                </div>
              </form>
              <form className="signup-form">
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
                  <h3>Already have an account?</h3>
                  <p><Link to="/login">Login Now</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Signup;
