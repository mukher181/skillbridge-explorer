import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ appCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="nav-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Skill<span>Bridge</span>
        </Link>
      </div>

      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/internships" onClick={() => setIsOpen(false)}>Internships</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        <NavLink to="/my-applications" onClick={() => setIsOpen(false)} className="badge-link">
          My Applications <span className="nav-counter">{appCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}