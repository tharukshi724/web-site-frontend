import React, { useState } from 'react';
import "../Css/Navbar.css";
import { Link } from 'react-router-dom';
import logo from "../images/logo2.jpg"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-img" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item"><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li className="navbar-item"><Link to="/PartnershipOpportunities" onClick={toggleMenu}>Opportunities</Link></li>
          <li className="navbar-item"><Link to="/Proposals" onClick={toggleMenu}>About Us</Link></li>
          <li className="navbar-item"><Link to="/JobPostForm" onClick={toggleMenu}>Proposals</Link></li>
          <li className="navbar-item"><button className="navbar-btn"><Link to="/Login" onClick={toggleMenu}>SignIn</Link></button></li>
          <li className="navbar-item"><button className="navbar-btn"><Link to="/Signup" onClick={toggleMenu}>SignUp</Link></button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
