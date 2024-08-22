import React from 'react';
import './login.css';  // Assuming the compiled CSS is saved as login.css
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="info">
          <h1>Login Form</h1>
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
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="button">Login</button>
            <p className="message">
              Not registered? <Link to="/Signup">Create an account</Link>
            </p>
          </form>
        </div>
        <video id="video" autoPlay loop poster="polina.jpg">
          <source src="http://andytran.me/A%20peaceful%20nature%20timelapse%20video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Login;
