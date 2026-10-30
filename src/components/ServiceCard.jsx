import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ openContactModal }) {
  const { services } = portfolioData;
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="card-white" id="service">
      {/* Background Watermark */}
      <div className="watermark-text">
        SERVICE
      </div>

      {/* Section Title */}
      <h2 className="card-section-title">
        /SERVICE
      </h2>

      {/* Service Rows List */}
      <div className="service-rows-list">
        {services.map((srv) => {
          const isExpanded = expandedId === srv.id;
          return (
            <div key={srv.id}>
              <div 
                className="service-row-item"
                onClick={() => toggleExpand(srv.id)}
                title="Click to view details"
              >
                <span className="service-row-name">
                  {srv.name}
                </span>
                <span className="service-row-arrow">
                  ↗
                </span>
              </div>

              {/* Expandable Details Drawer */}
              {isExpanded && (
                <div style={{
                  padding: '1.5rem 0.5rem 2rem',
                  backgroundColor: '#fafafa',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  animation: 'fadeIn 0.25s ease'
                }}>
                  <p style={{ fontSize: '1rem', color: '#444', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {srv.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '1.25rem' }}>
                    {srv.deliverables.map((item, idx) => (
                      <span 
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          backgroundColor: '#ffffff',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '9999px',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: '#222',
                          border: '1px solid rgba(0,0,0,0.06)'
                        }}
                      >
                        <CheckCircle2 size={13} color="#22c55e" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={openContactModal}
                    className="btn-lets-talk"
                    style={{ fontSize: '0.84rem', padding: '0.5rem 1.25rem' }}
                  >
                    <span>Request {srv.name}</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
