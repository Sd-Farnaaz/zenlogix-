import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ContactCtaSection } from '../sections/ContactCtaSection';
import { Footer } from '../components/Footer';

export function Work({ go }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'CRM', 'Software', 'Automation', 'Web'];

  const visibleProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <main className="page-main work-page">
        {/* Intro */}
        <section className="container page-intro-section">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>SELECTED WORK & CASE STUDIES</span>
          </div>
          <h1 className="page-title">
            Work that solves<br />
            <em>real business problems.</em>
          </h1>
          <p className="page-intro-copy">
            Deep-dive case studies in custom CRM architecture, e-commerce integrations, business automation engines, and connected digital solutions.
          </p>

          {/* Filter Bar */}
          <div className="filter-pill-bar">
            {filters.map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Work Grid */}
        <section className="container work-grid-section">
          <div className="work-full-list">
            {visibleProjects.map((project, idx) => (
              <div key={project.id} className="work-item-wrapper">
                <ProjectCard project={project} featured={idx === 0} go={go} />
              </div>
            ))}
          </div>
        </section>

        <ContactCtaSection go={go} />
      </main>
      <Footer go={go} />
    </>
  );
}
