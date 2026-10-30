import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function ContactCard({ openContactModal }) {
  const { designer } = portfolioData;

  return (
    <section className="card-white cta-card" id="contact">
      {/* Top Center Pill Badge */}
      <div 
        className="pill-available"
        onClick={openContactModal}
        title="Click to get in touch"
      >
        <span className="green-dot"></span>
        <span>{designer.availability}</span>
      </div>

      {/* Main Headline */}
      <h2 className="cta-headline">
        HAVE A PROJECT IN MIND?
      </h2>

      {/* Subtitle */}
      <p className="cta-subtitle">
        Together, we can create something clear and impactful. Let's collaborate to bring our ideas to life in a way that resonates with everyone.
      </p>

      {/* Contact Me CTA Button */}
      <button 
        className="btn-contact-me"
        onClick={openContactModal}
      >
        <span>Contact Me</span>
        <ArrowUpRight size={16} />
      </button>

      {/* Bottom Footer Pills Bar */}
      <div className="cta-footer-pills">
        {/* Author Avatar Pill */}
        <div className="pill-user-author">
          <img 
            src={designer.avatarImage} 
            alt={designer.fullName}
            className="author-avatar-img"
          />
          <span>{designer.fullName}</span>
        </div>

        {/* Social Pills */}
        {designer.socials.map((s) => (
          <a
            key={s.key}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="pill-social"
          >
            <span className="pill-social-icon">{s.icon}</span>
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
