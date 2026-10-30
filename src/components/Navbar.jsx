import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Works' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonial', label: 'Testimonial' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Left: Madison. Logo */}
        <div 
          className="navbar-logo"
          onClick={() => handleNavClick('home')}
          title="Madison Portfolio"
        >
          Madison.
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`nav-item ${activePage === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Contact Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button 
            className="nav-contact-btn"
            onClick={openContactModal}
          >
            Contact
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <div
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`mobile-nav-link ${activePage === link.id ? 'active' : ''}`}
            >
              <span>{link.label}</span>
              {activePage === link.id && <span className="mobile-nav-dot"></span>}
            </div>
          ))}
          <button 
            className="nav-contact-btn"
            style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
            onClick={() => {
              setMobileMenuOpen(false);
              openContactModal();
            }}
          >
            <span>Contact</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      )}
    </header>
  );
}
