import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceCard() {
  const { experience, designer } = portfolioData;

  return (
    <section className="card-dark" id="experience">
      {/* Background Dark Watermark */}
      <div className="watermark-text dark">
        EXPERIENCE
      </div>

      {/* Header Row */}
      <div className="experience-header-row">
        <h2 className="card-section-title dark" style={{ marginBottom: 0 }}>
          /EXPERIENCE
        </h2>
        <span className="experience-years-badge">
          {designer.experienceYears}
        </span>
      </div>

      {/* Experience Rows List */}
      <div className="experience-rows-list">
        {experience.map((exp, idx) => (
          <div key={idx} className="experience-row-item">
            <div>
              <div className="exp-company">
                {exp.company}
              </div>
              <div className="exp-role">
                {exp.role}
              </div>
            </div>

            <div className="exp-period">
              {exp.period}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
