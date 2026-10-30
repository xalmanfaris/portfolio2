import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Star, Quote, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function TestimonialPage({ openContactModal }) {
  const { testimonials } = portfolioData;

  return (
    <main>
      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-category">Client Stories & Reviews</div>
        <h1 className="page-hero-title">CLIENT TESTIMONIALS</h1>
        <p className="page-hero-subtitle">
          Real feedback from visionary founders, VP of Product leaders, and marketing executives who partnered with Madison.
        </p>
      </section>

      {/* Verified Stats Banner */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-subtle)', padding: '2.5rem 2rem' }}>
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', color: '#111' }}>
              98.4%
            </div>
            <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 500, marginTop: '0.25rem' }}>
              Average Net Promoter Score
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', color: '#111' }}>
              100%
            </div>
            <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 500, marginTop: '0.25rem' }}>
              On-Time Project Delivery
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', color: '#111' }}>
              85%+
            </div>
            <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 500, marginTop: '0.25rem' }}>
              Repeat or Retainer Clients
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.75rem', color: '#111' }}>
              5.0 ★
            </div>
            <div style={{ fontSize: '0.85rem', color: '#666', fontWeight: 500, marginTop: '0.25rem' }}>
              Clutch & Webflow Verified Rating
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-wrapper">
        <div className="testimonials-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card" style={{ padding: '2.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>

                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: '#059669',
                    backgroundColor: '#ecfdf5',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}>
                    <ShieldCheck size={13} />
                    <span>Verified Project</span>
                  </span>
                </div>

                <p className="testimonial-quote">
                  "{item.quote}"
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)',
                marginTop: '1.5rem'
              }}>
                <div className="testimonial-author">
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <div className="testimonial-name">{item.name}</div>
                    <div className="testimonial-role">{item.role} • {item.company}</div>
                  </div>
                </div>

                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: '#888',
                  backgroundColor: '#faf7f2',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px'
                }}>
                  {item.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div style={{
          marginTop: '5rem',
          padding: '3.5rem 2rem',
          backgroundColor: '#faf7f2',
          borderRadius: '20px',
          textAlign: 'center',
          border: '1px solid var(--border-subtle)'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            color: '#111',
            textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}>
            BECOME OUR NEXT SUCCESS STORY
          </h3>
          <p style={{
            fontSize: '1rem',
            color: '#555',
            maxWidth: '520px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Ready to elevate your digital presence, increase conversions, and launch an unforgettable product experience?
          </p>
          <button 
            onClick={openContactModal}
            className="nav-contact-btn"
            style={{ fontSize: '1rem', padding: '0.85rem 2.2rem' }}
          >
            <span>Book an Intro Call</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
