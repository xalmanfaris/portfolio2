import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function WorksPage({ onSelectProject }) {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'UX / UI', 'Web Design', 'Webflow', 'Design Systems'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <main>
      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="section-pill-badge">
          <span className="pill-radar-dot"></span>
          <span>CURATED CASE STUDIES (2022 — 2026)</span>
        </div>
        <h1 className="page-hero-title">SELECTED WORKS</h1>
        <p className="page-hero-subtitle">
          A collection of digital products, high-conversion web experiences, and scalable design token architectures engineered for global leaders.
        </p>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="section-wrapper" style={{ paddingTop: '3.5rem' }}>
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${selectedFilter === cat ? 'active' : ''}`}
              onClick={() => setSelectedFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card"
              onClick={() => onSelectProject(project)}
            >
              <div className="project-img-box">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="project-img" 
                />
                <span className="project-category-badge">{project.category}</span>
              </div>

              <div className="project-content">
                <div className="project-year-client">
                  {project.client} • {project.year}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
