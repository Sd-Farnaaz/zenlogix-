import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BusinessSolutionsDiagram } from '../components/BusinessSolutionsDiagram';

export function SolutionsSection() {
  return (
    <section className="solutions-dark-section">
      <div className="container">
        <SectionHeading
          dark
          eyebrow="Business Solutions Engine"
          title={
            <>
              How technology connects <em>business processes.</em>
            </>
          }
          intro="We bridge the gap between commercial friction and technical execution. See how custom integration engines and automated workflows eliminate data silos and manual overhead."
        />

        <BusinessSolutionsDiagram />
      </div>
    </section>
  );
}
