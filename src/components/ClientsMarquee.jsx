import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ClientsMarquee() {
  const { clients } = portfolioData;
  const marqueeList = [...clients, ...clients, ...clients];

  return (
    <div className="marquee-section">
      <div className="marquee-label">Trusted by high-growth startups & global brands</div>
      <div className="marquee-track">
        {marqueeList.map((client, idx) => (
          <div key={idx} className="marquee-item">
            <span>{client.name}</span>
            <span className="marquee-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
