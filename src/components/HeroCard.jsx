import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function HeroCard({ 
  onScrollTo, 
  openContactModal 
}) {
  const { designer } = portfolioData;
  const [useDymasName, setUseDymasName] = useState(false);

  const firstName = useDymasName ? designer.altFirstName : designer.firstName;
  const lastName = useDymasName ? designer.altLastName : designer.lastName;

  return (
    <section className="card-white hero-card" id="home">
      {/* Top Navigation Row */}
      <nav className="hero-nav">
        {/* Left: Available Pill Badge */}
        <div 
          className="pill-available"
          onClick={openContactModal}
          title="Click to get in touch"
        >
          <span className="green-dot"></span>
          <span>{designer.availability}</span>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hero-nav-menu">
          <li 
            className="hero-nav-item"
            onClick={() => onScrollTo('work')}
          >
            <span>Work</span>
            <span className="hero-nav-tag">[40]</span>
          </li>

          <li 
            className="hero-nav-item"
            onClick={() => onScrollTo('service')}
          >
            <span>Service</span>
            <span className="hero-nav-tag">[4]</span>
          </li>

          <li 
            className="hero-nav-item"
            onClick={() => onScrollTo('experience')}
          >
            <span>Experience</span>
            <span className="hero-nav-tag">[9y+]</span>
          </li>

          <li 
            className="hero-nav-item"
            onClick={() => onScrollTo('contact')}
          >
            <span>Contact</span>
          </li>
        </ul>

        {/* Right: Let's Talk CTA */}
        <button 
          className="btn-lets-talk"
          onClick={openContactModal}
        >
          <span>Let's Talk</span>
          <ArrowUpRight size={15} />
        </button>
      </nav>

      {/* Hero Center Showcase: Giant Name & Centered Person */}
      <div className="hero-center-showcase">
        {/* Giant Typography Lockup */}
        <div className="hero-giant-name">
          <span 
            className="name-stroke"
            title="Click to toggle Salman / Dymas"
            onClick={() => setUseDymasName(!useDymasName)}
            style={{ cursor: 'pointer' }}
          >
            {firstName}
          </span>
          <span 
            className="name-solid"
            title="Click to toggle Salman / Dymas"
            onClick={() => setUseDymasName(!useDymasName)}
            style={{ cursor: 'pointer' }}
          >
            {lastName}
          </span>
        </div>

        {/* Centered Cutout of Salman (from user provided salman.jpeg) */}
        <div className="hero-person-container">
          <img 
            src={designer.cutoutImage} 
            alt={designer.fullName}
            className="hero-person-img"
            onMouseEnter={(e) => {
              if (designer.cutoutColorImage) e.currentTarget.src = designer.cutoutColorImage;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.src = designer.cutoutImage;
            }}
            title={`${designer.fullName} — UI/UX Designer`}
          />
        </div>
      </div>

      {/* Hero Bottom Row: Left Info & Right Socials */}
      <div className="hero-bottom-row">
        {/* Left Information Block */}
        <div className="hero-bottom-left">
          <h2 className="hero-role-title">
            {designer.role}
          </h2>
          <p className="hero-role-tagline">
            {designer.tagline}
          </p>
          <button 
            className="btn-collaborate"
            onClick={openContactModal}
          >
            <span>Let's collaborate</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Right Vertical Social Pills Stack */}
        <div className="hero-social-stack">
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
      </div>
    </section>
  );
}
