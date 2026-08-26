import React from 'react';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  align = 'left',
  className = ''
}) {
  return (
    <div className={`section-heading-block ${dark ? 'heading-dark' : ''} align-${align} ${className}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          <span className="eyebrow-dot" />
          <span className="eyebrow-text">{eyebrow}</span>
        </div>
      )}

      {title && <h2 className="section-title">{title}</h2>}

      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
