import React from 'react';
import { ArrowUpRight, Check, CheckCircle2, Cpu, ArrowLeft, ShieldCheck } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectMockup } from '../components/ProjectMockup';
import { ContactCtaSection } from '../sections/ContactCtaSection';
import { Footer } from '../components/Footer';

export function CaseStudy({ project, go }) {
  if (!project) {
    return (
      <main className="page-main container">
        <h2>Case Study Not Found</h2>
        <a href="/work" onClick={(e) => { e.preventDefault(); go('/work'); }}>Back to Work</a>
      </main>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <main className="case-study-page">
        {/* Case Study Hero */}
        <section className="case-hero-section">
          <div className="container">
            <div className="case-back-link">
              <a href="/work" onClick={(e) => { e.preventDefault(); go('/work'); }}>
                <ArrowLeft size={16} /> Back to All Work
              </a>
            </div>

            <div className="case-badge-bar">
              <span className="case-num">{project.number}</span>
              <span className="case-slash">/</span>
              <span className="case-ind">{project.industry}</span>
              <span className="case-type">{project.type}</span>
            </div>

            <h1 className="case-main-title">{project.title}</h1>
            <p className="case-tagline">{project.tagline}</p>
          </div>
        </section>

        {/* Visual Presentation & Meta */}
        <section className="container case-visual-section">
          <div className="case-mockup-wrapper">
            <ProjectMockup project={project} />
          </div>

          <div className="case-meta-grid">
            <div className="meta-block">
              <small>INDUSTRY</small>
              <strong>{project.industry}</strong>
            </div>
            <div className="meta-block">
              <small>SERVICES</small>
              <div className="meta-tags-list">
                {project.services.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div className="meta-block">
              <small>TECHNOLOGIES</small>
              <div className="meta-tags-list">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution Grid */}
        <section className="container case-challenge-section">
          <div className="challenge-col">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              <span>THE OPERATIONAL FRICTION</span>
            </div>
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </div>

          <div className="solution-col">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              <span>ZENLOGIX ARCHITECTURE</span>
            </div>
            <h2>The Solution & Approach</h2>
            <p>{project.solution}</p>
          </div>
        </section>

        {/* System Architecture Step-by-Step Breakdown */}
        {project.architecture && project.architecture.length > 0 && (
          <section className="case-architecture-section">
            <div className="container">
              <div className="section-eyebrow">
                <span className="eyebrow-dot" />
                <span>INTEGRATION ARCHITECTURE</span>
              </div>
              <h2 className="section-title">System Workflow Breakdown</h2>

              <div className="architecture-steps-grid">
                {project.architecture.map((arch) => (
                  <div key={arch.step} className="arch-step-card">
                    <span className="arch-step-num">{arch.step}</span>
                    <h3 className="arch-step-title">{arch.title}</h3>
                    <p className="arch-step-desc">{arch.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Flow Ribbon */}
        <section className="case-flow-ribbon">
          <div className="container">
            <small className="ribbon-label">END-TO-END DATA FLOW</small>
            <div className="flow-ribbon-steps">
              {project.flow.map((node, i) => (
                <React.Fragment key={node}>
                  <div className="ribbon-node">
                    <span>0{i + 1}</span>
                    <strong>{node}</strong>
                  </div>
                  {i < project.flow.length - 1 && <span className="ribbon-arrow">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Key Outcomes & Features */}
        <section className="container case-outcomes-section">
          <div className="outcomes-col">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              <span>BUSINESS IMPACT</span>
            </div>
            <h2>Measured Outcomes</h2>
            <ul className="outcomes-list">
              {project.outcomes.map((out) => (
                <li key={out}>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="features-col">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2>Key Implementation Features</h2>
            <div className="features-pill-grid">
              {project.features.map((feat) => (
                <div key={feat} className="feature-pill-item">
                  <Cpu size={14} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Case Study Switcher */}
        <section className="next-case-study-bar">
          <div className="container">
            <small>NEXT CASE STUDY</small>
            <a
              href={`/work/${nextProject.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(`/work/${nextProject.id}`);
              }}
              className="next-project-link"
              data-cursor-text="NEXT"
            >
              <div className="next-info">
                <span className="next-num">{nextProject.number}</span>
                <span className="next-title">{nextProject.title}</span>
              </div>
              <ArrowUpRight size={32} className="next-arrow" />
            </a>
          </div>
        </section>

        <ContactCtaSection go={go} />
      </main>
      <Footer go={go} />
    </>
  );
}
