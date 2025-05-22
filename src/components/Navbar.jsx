import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <NavLink to="/" className="nav-link" end>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/how-i-work" className="nav-link">
          How I Work
        </NavLink>
        <NavLink to="/case-studies" className="nav-link">
          Case Studies
        </NavLink>

        {/* Dark Mode Toggle */}
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
