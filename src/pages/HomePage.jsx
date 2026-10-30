import React from 'react';
import Hero from '../components/Hero';
import ClientsMarquee from '../components/ClientsMarquee';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function HomePage({ 
  onSelectProject, 
  setActivePage, 
  openContactModal 
}) {
  const { projects, services, designer, testimonials } = portfolioData;
  const featuredProjects = projects.slice(0, 4);

  return (
    <main>
      {/* 1. Exact Replica Hero Section */}
      <Hero 
        openContactModal={openContactModal}
        setActivePage={setActivePage}
        navigateToWorks={() => {
          const el = document.getElementById('featured-works');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 2. Client / Partner Marquee */}
      <ClientsMarquee />

      {/* 3. Featured Works Section */}
      <section className="section-wrapper" id="featured-works">
        <div className="section-header">
          <div>
            <div className="section-pill-badge">
              <span className="pill-radar-dot"></span>
              <span>CURATED CASE STUDIES</span>
            </div>
            <h2 className="section-title">
              FEATURED WORKS
              <span className="section-title-serif">Recent product design & Webflow projects</span>
            </h2>
          </div>

          <button 
            onClick={() => {
              setActivePage('works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.92rem',
              fontWeight: 600,
              padding: '0.75rem 1.6rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-medium)',
              backgroundColor: '#ffffff',
              transition: 'var(--transition-smooth)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#111111';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#111111';
            }}
          >
            <span>Browse All Projects</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project) => (
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

      {/* 4. Services Preview Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBlock: '1px solid var(--border-subtle)' }}>
        <div className="section-wrapper">
          <div className="section-header">
            <div>
              <div className="section-pill-badge">
                <span className="pill-radar-dot"></span>
                <span>CAPABILITIES & CRAFT</span>
              </div>
              <h2 className="section-title">
                SERVICES
                <span className="section-title-serif">Tailored end-to-end design & development</span>
              </h2>
            </div>

            <button 
              onClick={() => {
                setActivePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#111111'
              }}
            >
              <span>Explore Process & Pricing</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="services-grid">
            {services.map((srv) => (
              <div key={srv.id} className="service-card">
                <div>
                  <div className="service-num">{srv.num}</div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-desc">{srv.subtitle}</p>
                </div>

                <ul className="service-deliverables">
                  {srv.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={15} color="#f97316" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Snapshot Section */}
      <section className="section-wrapper">
        <div className="about-grid">
          <div>
            <div className="section-pill-badge">
              <span className="pill-radar-dot"></span>
              <span>BACKGROUND & ETHOS</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              DESIGNING FOR<br />HUMANS & RESULTS
            </h2>
            <div className="about-narrative">
              <p>
                Hello, I'm Madison. Over the past 8+ years, I have worked across the globe partnering with forward-thinking founders, product managers, and engineering teams.
              </p>
              <p>
                My philosophy is simple: exceptional digital design is not merely decoration. It is the clearest, most direct pathway to establishing user trust and creating enterprise value.
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="nav-contact-btn"
                style={{ display: 'inline-flex' }}
              >
                <span>Read Full Biography & Timeline</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="about-metrics">
            <div className="metric-card">
              <div className="metric-val">{designer.experienceYears}</div>
              <div className="metric-label">Years of Dedicated Experience</div>
            </div>

            <div className="metric-card">
              <div className="metric-val">{designer.projectsCompleted}</div>
              <div className="metric-label">Completed Client Projects</div>
            </div>

            <div className="metric-card">
              <div className="metric-val">{designer.clientValuation}</div>
              <div className="metric-label">Client Market Cap & Funding</div>
            </div>

            <div className="metric-card">
              <div className="metric-val">{designer.awardsWon}</div>
              <div className="metric-label">International Design Honors</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Preview */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBlock: '1px solid var(--border-subtle)' }}>
        <div className="section-wrapper">
          <div className="section-header">
            <div>
              <div className="section-pill-badge">
                <span className="pill-radar-dot"></span>
                <span>CLIENT ENDORSEMENTS</span>
              </div>
              <h2 className="section-title">
                CLIENT FEEDBACK
                <span className="section-title-serif">What product leaders say about working together</span>
              </h2>
            </div>

            <button 
              onClick={() => {
                setActivePage('testimonial');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#111111'
              }}
            >
              <span>View All Reviews</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((item) => (
              <div key={item.id} className="testimonial-card">
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p className="testimonial-quote">"{item.quote}"</p>

                <div className="testimonial-author">
                  <img 
                    src={item.avatar} 
                    alt={item.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <div className="testimonial-name">{item.name}</div>
                    <div className="testimonial-role">{item.role} • {item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Strip with signature warm glow */}
      <section style={{
        padding: '6.5rem 2rem',
        textAlign: 'center',
        background: 'radial-gradient(circle at 10% 45%, #ffedb8 0%, rgba(255,237,184,0) 55%), radial-gradient(circle at 90% 45%, #ffedb8 0%, rgba(255,237,184,0) 55%), radial-gradient(circle at 50% 50%, #fffbf0 0%, #ffffff 85%)',
        borderTop: '1px solid var(--border-subtle)'
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="section-pill-badge">
            <span className="pill-radar-dot"></span>
            <span>AVAILABLE FOR NEW PROJECTS</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)',
            color: '#111111',
            lineHeight: 0.92,
            margin: '0.75rem 0 1.5rem',
            textTransform: 'uppercase'
          }}>
            HAVE A PROJECT IN MIND?<br />LET'S CREATE IT.
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#555555', marginBottom: '2.25rem', lineHeight: 1.6 }}>
            Currently reserving slots for Q1 & Q2. Whether you need a full digital product, a high-converting Webflow build, or a design system overhaul, I'm here to bring your vision to life.
          </p>

          <button 
            onClick={openContactModal}
            className="nav-contact-btn"
            style={{ fontSize: '1.05rem', padding: '0.9rem 2.6rem' }}
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
