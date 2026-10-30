import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, MapPin, Clock, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const { designer } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Webflow Development',
    budget: '$10k - $25k',
    message: ''
  });

  const servicesList = [
    'UI/UX Design',
    'Webflow Development',
    'Full Website',
    'Design System',
    'UX Audit',
    'Advisory / Sprint'
  ];

  const budgetTiers = [
    '$5k - $10k',
    '$10k - $25k',
    '$25k+'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(designer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.55 }
      });
    } catch (err) {
      // fallback
    }
  };

  return (
    <main>
      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-category">Direct Inquiry</div>
        <h1 className="page-hero-title">GET IN TOUCH</h1>
        <p className="page-hero-subtitle">
          Have an upcoming launch or ready to elevate your digital experience? Let's discuss your goals and craft a roadmap.
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="section-wrapper">
        <div className="contact-container">
          {/* Left Column: Direct Info */}
          <div className="contact-info-panel">
            <div>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#f97316'
              }}>
                Direct Channels
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                color: '#111',
                lineHeight: 1,
                marginTop: '0.35rem',
                textTransform: 'uppercase'
              }}>
                REACH OUT DIRECTLY
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#555', marginTop: '0.5rem', lineHeight: 1.6 }}>
                I am currently booking client work for Q1 and Q2. For urgent inquiries or immediate consultations, email directly.
              </p>
            </div>

            {/* Email Card with Copy */}
            <div className="contact-card-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Mail size={20} color="#f97316" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: '#888' }}>
                  Direct Email
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111' }}>
                  {designer.email}
                </span>
                <button 
                  onClick={handleCopyEmail}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-medium)',
                    color: copied ? '#059669' : '#111'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Location & Response SLA */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="contact-card-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={18} color="#f97316" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: '#888' }}>
                    Location
                  </span>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111' }}>
                  San Francisco, CA
                </div>
                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>
                  Remote Worldwide
                </div>
              </div>

              <div className="contact-card-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Clock size={18} color="#f97316" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: '#888' }}>
                    Response Time
                  </span>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111' }}>
                  &lt; 24 Hours
                </div>
                <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>
                  Monday — Friday
                </div>
              </div>
            </div>

            {/* Socials Grid */}
            <div className="contact-card-box">
              <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: '#888', display: 'block', marginBottom: '1rem' }}>
                Social Profiles & Networks
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {designer.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--border-medium)',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '9999px',
                      color: '#111'
                    }}
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div>
            {submitted ? (
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '4rem 2rem',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <div style={{
                  width: 68,
                  height: 68,
                  borderRadius: '50%',
                  backgroundColor: '#ecfdf5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <Check size={36} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  color: '#111',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase'
                }}>
                  INQUIRY TRANSMITTED!
                </h3>

                <p style={{
                  fontSize: '1.05rem',
                  color: '#555',
                  maxWidth: '460px',
                  margin: '0 auto 2rem',
                  lineHeight: 1.6
                }}>
                  Thank you, {formData.name}! Your message has been routed directly to Madison. You will receive an initial response within 24 hours.
                </p>

                <button 
                  onClick={() => setSubmitted(false)}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#666',
                    textDecoration: 'underline'
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: '#111',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}>
                  PROJECT BRIEFING FORM
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Jordan Hayes"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jordan@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Company / Brand Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Acme Health or Startup Studio"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>

                {/* Service Selection */}
                <div className="form-group">
                  <label className="form-label">What service are you looking for?</label>
                  <div className="service-select-grid">
                    {servicesList.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        className={`service-pill-btn ${formData.service === srv ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, service: srv})}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Selection */}
                <div className="form-group">
                  <label className="form-label">Project Budget Range</label>
                  <div style={{ display: 'flex', gap: '0.65rem' }}>
                    {budgetTiers.map((b) => (
                      <button
                        key={b}
                        type="button"
                        className={`service-pill-btn ${formData.budget === b ? 'selected' : ''}`}
                        style={{ flex: 1, textAlign: 'center' }}
                        onClick={() => setFormData({...formData, budget: b})}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label">Project Scope & Details *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Please describe your product, target launch date, and what success looks like..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" style={{ marginTop: '0.75rem' }}>
                  <span>Submit Project Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
