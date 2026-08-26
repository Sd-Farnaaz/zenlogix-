import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { CapabilitiesSection } from '../sections/CapabilitiesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { SolutionsSection } from '../sections/SolutionsSection';
import { TechSection } from '../sections/TechSection';
import { IndustriesSection } from '../sections/IndustriesSection';
import { WhySection } from '../sections/WhySection';
import { ProcessPreviewSection } from '../sections/ProcessPreviewSection';
import { ContactCtaSection } from '../sections/ContactCtaSection';
import { Footer } from '../components/Footer';

export function Home({ go }) {
  return (
    <main className="page-home">
      <HeroSection go={go} />
      <AboutSection />
      <CapabilitiesSection go={go} />
      <ProjectsSection go={go} />
      <SolutionsSection />
      <TechSection />
      <IndustriesSection />
      <WhySection />
      <ProcessPreviewSection go={go} />
      <ContactCtaSection go={go} />
      <Footer go={go} />
    </main>
  );
}
