import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [msg, setMsg] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg.name && msg.email && msg.message) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ textAlign: 'left', background: 'var(--bg-card)', padding: '3.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', maxWidth: '750px', margin: '0 auto', boxShadow: 'var(--shadow-sm)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: '800' }}>Contact Support</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>Have questions about partner listings or platform usage? Send us a message.</p>

      {submitted ? (
        <div className="empty-state" style={{ padding: '3rem 2rem' }}>
          <h3 style={{ color: 'var(--success-text)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Message Received Successfully!</h3>
          <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. Our support team will respond within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="c-name" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Your Name *</label>
            <input 
              id="c-name"
              type="text" 
              required
              value={msg.name} 
              onChange={e => setMsg({...msg, name: e.target.value})}
              className="search-input" 
              style={{ width: '100%', maxWidth: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="c-email" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Email Address *</label>
            <input 
              id="c-email"
              type="email" 
              required
              value={msg.email} 
              onChange={e => setMsg({...msg, email: e.target.value})}
              className="search-input" 
              style={{ width: '100%', maxWidth: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label htmlFor="c-msg" style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>Your Message *</label>
            <textarea 
              id="c-msg"
              rows="5" 
              required
              value={msg.message} 
              onChange={e => setMsg({...msg, message: e.target.value})}
              className="search-input" 
              style={{ width: '100%', maxWidth: 'none', height: '140px', resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="retry-btn" style={{ width: '100%', padding: '0.9rem' }}>Send Message</button>
        </form>
      )}
    </div>
  );
}