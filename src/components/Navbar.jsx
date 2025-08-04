import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/Navbar.scss'; // Assuming this is the correct path

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar ${scrolled ? 'scrolled' : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>HOME</NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>ABOUT</NavLink>
        <NavLink to="/research" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>RESEARCH</NavLink>
        <NavLink to="/learning" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>LEARNING</NavLink>
        <NavLink to="/project" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>PROJECT</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;