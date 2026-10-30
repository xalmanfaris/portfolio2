import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle, ChevronDown, ChevronUp, ArrowUpRight, Zap, Shield, Sparkles } from 'lucide-react';

export default function ServicesPage({ openContactModal }) {
  const { services, processSteps, faqs } = portfolioData;
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const pricingTiers = [
    {
      name: "Design Sprint / MVP",
      tag: "Fastest Turnaround",
      price: "$7,500",
      timeline: "2 - 3 Weeks",
      desc: "Ideal for early-stage startups needing a battle-tested prototype for investor pitches or rapid user validation.",
      features: [
        "Complete UX/UI Wireframes & Architecture",
        "High-Fidelity Interactive Figma Prototype",
        "Key User Journey Flows (up to 15 screens)",
        "Design System Starter Kit (Tokens & Typography)",
        "Developer Handover Documentation"
      ]
    },
    {
      name: "Flagship Website & Webflow",
      tag: "Most Popular",
      price: "$16,500",
      timeline: "4 - 5 Weeks",
      featured: true,
      desc: "End-to-end custom design and production Webflow build engineered for maximum conversion, speed, and brand authority.",
      features: [
        "Bespoke Brand & Art Direction Strategy",
        "Complete Webflow CMS Architecture",
        "Custom JavaScript & Micro-Animations (GSAP)",
        "Full Responsive Testing Across All Devices",
        "SEO Optimization & Core Web Vitals 95+",
        "Client CMS Video Training & 30-Day Support"
      ]
    },
    {
      name: "Dedicated Design Retainer",
      tag: "Ongoing Partnership",
      price: "$8,500",
      period: "/ month",
      timeline: "Quarterly or Annual",
      desc: "Your dedicated senior product designer on demand. Continuous design sprints, feature releases, and Webflow maintenance.",
      features: [
        "Guaranteed 25+ Design & Dev Hours Weekly",
        "Direct Slack & Loom Daily Async Collaboration",
        "Design System Governance & Component Updates",
        "A/B Testing & Conversion Rate Optimization",
        "Flexible Scope & Priority Turnaround"
      ]
    }
  ];

  return (
    <main>
      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-category">Offerings & Engagements</div>
        <h1 className="page-hero-title">SERVICES & PROCESS</h1>
        <p className="page-hero-subtitle">
          Comprehensive digital product design, Webflow engineering, and design system governance tailored for ambitious brands.
        </p>
      </section>

      {/* 4 Core Services */}
      <section className="section-wrapper">
        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.id} className="service-card" style={{ padding: '3rem' }}>
              <div>
                <div className="service-num">{srv.num}</div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.description}</p>

                <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                  <h4 style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#888888',
                    marginBottom: '0.75rem'
                  }}>
                    Core Deliverables
                  </h4>
                  <ul className="service-deliverables" style={{ borderTop: 'none', paddingTop: 0 }}>
                    {srv.deliverables.map((d, idx) => (
                      <li key={idx}>
                        <CheckCircle size={15} color="#f97316" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {srv.tools.map((t, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: '#faf7f2',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        color: '#666'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={openContactModal}
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#111',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  <span>Inquire</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBlock: '1px solid var(--border-subtle)' }}>
        <div className="section-wrapper">
          <div className="section-header">
            <div>
              <div className="section-label">Workflow</div>
              <h2 className="section-title">
                THE 4-STEP METHOD
                <span className="section-title-serif">A streamlined, transparent path from concept to launch</span>
              </h2>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem'
          }}>
            {processSteps.map((step) => (
              <div 
                key={step.step}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.25rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  color: '#f97316',
                  lineHeight: 1
                }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="section-wrapper">
        <div className="section-header">
          <div>
            <div className="section-label">Investment Models</div>
            <h2 className="section-title">
              PRICING & ENGAGEMENTS
              <span className="section-title-serif">Clear, transparent scoping with zero hidden surprises</span>
            </h2>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: tier.featured ? '#fffdf7' : '#ffffff',
                border: tier.featured ? '2px solid #111111' : '1px solid var(--border-subtle)',
                borderRadius: '16px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                boxShadow: tier.featured ? '0 20px 40px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              {tier.featured && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#111111',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.35rem 1rem',
                  borderRadius: '9999px'
                }}>
                  Most Recommended
                </div>
              )}

              <div>
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#f97316'
                }}>
                  {tier.tag}
                </span>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 700, marginTop: '0.35rem', color: '#111' }}>
                  {tier.name}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem', lineHeight: 1.5 }}>
                  {tier.desc}
                </p>

                <div style={{ margin: '2rem 0 1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: '#111', lineHeight: 1 }}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span style={{ fontSize: '1rem', color: '#888' }}>{tier.period}</span>
                  )}
                  <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#888', fontWeight: 500 }}>
                    {tier.timeline}
                  </span>
                </div>

                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.5rem',
                  marginBottom: '2rem'
                }}>
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '0.88rem', color: '#333', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={15} color="#f97316" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={openContactModal}
                className="submit-btn"
                style={{
                  backgroundColor: tier.featured ? '#111111' : '#ffffff',
                  color: tier.featured ? '#ffffff' : '#111111',
                  border: tier.featured ? 'none' : '1px solid var(--border-medium)'
                }}
              >
                <span>Select Package</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBlock: '1px solid var(--border-subtle)' }}>
        <div className="section-wrapper" style={{ maxWidth: '840px' }}>
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '3rem' }}>
            <div>
              <div className="section-label">Questions & Answers</div>
              <h2 className="section-title">
                FREQUENTLY ASKED
                <span className="section-title-serif">Everything you need to know before we begin</span>
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    overflow: 'hidden'
                  }}
                >
                  <button 
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#111111'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} color="#888" /> : <ChevronDown size={20} color="#888" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.5rem 1.5rem',
                      fontSize: '0.95rem',
                      color: '#555555',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(0,0,0,0.04)'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
