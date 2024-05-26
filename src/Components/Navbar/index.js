import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links font-[Poppins] font-semibold ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/features">Features</a>
        <a href="/contact-us">Contact Us</a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
