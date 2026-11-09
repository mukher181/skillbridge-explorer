import React from 'react';
import { Link } from 'react-router-dom';

export default function MyApplicationsPage({ applications }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <header className="explorer-header">
        <h1>My Applications</h1>
        <p>Track all internship and contract applications submitted locally via client-side state / localStorage.</p>
      </header>

      {applications.length === 0 ? (
        <div className="empty-state">
          <h3>No Applications Submitted Yet</h3>
          <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0 1.5rem 0' }}>Browse available opportunities and submit your application to track them here.</p>
          <Link to="/internships" className="retry-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Browse Opportunities</Link>
        </div>
      ) : (
        <div className="listings-grid">
          {applications.map(app => (
            <article key={app.id} className="listing-card">
              <div className="card-top">
                <span className="badge" style={{ background: 'var(--success-bg)', color: 'var(--success-text)' }}>Submitted</span>
                <span className="location">{app.appliedAt}</span>
              </div>
              <h2>{app.title}</h2>
              <p className="company">{app.company}</p>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <p><strong>Applicant:</strong> {app.fullName}</p>
                <p><strong>Email:</strong> {app.email}</p>
                <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><strong>Portfolio:</strong> {app.resumeLink}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}