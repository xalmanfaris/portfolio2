import React from 'react';
import { X, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onSelectNext }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '820px' }}
      >
        {/* Close Button */}
        <button 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem', paddingRight: '2rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '0.5rem',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#888888',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span style={{ color: '#111111' }}>{project.client}</span>
          </div>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#111111',
            marginBottom: '0.75rem'
          }}>
            {project.title}
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: '#555555',
            lineHeight: 1.6
          }}>
            {project.description}
          </p>
        </div>

        {/* Big Preview Image */}
        <div style={{
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '2rem',
          backgroundColor: '#f5f5f5',
          border: '1px solid rgba(0,0,0,0.06)'
        }}>
          <img 
            src={project.thumbnail} 
            alt={project.title}
            style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
          />
        </div>

        {/* Metrics Bar */}
        {project.metrics && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            padding: '1.25rem',
            backgroundColor: '#f8f8f8',
            borderRadius: '16px',
            marginBottom: '2rem',
            border: '1px solid rgba(0,0,0,0.07)'
          }}>
            {Object.values(project.metrics).map((m, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <span style={{
                  display: 'block',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#111111'
                }}>
                  {m}
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#777777',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Verified Result
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Deep Dive: Challenge & Solution */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#888888',
              marginBottom: '0.5rem'
            }}>
              The Challenge
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#444444', lineHeight: 1.6 }}>
              {project.challenge}
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#888888',
              marginBottom: '0.5rem'
            }}>
              The Solution
            </h4>
            <p style={{ fontSize: '0.95rem', color: '#444444', lineHeight: 1.6 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Deliverables List */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.08)',
          paddingTop: '1.5rem',
          marginBottom: '2rem'
        }}>
          <h4 style={{
            fontSize: '0.85rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#888888',
            marginBottom: '0.85rem'
          }}>
            Scope & Deliverables
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {(project.deliverables || project.tags || []).map((deliv, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#222222',
                  backgroundColor: '#f5f5f5',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                <CheckCircle size={14} color="#22c55e" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(0,0,0,0.08)'
        }}>
          <button 
            onClick={onClose}
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#666666',
              padding: '0.6rem 1.25rem',
              borderRadius: '9999px',
              backgroundColor: '#f5f5f5'
            }}
          >
            Close Overview
          </button>

          <button 
            onClick={onSelectNext}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: '#111111',
              padding: '0.65rem 1.4rem',
              borderRadius: '9999px',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Next Project</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
