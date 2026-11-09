import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>SkillBridge Explorer</h3>
          <p>Empowering students and modern tech professionals to discover verified remote internships, bridge skill gaps, and accelerate their careers.</p>
        </div>
        <div className="footer-col">
          <h4>Platform Navigation</h4>
          <ul>
            <li><Link to="/">Home Dashboard</Link></li>
            <li><Link to="/internships">Explore Opportunities</Link></li>
            <li><Link to="/about">About Platform</Link></li>
            <li><Link to="/contact">Support & Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Compliance & Architecture</h4>
          <p style={{ fontSize: '0.85rem', color: '#b1b4b9' }}>
            Production-grade React application with WCAG 2.1 AA accessibility compliance and client-side persistence.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 SkillBridge Explorer. All rights reserved. Built with React & Vite.</p>
      </div>
    </footer>
  );
}