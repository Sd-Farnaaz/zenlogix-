import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { industries } from '../data/portfolioData';

export function IndustriesSection() {
  return (
    <section className="industries-editorial-section">
      <div className="container">
        <div className="industries-header-grid">
          <SectionHeading
            eyebrow="Industry Context"
            title={
              <>
                Industry context <em>changes everything.</em>
              </>
            }
            intro="We bring deep operational empathy to the unique compliance standards, inventory dynamics, and workflow pressures of your sector."
          />
        </div>

        {/* Asymmetric Industries Grid */}
        <div className="industries-grid-container">
          {industries.map((ind, idx) => (
            <div key={ind.name} className="industry-cell" data-cursor-text="EXPLORE">
              <div className="cell-top">
                <span className="cell-num">0{idx + 1}</span>
                <ArrowUpRight size={16} className="cell-arrow" />
              </div>
              <h3 className="cell-name">{ind.name}</h3>
              <p className="cell-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
