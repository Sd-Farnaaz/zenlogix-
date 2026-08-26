import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { processSteps } from '../data/portfolioData';
import { ContactCtaSection } from '../sections/ContactCtaSection';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export function Process({ go }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-card-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="page-main process-page">
        {/* Intro */}
        <section className="container page-intro-section">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>OUR METHODOLOGY</span>
          </div>
          <h1 className="page-title">
            How we <em>build.</em>
          </h1>
          <p className="page-intro-copy">
            A structured, 7-step engineering methodology that turns operational complexity into dependable, high-impact digital solutions.
          </p>
        </section>

        {/* Interactive Timeline */}
        <section className="container timeline-full-section" ref={timelineRef}>
          <div className="timeline-spine" />
          <div className="timeline-steps-list">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="timeline-card-item">
                <div className="timeline-left">
                  <div className="timeline-badge-circle">{step.number}</div>
                  <span className="timeline-step-tag">PHASE {idx + 1}</span>
                </div>

                <div className="timeline-right-card">
                  <div className="timeline-card-header">
                    <h2 className="timeline-step-title">{step.title}</h2>
                    <span className="timeline-step-summary">{step.summary}</span>
                  </div>

                  <p className="timeline-step-details">{step.details}</p>

                  <div className="timeline-deliverable-box">
                    <span className="deliverable-label">KEY DELIVERABLE & OUTPUT</span>
                    <strong className="deliverable-text">
                      <CheckCircle2 size={16} className="check-icon" />
                      {step.receive}
                    </strong>
                  </div>
                </div>
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
