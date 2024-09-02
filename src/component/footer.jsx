import React from 'react';
import './footer.css'; // Ensure this CSS file is included

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; Waveline Sports - Michael Phelps Swimming India
        <span className="footer-link">
          <a href="https://www.michaelphelpsswimmingindia.com" target="_blank" rel="noopener noreferrer">
            www.michaelphelpsswimmingindia.com
          </a>
        </span>
      </p>
    </footer>
  );
}

export default Footer;
