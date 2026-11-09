import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function ApplyPage({ items, onApply }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const opportunity = items.find(i => i.id === id);

  const [formData, setFormData] = useState({ fullName: '', email: '', resumeLink: '', coverLetter: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email address is required.';
    if (!formData.resumeLink.trim()) errs.resumeLink = 'Resume link or Portfolio URL is required.';
    if (!formData.coverLetter.trim() || formData.coverLetter.length < 20) errs.coverLetter = 'Cover letter must be at least 20 characters.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        onApply({
          id: Date.now(),
          opportunityId: opportunity?.id || id,
          title: opportunity?.title || 'Tech Opportunity',
          company: opportunity?.company || 'Partner Company',
          appliedAt: new Date().toLocaleDateString(),
          ...formData
        });
      }, 1000);
    }
  };

  if (success) {
    return (
      <div className="empty-state" style={{ padding: '5rem 2rem' }}>
        <h3 style={{ color: 'var(--success-text)', fontSize: '2rem', marginBottom: '0.75rem' }}>🎉 Application Submitted Successfully!</h3>
        <p style={{ margin: '1rem 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>Your application for <strong>{opportunity?.title}</strong> has been securely recorded.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
          <Link to="/my-applications" className="retry-btn" style={{ textDecoration: 'none', padding: '0.8rem 1.6rem' }}>View My Applications</Link>
          <Link to="/" className="page-btn" style={{ textDecoration: 'none', padding: '0.8rem 1.6rem' }}>Back to Browse</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'left', background: 'var(--bg-card)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', maxWidth: '750px', margin: '0 auto', boxShadow: 'var(--shadow-sm)' }}>
      <button onClick={() => navigate(-1)} className="page-btn" style={{ marginBottom: '1.5rem' }}>← Cancel</button>
      <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Application Form</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Applying for: <strong>{opportunity?.title}</strong> at <strong>{opportunity?.company}</strong></p>

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="fullName" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Full Name *</label>
          <input 
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={e => setFormData({...formData, fullName: e.target.value})}
            className="search-input"
            style={{ width: '100%', maxWidth: 'none' }}
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.35rem', display: 'block' }} role="alert">{errors.fullName}</span>}
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address *</label>
          <input 
            id="email"
            type="email"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="search-input"
            style={{ width: '100%', maxWidth: 'none' }}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.35rem', display: 'block' }} role="alert">{errors.email}</span>}
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="resumeLink" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Resume / Portfolio URL *</label>
          <input 
            id="resumeLink"
            type="url"
            placeholder="https://linkedin.com/in/yourprofile"
            value={formData.resumeLink}
            onChange={e => setFormData({...formData, resumeLink: e.target.value})}
            className="search-input"
            style={{ width: '100%', maxWidth: 'none' }}
            aria-invalid={errors.resumeLink ? "true" : "false"}
          />
          {errors.resumeLink && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.35rem', display: 'block' }} role="alert">{errors.resumeLink}</span>}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="coverLetter" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Cover Letter / Statement of Interest *</label>
          <textarea 
            id="coverLetter"
            rows="5"
            placeholder="Tell us why you are a great fit (min 20 characters)..."
            value={formData.coverLetter}
            onChange={e => setFormData({...formData, coverLetter: e.target.value})}
            className="search-input"
            style={{ width: '100%', maxWidth: 'none', height: '140px', resize: 'vertical' }}
            aria-invalid={errors.coverLetter ? "true" : "false"}
          />
          {errors.coverLetter && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '0.35rem', display: 'block' }} role="alert">{errors.coverLetter}</span>}
        </div>

        <button type="submit" disabled={submitting} className="retry-btn" style={{ width: '100%', padding: '0.9rem' }}>
          {submitting ? 'Submitting Application...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}