import React from 'react'
import backgroundImage from './assest/bg_img.jpg'; // Ensure the path is correct
import './bgimage.css';

const bgimage = () => {
  return (
    <div 
    className="bg-img" 
    style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      height: '100vh', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    }}
  ></div>
  )
}
export default bgimage