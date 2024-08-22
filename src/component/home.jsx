import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './assest/bg_img.jpg'; // Ensure the path is correct
import './home.css';

const Login = () => {
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
    </div>
  );
}
export default Login;

