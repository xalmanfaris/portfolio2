import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function SelectedWorkCard({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState('Real Project');

  const tabs = ['All', 'Real Project', 'Exploration'];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="card-white" id="work">
      {/* Background Watermark */}
      <div className="watermark-text">
        PORTFOLIO
      </div>

      {/* Section Title */}
      <h2 className="card-section-title">
        /SELECTED WORK
      </h2>

      {/* Controls Row: Filters on Left, View All on Right */}
      <div className="work-controls-row">
        <div className="work-filter-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`work-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <button 
          className="btn-view-all"
          onClick={() => setActiveTab('All')}
        >
          <span>View All Work</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* 2-Column Works Grid */}
      <div className="works-grid">
        {filteredProjects.map((project, idx) => (
          <div 
            key={project.id}
            className="work-project-card"
            onClick={() => onSelectProject(project)}
          >
            {/* Project Image Frame */}
            <div className="work-img-frame">
              <img 
                src={project.thumbnail} 
                alt={project.title}
                className="work-project-img" 
              />
              {/* Top Left Pill Badge */}
              <span className="work-pill-badge">
                {project.badge}
              </span>

              {/* Floating Circular Arrow for interactive feel */}
              {idx === 1 && (
                <div className="work-circular-arrow">
                  ↗
                </div>
              )}
            </div>

            {/* Project Info Block */}
            <div className="work-project-info">
              <h3 className="work-project-title">
                {project.title}
              </h3>

              <div className="work-tags-list">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="work-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
