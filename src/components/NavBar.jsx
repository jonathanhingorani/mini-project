import React from 'react';
import logo from '../assets/pencil.jpeg';
import hamburger from '../assets/Hamburger.jpg';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} style={{ height: "40px" }} alt="Logo" />
      </div>
      <div className="hamburger-icon" onClick={toggleSidebar}>
        <img src={hamburger} style={{ height: "40px" }} alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;