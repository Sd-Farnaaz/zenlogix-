import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/Button';

export function ProjectsSection({ go }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card-wrapper',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-editorial-section" ref={sectionRef}>
      <div className="container">
        <div className="projects-header-row">
          <SectionHeading
            eyebrow="Selected Work & Case Studies"
            title={
              <>
                Real digital solutions built for <em>real business challenges.</em>
              </>
            }
            intro="Explore how Zenlogix designs, architects, and implements scalable digital systems across manufacturing, interior design, retail, and enterprise workflows."
          />

          <div className="header-action-wrapper">
            <Button href="/work" go={go} variant="outline" cursorText="ALL">
              View All Case Studies
            </Button>
          </div>
        </div>

        {/* Featured Projects Showcase Layout */}
        <div className="projects-editorial-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className="project-card-wrapper">
              <ProjectCard project={project} featured={idx === 0} go={go} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
