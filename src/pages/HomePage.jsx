import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div className="home-hero">
        <div className="hero-badge">🚀 Next-Gen Internship & Opportunity Discovery Platform</div>
        <h1>Accelerate Your Career with SkillBridge</h1>
        <p>
          Say goodbye to scattered spreadsheets, chaotic social media posts, and unverified email chains. 
          Discover verified remote contracts, software engineering roles, and design mentorships instantly.
        </p>
        <div className="hero-actions">
          <Link to="/internships" className="retry-btn" style={{ textDecoration: 'none', padding: '0.9rem 2.2rem' }}>
            Explore Opportunities Now
          </Link>
          <Link to="/about" className="page-btn" style={{ textDecoration: 'none', padding: '0.9rem 2.2rem' }}>
            Learn More About Us
          </Link>
        </div>
      </div>

      <section style={{ margin: '4rem 0 2rem 0', textAlign: 'left' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-0.5px', marginBottom: '0.5px' }}>
            Why Students Choose SkillBridge
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Engineered for university students and early-career tech talent.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Real-Time API Sync</h3>
            <p>Opportunities are continuously fetched and synchronized to guarantee fresh listings and up-to-date contracts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart Domain Filtering</h3>
            <p>Filter instantly across Engineering, Design, Consulting, and Security domains using our optimized category selection.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Local Application Tracking</h3>
            <p>Securely submit applications with client-side validation and track your submission history via local storage.</p>
          </div>
        </div>
      </section>
    </div>
  );
}