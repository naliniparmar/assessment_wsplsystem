import React from 'react';
import backgroundImage from './assess_img.jpg'; // Assuming the image is in the same directory as the Header component
import Header from './header.jsx'; // Assuming 'header' is a component
import './home.css';
import { Link } from 'react-router-dom';
import Footer from './footer.jsx'; // Assuming 'footer' is a component

const Login = () => {
  return (
    <div
    className="bg-img"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="login-page">
      <Header /> {/* Render the Header component */}
      <div className="container">
        <div className="info">
          <h1>Login Form</h1>
        </div>
        <div className="form">
          <div className="thumbnail">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" alt="Thumbnail" />
          </div>
          <form className="register-form">
            <input type="text" placeholder="Name" required />
            <input type="password" placeholder="Password" required />
            <input type="email" placeholder="Email address" required />
            <button type="submit">Create</button>
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
          <form className="login-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="message">
              Not registered? <Link to="/Signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>,/</div>
  );
}

export default Login;
