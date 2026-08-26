import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { technologies } from '../data/portfolioData';

export function TechSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Object.keys(technologies)];

  return (
    <section className="technology-editorial-section">
      <div className="container">
        <SectionHeading
          eyebrow="Technology Capabilities"
          title={
            <>
              The tools matter. <em>The thinking matters more.</em>
            </>
          }
          intro="A considered software stack chosen strictly for performance, reliability, ease of maintenance, and the operational goals of your team."
        />

        {/* Filter Pills */}
        <div className="tech-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tech-filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Grid Display */}
        <div className="tech-matrix-grid">
          {Object.entries(technologies).map(([cat, items]) => {
            if (activeCategory !== 'All' && activeCategory !== cat) return null;
            return (
              <div key={cat} className="tech-category-card">
                <div className="cat-card-header">
                  <span className="cat-badge">{cat}</span>
                  <h3 className="cat-title">{cat} Stack</h3>
                </div>
                <div className="cat-items-list">
                  {items.map((item) => (
                    <div key={item.name} className="tech-item-row">
                      <strong className="tech-name">{item.name}</strong>
                      <span className="tech-desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
