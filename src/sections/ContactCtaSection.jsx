import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

export function ContactCtaSection({ go }) {
  return (
    <section className="contact-editorial-cta">
      <div className="container cta-banner-inner">
        <div className="cta-left-content">
          <div className="cta-eyebrow">
            <span className="eyebrow-dot" />
            READY WHEN YOU ARE
          </div>
          <h2 className="cta-main-heading">
            Have something<br />
            <em>worth building?</em>
          </h2>
        </div>

        <div className="cta-right-content">
          <p className="cta-description">
            Tell us about your business challenges, current software stack, or upcoming digital initiative. Let's find the right architecture and solution to move forward.
          </p>
          <div className="cta-button-wrapper">
            <Button href="/contact" go={go} variant="dark" size="lg" cursorText="TALK">
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
