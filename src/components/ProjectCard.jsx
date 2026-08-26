import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectMockup } from './ProjectMockup';

export function ProjectCard({ project, featured = false, go, className = '' }) {
  const handleClick = (e) => {
    e.preventDefault();
    go(`/work/${project.id}`);
  };

  return (
    <article className={`project-editorial-card ${featured ? 'card-featured' : ''} ${className}`}>
      {/* Visual Presentation Area */}
      <a
        href={`/work/${project.id}`}
        onClick={handleClick}
        className="card-visual-link"
        data-cursor-text="VIEW"
      >
        <ProjectMockup project={project} />
      </a>

      {/* Meta Bar */}
      <div className="card-meta-bar">
        <span className="meta-number">{project.number}</span>
        <span className="meta-divider">/</span>
        <span className="meta-industry">{project.industry}</span>
        <span className="meta-tag">{project.type}</span>
      </div>

      {/* Title & Description */}
      <div className="card-content">
        <h3 className="card-title">
          <a href={`/work/${project.id}`} onClick={handleClick} data-cursor-text="VIEW">
            {project.title}
          </a>
        </h3>
        <p className="card-description">{project.description}</p>
      </div>

      {/* Services & Tech Tags */}
      <div className="card-tags-row">
        {project.services.slice(0, 4).map((srv) => (
          <span key={srv} className="tag-pill">
            {srv}
          </span>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="card-footer-action">
        <a
          href={`/work/${project.id}`}
          onClick={handleClick}
          className="case-study-link"
          data-cursor-text="VIEW"
        >
          <span>View Case Study</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
