import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero({ openContactModal, setActivePage, navigateToWorks }) {
  return (
    <section className="hero-wrapper" id="hero">
      <div className="hero-inner">
        {/* Main Pristine Hero Frame */}
        <div className="hero-canvas-exact">
          {/* Exact Hero Visual Asset from Reference Screenshot */}
          <img 
            src={`${import.meta.env.BASE_URL}madison-hero-body.png`} 
            alt="Hey, there — I AM MADISON, DIGITAL PRODUCT DESIGNER" 
            className="hero-reference-img"
          />

          {/* Interactive Radar Ring Overlay on the Orange Dot */}
          <div 
            className="hero-hotspot-radar"
            title="Available for new opportunities — Click to get in touch"
            onClick={openContactModal}
          >
            <span className="radar-ping-ring"></span>
          </div>

          {/* Interactive Clickable Area for 'Available for new opportunities' Badge */}
          <div 
            className="hero-hotspot-badge"
            title="Available for new opportunities — Click to get in touch"
            onClick={openContactModal}
          ></div>

          {/* Interactive Clickable Area for 'I AM MADISON' */}
          <div 
            className="hero-hotspot-about"
            title="Learn more about Madison"
            onClick={() => {
              if (setActivePage) setActivePage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          ></div>

          {/* Interactive Clickable Area for 'DIGITAL PRODUCT DESIGNER' */}
          <div 
            className="hero-hotspot-services"
            title="View services and capabilities"
            onClick={() => {
              if (setActivePage) setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          ></div>
        </div>

        {/* Scroll Indicator to Explore Below */}
        <div 
          className="hero-scroll-indicator"
          onClick={navigateToWorks}
          title="Scroll to view featured projects"
        >
          <span>Explore Works</span>
          <ArrowDown size={14} className="bounce-arrow" />
        </div>
      </div>
    </section>
  );
}
