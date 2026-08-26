import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, Cpu, Layers, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { ThreeHeroCanvas } from '../components/ThreeHeroCanvas';

export function HeroSection({ go }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-eyebrow-tag',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          '.hero-heading-line',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(
          '.hero-body-text',
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.hero-action-buttons',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.5'
        )
        .fromTo(
          '.hero-canvas-frame',
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-capability-pills span',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-editorial-section" ref={heroRef}>
      {/* Editorial Grid */}
      <div className="container hero-grid-layout">
        {/* Text Content Column */}
        <div className="hero-content-col">
          {/* Eyebrow */}
          <div className="hero-eyebrow-tag">
            <span className="eyebrow-pulse" />
            <span className="eyebrow-text">ZENLOGIX SOLUTIONS — DIGITAL TECHNOLOGY PARTNER</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="hero-main-title">
            <span className="hero-heading-line">Building digital</span>
            <span className="hero-heading-line highlight-line">solutions</span>
            <span className="hero-heading-line">that move businesses</span>
            <span className="hero-heading-line">forward.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-body-text">
            We build practical, high-impact digital solutions across custom software development,
            CRM architecture, business automation, API integrations, web, mobile, and modern tech infrastructure.
          </p>

          {/* Capability Pills Bar */}
          <div className="hero-capability-pills">
            <span>Software Dev</span>
            <span className="pill-dot">•</span>
            <span>Zoho CRM</span>
            <span className="pill-dot">•</span>
            <span>Automation</span>
            <span className="pill-dot">•</span>
            <span>API Integrations</span>
            <span className="pill-dot">•</span>
            <span>Web & Mobile</span>
          </div>

          {/* Action CTAs */}
          <div className="hero-action-buttons">
            <Button href="/work" go={go} size="lg" cursorText="WORK">
              View Our Work
            </Button>
            <Button href="/contact" go={go} variant="dark" size="lg" cursorText="TALK">
              Let's Talk
            </Button>
          </div>
        </div>

        {/* 3D Visual Architecture Stage Column */}
        <div className="hero-visual-col">
          <div className="hero-canvas-frame">
            <ThreeHeroCanvas />

            {/* Live Systems Floating Telemetry Badge */}
            <div className="telemetry-card card-top">
              <div className="telemetry-header">
                <Cpu size={14} />
                <span>CONNECTIVITY</span>
              </div>
              <strong>Integrated Neural Network</strong>
              <small>CRM ↔ Web ↔ Automation</small>
            </div>

            <div className="telemetry-card card-bottom">
              <div className="telemetry-header">
                <Layers size={14} />
                <span>PRACTICAL TECH</span>
              </div>
              <strong>Business First Architecture</strong>
              <small>Zero Silos • Scalable Infrastructure</small>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Scroll Indicator */}
      <div className="container hero-scroll-bar">
        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE PORTFOLIO</span>
          <ArrowDown size={14} className="bounce-arrow" />
        </div>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
