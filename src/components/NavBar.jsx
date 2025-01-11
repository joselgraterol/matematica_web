// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBookOpen, FaInfoCircle, FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

const NavBar = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => setDarkMode(!darkMode);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar desktop-navbar">
        <NavLink to="/" className="logo">
        <img src="https://imgur.com/DnNZdDc.png" alt="" />
        PNFI
        </NavLink>

        <div className="navbar-links">

          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Inicio</NavLink>
          <NavLink to="/articles" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Articulos</NavLink>
          <NavLink to="/info" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Info</NavLink>
          <button onClick={toggleTheme} className="toggle-button">
            {theme === 'light' ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          </button>
          {/* <button onClick={toggleDarkMode} className="toggle-button">
            {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          </button> */}
        </div>

      </nav>

      {/* Mobile/Tablet Bottom Navbar */}
      <nav className="navbar mobile-navbar">
        <NavLink to="/" className="nav-link">
          <FaHome className="icon" /> Inicio
        </NavLink>
        <NavLink to="/articles" className="nav-link">
          <FaBookOpen className="icon" /> Articulos
        </NavLink>
        <NavLink to="/info" className="nav-link">
          <FaInfoCircle className="icon" /> Info
        </NavLink>
        <button onClick={toggleTheme} className="toggle-button" style={{ color: theme === 'light' ? '#000' : '#fff' }}>
          {theme === 'light' ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          {theme === 'light' ? 'Light' : 'Dark'}
        </button>
        {/* <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
          {darkMode ? 'Light' : 'Dark'}
        </button> */}
      </nav>
    </>
  );
};

export default NavBar;
