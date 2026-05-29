import React, { useState } from 'react';
import { List, X } from 'react-bootstrap-icons';
import './Navbar.css';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar" >
        <div className="nav-container">
          <div className="logo">Fanamu <span>Ventures</span></div>
          
          
          <div className="mobile-menu" onClick={toggleMenu}>
            {isOpen ? <X size={30} /> : <List size={30} />}
          </div>
          
         
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#products" onClick={closeMenu}>Products</a></li>
            <li><a href="#training" onClick={closeMenu}>Training</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Testimonials</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;