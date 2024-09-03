import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './assest/bg_img.jpg'; // Ensure the path is correct
import './home.css';
import Navbar from './navbar.jsx'

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  return (<div className='NavContainer'><Navbar/>
    <div 
      className="bg-img" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        height: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
  
      <div className="login-page">
        <div className="container">
          <div className="info">
            {/* <h1>{isRegistering ? 'Register Form' : 'LFormogin '}</h1> */}
          </div>
          <div className="form">
            <div className="thumbnail">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" alt="Thumbnail" />
            </div>
            {isRegistering ? (
              <form className="register-form">
                <input type="text" placeholder="name" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button type="button">Create</button>
                <p className="message">
                  Already registered? <span onClick={toggleForm}>Sign In</span>
                </p>
              </form>
            ) : (
              <form className="login-form">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                {/* <button type="button">Login</button> */}
                <p align='center' ><Link to="/MarksInput">Login</Link></p>
                <p className="message">
                  Not registered? <p><Link to="/Signup">Create Account</Link></p>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>  </div>
  );
}

export default Login;
