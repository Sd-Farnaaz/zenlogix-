import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { processSteps } from '../data/portfolioData';

export function ProcessPreviewSection({ go }) {
  return (
    <section className="process-preview-section">
      <div className="container">
        <div className="process-preview-grid">
          <div className="process-header-col">
            <SectionHeading
              eyebrow="Our Approach"
              title={
                <>
                  From the first question to <em>a better answer.</em>
                </>
              }
              intro="A disciplined, transparent 7-step delivery model that keeps digital projects grounded in real problem-solving and visible at every stage."
            />
            <div className="process-cta-box">
              <Button href="/process" go={go} variant="primary" cursorText="EXPLORE">
                Explore Full 7-Step Process
              </Button>
            </div>
          </div>

          <div className="process-steps-col">
            <div className="steps-vertical-timeline">
              {processSteps.slice(0, 4).map((step) => (
                <div key={step.number} className="timeline-preview-step">
                  <div className="step-badge">{step.number}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-summary">{step.summary}</p>
                    <div className="step-receive">
                      <CheckCircle2 size={13} className="receive-icon" />
                      <span>{step.receive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
