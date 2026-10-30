import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle, Download, ArrowUpRight, Compass, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function AboutPage({ openContactModal }) {
  const { designer, experience, awards } = portfolioData;

  const principles = [
    {
      num: "01",
      icon: <Compass size={22} color="#f97316" />,
      title: "Clarity Over Cleverness",
      desc: "Great digital design solves user friction effortlessly. If a user needs instructions to navigate an interface, the interface has failed."
    },
    {
      num: "02",
      icon: <Layers size={22} color="#f97316" />,
      title: "Systemic Scalability",
      desc: "Every component is designed with atomic hierarchy and code-ready tokens, ensuring your product scales from 10 users to 10 million without design debt."
    },
    {
      num: "03",
      icon: <HeartHandshake size={22} color="#f97316" />,
      title: "Sensory Emotion in Micro-Details",
      desc: "The subtle easing curve of a modal, the crisp tactile feedback of a button—micro-interactions turn mundane software into an unforgettable emotional experience."
    },
    {
      num: "04",
      icon: <ShieldCheck size={22} color="#f97316" />,
      title: "Design Grounded in Business Impact",
      desc: "Aesthetic beauty is meaningless without commercial results. Every visual decision is tied directly to customer retention, conversion lift, and brand equity."
    }
  ];

  const toolsStack = {
    "Design & Prototyping": ["Figma", "FigJam", "Protopie", "Adobe Creative Cloud", "Framer", "Miro"],
    "Front-End Engineering": ["Webflow", "HTML5 & Modern CSS3", "JavaScript (ES6+)", "React.js", "Tailwind / CSS Modules", "GSAP Animations"],
    "Strategy & Analytics": ["User Testing", "Hotjar", "Google Analytics 4", "Mixpanel", "Design Tokens", "Design Sprint Facilitation"]
  };

  const handleDownloadCV = () => {
    alert("Madison's Resume & CV (PDF) has been requested. Connecting to download channel.");
  };

  return (
    <main>
      {/* Page Header Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-category">Biography & Background</div>
        <h1 className="page-hero-title">ABOUT MADISON</h1>
        <p className="page-hero-subtitle">
          Digital Product Designer and Webflow specialist obsessed with typography, systematic thinking, and building products people genuinely love using.
        </p>
      </section>

      {/* Main Narrative & Metrics */}
      <section className="section-wrapper">
        <div className="about-grid">
          <div>
            <div className="section-label">The Story</div>
            <h2 className="section-title" style={{ marginBottom: '1.75rem' }}>
              BRIDGING AESTHETICS<br />& TECHNICAL RIGOR
            </h2>
            
            <div className="about-narrative">
              <p>
                I have spent the last 8+ years designing and engineering digital products for early-stage startups and enterprise industry leaders. Based in San Francisco and working with global distributed teams, my work focuses on turning ambiguous problems into elegant, high-impact digital experiences.
              </p>
              <p>
                Unlike traditional visual designers who stop at static mockups, I write production code and architect Webflow CMS engines. This rare hybrid perspective means every interface I design is not only visually breathtaking, but also technically feasible, responsive, and performance-optimized.
              </p>
              <p>
                When I'm not designing in Figma or developing in Webflow, you can find me exploring architectural photography, experimenting with spatial sound, or curating independent typography specimens.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <button 
                onClick={openContactModal}
                className="nav-contact-btn"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </button>

              <button 
                onClick={handleDownloadCV}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: '#ffffff'
                }}
              >
                <Download size={16} />
                <span>Download CV / Resume</span>
              </button>
            </div>
          </div>

          <div>
            <div className="about-metrics" style={{ marginTop: 0 }}>
              <div className="metric-card">
                <div className="metric-val">{designer.experienceYears}</div>
                <div className="metric-label">Years of Industry Craft</div>
              </div>

              <div className="metric-card">
                <div className="metric-val">{designer.projectsCompleted}</div>
                <div className="metric-label">Shipped Products & Sites</div>
              </div>

              <div className="metric-card">
                <div className="metric-val">{designer.clientValuation}</div>
                <div className="metric-label">Client Market Cap Impact</div>
              </div>

              <div className="metric-card">
                <div className="metric-val">{designer.awardsWon}</div>
                <div className="metric-label">Design & Web Honors</div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div style={{
              marginTop: '1.75rem',
              padding: '1.75rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Key Profile Highlights
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: '#444' }}>
                <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <CheckCircle size={16} color="#f97316" />
                  <span>Certified Webflow Expert & Professional Partner</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <CheckCircle size={16} color="#f97316" />
                  <span>3x Awwwards Site of the Day Winner</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <CheckCircle size={16} color="#f97316" />
                  <span>Proven Track Record with Series A - C Silicon Valley Startups</span>
                </li>
                <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <CheckCircle size={16} color="#f97316" />
                  <span>Fluent in English, Swedish & French</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Design Principles */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBlock: '1px solid var(--border-subtle)' }}>
        <div className="section-wrapper">
          <div className="section-header">
            <div>
              <div className="section-label">Philosophy</div>
              <h2 className="section-title">
                DESIGN ETHOS
                <span className="section-title-serif">The foundational pillars guiding every project</span>
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {principles.map((p) => (
              <div 
                key={p.num} 
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2rem',
                  borderRadius: '14px',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '10px',
                    backgroundColor: '#faf7f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {p.icon}
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: '#c9c4ba' }}>
                    {p.num}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111111' }}>{p.title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-wrapper">
        <div className="section-header">
          <div>
            <div className="section-label">Career Journey</div>
            <h2 className="section-title">
              EXPERIENCE & ROLES
              <span className="section-title-serif">A track record of high-growth creative leadership</span>
            </h2>
          </div>
        </div>

        <div className="timeline-list">
          {experience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company} — {exp.location}</div>
              <p style={{ marginTop: '0.65rem', fontSize: '0.95rem', color: '#555555', lineHeight: 1.6 }}>
                {exp.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools Stack */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBlock: '1px solid var(--border-subtle)' }}>
        <div className="section-wrapper">
          <div className="section-header">
            <div>
              <div className="section-label">Toolbox & Stack</div>
              <h2 className="section-title">
                SKILLS & TECHNOLOGIES
                <span className="section-title-serif">Modern tooling for world-class digital execution</span>
              </h2>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {Object.entries(toolsStack).map(([category, items], idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2rem',
                  borderRadius: '14px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem', color: '#111' }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {items.map((tool, i) => (
                    <span 
                      key={i}
                      style={{
                        padding: '0.45rem 0.95rem',
                        backgroundColor: '#faf7f2',
                        borderRadius: '9999px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        color: '#222222',
                        border: '1px solid rgba(0,0,0,0.05)'
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-wrapper">
        <div className="section-header">
          <div>
            <div className="section-label">Recognition</div>
            <h2 className="section-title">
              HONORS & AWARDS
              <span className="section-title-serif">Recognized by the global design community</span>
            </h2>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {awards.map((award, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px'
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: '#fff7db',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={22} color="#f97316" />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#888', textTransform: 'uppercase' }}>
                  {award.org} • {award.year}
                </span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#111' }}>{award.title}</h4>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>{award.project}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
