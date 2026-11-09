import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="error-state" style={{ padding: '6rem 2rem' }}>
      <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>404 - Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 2rem 0', fontSize: '1.1rem' }}>The page you are looking for does not exist or has been moved.</p>
      <button onClick={() => navigate('/')} className="retry-btn" style={{ padding: '0.8rem 2rem' }}>Return to Home</button>
    </div>
  );
}