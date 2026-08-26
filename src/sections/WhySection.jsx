import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { principles } from '../data/portfolioData';

export function WhySection() {
  return (
    <section className="why-dark-section">
      <div className="container why-inner-grid">
        <div className="why-left-col">
          <SectionHeading
            dark
            eyebrow="Engineering Principles"
            title={
              <>
                Good technology feels <em>almost inevitable.</em>
              </>
            }
            intro="The best digital solutions are the ones that make work clearer, teams more capable, and operational progress easier to see every single day."
          />
        </div>

        <div className="why-right-col">
          <div className="principles-grid">
            {principles.map((item) => (
              <div key={item.number} className="principle-card">
                <span className="principle-num">{item.number}</span>
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
