import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo">
            Juhi<span className="accent">Mishra</span>
          </a>
          <p className="footer-desc">
            Building digital products, brands, and experiences.
          </p>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {currentYear} Juhi Mishra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
