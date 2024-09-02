import React from 'react';
import './ModulePage.css';
import Navbar from './navbar.jsx';

const modules = [
  'PreBeginner',
  'Beginner',
  'Sop + Program',
  'Get Wet',
  'Adv & Intermediate',
  'Personality',
  'Viva',
  'Feedback'
];

const ModulePage = () => {
  return (
    <div className="NavContainer">
      <Navbar />
      <div className="module-page">
        <h1>Modules</h1>
        <div className="modules-container">
          {modules.map((module, index) => (
            <div key={index} className="module-box">
              {module}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}   

export default ModulePage;
