import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function DetailPage({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const opportunity = items.find(i => i.id === id);

  if (!opportunity) {
    return (
      <div className="error-state">
        <h2>Opportunity Not Found</h2>
        <p>The requested internship or contract listing does not exist or has expired.</p>
        <button onClick={() => navigate('/')} className="retry-btn">Back to Browse</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'left', background: 'var(--bg-card)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
      <button onClick={() => navigate(-1)} className="page-btn" style={{ marginBottom: '1.5rem' }}>← Back</button>
      <div className="card-top" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
        <span className="badge">{opportunity.category}</span>
        <span className="location">{opportunity.location}</span>
      </div>
      <h1 style={{ fontSize: '2.4rem', margin: '0.5rem 0', fontWeight: '800' }}>{opportunity.title}</h1>
      <p className="company" style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>{opportunity.company}</p>
      
      <div style={{ marginBottom: '2.5rem', lineHeight: '1.8' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Role Overview & Expectations</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>{opportunity.description}</p>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '1rem' }}>
          As part of the SkillBridge professional network, candidates will engage directly with engineering leads, execute high-impact technical deliverables, and gain practical portfolio-ready experience.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to={`/opportunities/${opportunity.id}/apply`} className="retry-btn" style={{ textDecoration: 'none', display: 'inline-block', padding: '0.9rem 2rem' }}>
          Apply for this Opportunity Now
        </Link>
      </div>
    </div>
  );
}