import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Check, ChevronDown, Plus } from 'lucide-react';
import gsap from 'gsap';
import { capabilities } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export function CapabilitiesSection({ go }) {
  const [activeCap, setActiveCap] = useState(capabilities[0].id);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.capability-row-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
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
    <section className="capabilities-editorial-section" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          eyebrow="What Zenlogix Builds"
          title={
            <>
              The right digital solution is <em>rarely off the shelf.</em>
            </>
          }
          intro="From bespoke web applications and cross-platform mobile products to end-to-end Zoho CRM architecture and business automation engines, we bring business discipline to every build."
        />

        {/* Capabilities Interactive Editorial List */}
        <div className="capabilities-editorial-list">
          {capabilities.map((cap) => {
            const isOpen = activeCap === cap.id;
            return (
              <div
                key={cap.id}
                className={`capability-row-item ${isOpen ? 'is-open' : ''}`}
                onClick={() => setActiveCap(isOpen ? null : cap.id)}
                data-cursor-text={isOpen ? 'CLOSE' : 'OPEN'}
              >
                {/* Header Row */}
                <div className="row-header">
                  <span className="row-num">{cap.number}</span>
                  <h3 className="row-title">{cap.title}</h3>
                  <span className="row-category">{cap.category}</span>
                  <div className="row-toggle-icon">
                    <Plus size={20} className={`plus-icon ${isOpen ? 'rotate' : ''}`} />
                  </div>
                </div>

                {/* Expandable Content Area */}
                {isOpen && (
                  <div className="row-expandable-content">
                    <div className="expand-grid">
                      <div className="expand-main">
                        <h4 className="expand-headline">{cap.headline}</h4>
                        <p className="expand-desc">{cap.description}</p>
                      </div>

                      <div className="expand-deliverables">
                        <span className="deliverables-title">DELIVERABLES & OUTPUTS</span>
                        <ul className="deliverables-list">
                          {cap.deliverables.map((item) => (
                            <li key={item}>
                              <Check size={14} className="check-icon" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
