import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './assest/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/resulttable" onClick={toggleMobileMenu}>Assessment Result</Link></li>
          <li><Link to="/CandidatesList" onClick={toggleMobileMenu}>Candidates</Link></li>
          <li><Link to="/ModulePage" onClick={toggleMobileMenu}>Modules</Link></li>
          <li><Link to="/franchise" onClick={toggleMobileMenu}>Franchise</Link></li>
        </ul>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
