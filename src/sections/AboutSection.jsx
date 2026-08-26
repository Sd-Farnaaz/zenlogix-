import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-editorial-section" ref={sectionRef}>
      <div className="container about-grid">
        <div className="about-col-left about-reveal-item">
          <span className="about-number">01</span>
          <span className="about-label">BRAND POSITIONING</span>
        </div>

        <div className="about-col-right">
          <SectionHeading
            eyebrow="Who Zenlogix Is"
            title={
              <>
                Technology should solve complex business problems, <em>not create more of them.</em>
              </>
            }
            intro="Zenlogix Solutions is a digital technology studio focused on practical engineering. We help forward-thinking enterprises simplify operations, automate fragmented workflows, connect software ecosystems, and build high-performance web and mobile products."
            className="about-reveal-item"
          />

          <div className="about-values-banner about-reveal-item">
            <div className="value-pillar">
              <strong>Business First.</strong>
              <span>Grounded in actual operational goals.</span>
            </div>
            <div className="value-pillar">
              <strong>Modern Engineering.</strong>
              <span>Contemporary tools applied with judgment.</span>
            </div>
            <div className="value-pillar">
              <strong>Connected Systems.</strong>
              <span>Zero manual data entry or lost hand-offs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
