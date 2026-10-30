import React, { useState } from 'react';
import { X, Check, Copy, Send, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { designer } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    budget: '$10k - $25k',
    message: ''
  });

  const servicesList = [
    'UI/UX Design',
    'Web Design & Dev',
    'Branding',
    'Motion & 3D',
    'Mobile App',
    'Design System'
  ];

  const budgetTiers = [
    '$3k - $5k',
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
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{
              width: 68,
              height: 68,
              borderRadius: '50%',
              backgroundColor: '#ecfdf5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
              boxShadow: '0 8px 24px rgba(5, 150, 105, 0.15)'
            }}>
              <Check size={34} />
            </div>

            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#111111',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em'
            }}>
              Message Received
            </h3>

            <p style={{
              fontSize: '1.05rem',
              color: '#555555',
              maxWidth: '460px',
              margin: '0 auto 2.25rem',
              lineHeight: 1.6
            }}>
              Thank you, <strong>{formData.name || 'friend'}</strong>! Salman Faris has received your project briefing and will get back to you within 24 hours.
            </p>

            <button 
              onClick={onClose}
              className="btn-submit-inquiry"
              style={{ padding: '0.85rem 2.5rem' }}
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div>
              <div className="modal-pill-tag">
                <span className="green-dot"></span>
                <span>Available for Q1 / Q2 Projects</span>
              </div>
              
              <h3 className="modal-title">
                Let's Start a Conversation
              </h3>
              
              <p className="modal-subtitle">
                Fill out the project briefing form below or reach out directly at <strong>{designer.email}</strong>.
              </p>
            </div>

            {/* Direct Email Copy Bar */}
            <div className="modal-email-banner">
              <div className="email-banner-left">
                <span className="email-banner-label">Direct email:</span>
                <span className="email-banner-val">{designer.email}</span>
              </div>
              <button 
                type="button"
                onClick={handleCopyEmail}
                className={`btn-copy-email ${copied ? 'copied' : ''}`}
                title="Copy email to clipboard"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Inquiries Form */}
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Alex Miller"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="alex@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="form-group">
                <label className="form-label">What service do you need?</label>
                <div className="service-pills-wrap">
                  {servicesList.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      className={`btn-select-pill ${formData.service === srv ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, service: srv})}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div className="form-group">
                <label className="form-label">Approximate Budget</label>
                <div className="budget-pills-wrap">
                  {budgetTiers.map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`btn-select-pill ${formData.budget === b ? 'active' : ''}`}
                      onClick={() => setFormData({...formData, budget: b})}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label">Project Details & Goals</label>
                <textarea 
                  rows={3}
                  required
                  placeholder="Tell me a bit about your product, timeline, and goals..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-inquiry">
                <span>Send Project Inquiry</span>
                <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
