import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ setActivePage, openContactModal }) {
  const { designer } = portfolioData;
  const [sfTime, setSfTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);
        setSfTime(formatted);
      } catch (e) {
        setSfTime('11:42 AM PST');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Selected Works' },
    { id: 'about', label: 'About Story' },
    { id: 'services', label: 'Services & Pricing' },
    { id: 'testimonial', label: 'Testimonials' },
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#f97316',
              display: 'block',
              marginBottom: '1rem'
            }}>
              ● Available for projects in 2026
            </span>
            <h2 className="footer-headline">
              LET'S BUILD SOMETHING EXTRAORDINARY.
            </h2>
            <div style={{ marginTop: '2.5rem' }}>
              <button 
                onClick={openContactModal}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#111111',
                  padding: '0.9rem 2.2rem',
                  borderRadius: '9999px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fde68a';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Initiate Project Inquiry</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links & Location */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', minWidth: '220px' }}>
            <div>
              <h4 style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#666666',
                marginBottom: '1rem'
              }}>
                Navigation
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {navItems.map((item) => (
                  <li 
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      fontSize: '0.95rem',
                      color: '#bbbbbb',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = '#bbbbbb'}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#666666',
                marginBottom: '0.5rem'
              }}>
                Base & Local Time
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#cccccc' }}>
                San Francisco, CA — {sfTime}
              </p>
            </div>
          </div>

          {/* Socials Column */}
          <div>
            <h4 style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#666666',
              marginBottom: '1rem'
            }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {designer.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.95rem',
                    color: '#bbbbbb',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#bbbbbb'}
                >
                  <span>{s.name}</span>
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: '1.4rem',
              color: '#ffffff'
            }}>
              Madison.
            </span>
            <span>© {new Date().getFullYear()} Madison Design Studio. All rights reserved.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Digital Product Designer & Webflow Specialist</span>
            <button 
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '0.4rem 0.85rem',
                borderRadius: '9999px',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
