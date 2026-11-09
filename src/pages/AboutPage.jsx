import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ textAlign: 'left', background: 'var(--bg-card)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>About SkillBridge</h1>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem' }}>
        SkillBridge was conceived to solve a major pain point for university and college students (ages 18–24): navigating scattered spreadsheets, chaotic social media posts, and unverified email chains to find legitimate tech experience.
      </p>
      
      <h2 style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '0.75rem', fontWeight: '700' }}>Our Core Mission</h2>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2rem' }}>
        We provide a fast, accessible, and reliable web frontend where students can seamlessly discover professional opportunities, review detailed expectations, submit secure applications, and track application milestones locally.
      </p>

      <h2 style={{ fontSize: '1.6rem', marginTop: '2.5rem', marginBottom: '0.75rem', fontWeight: '700' }}>Technical Standards & Compliance</h2>
      <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', paddingLeft: '1.25rem' }}>
        <li>Built with React, Vite, and modern CSS architecture.</li>
        <li>Fully compliant with WCAG 2.1 AA accessibility standards (high contrast ratios, keyboard navigation, aria landmarks).</li>
        <li>Optimized for mobile-first user experiences with sub-second production performance scores.</li>
      </ul>
    </div>
  );
}