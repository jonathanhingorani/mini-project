import React from 'react';

// component
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* app logo and name */}
        <img src="/logo.png" alt="App Logo" />
        <span>To-Do App</span>
      </div>
    </nav>
  );
};

export default Navbar;