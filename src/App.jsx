import React, { useState } from 'react';
import HeroCard from './components/HeroCard';
import SelectedWorkCard from './components/SelectedWorkCard';
import ServiceCard from './components/ServiceCard';
import ExperienceCard from './components/ExperienceCard';
import ContactCard from './components/ContactCard';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = portfolioData.projects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % portfolioData.projects.length;
    setSelectedProject(portfolioData.projects[nextIndex]);
  };

  return (
    <div className="portfolio-layout">
      {/* 1. Hero Section Card (Screenshot 3) */}
      <HeroCard 
        onScrollTo={scrollToSection}
        openContactModal={() => setIsContactModalOpen(true)}
      />

      {/* 2. Selected Work Section Card (Screenshot 4) */}
      <SelectedWorkCard 
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* 3. Service Section Card (Screenshot 1) */}
      <ServiceCard 
        openContactModal={() => setIsContactModalOpen(true)}
      />

      {/* 4. Experience Section Card (Screenshot 2 - Dark Theme) */}
      <ExperienceCard />

      {/* 5. Contact Section Card (Screenshot 5) */}
      <ContactCard 
        openContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <ProjectModal 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectNext={handleSelectNextProject}
      />

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
