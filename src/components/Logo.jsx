import React from 'react';

export function Logo({ light = false, className = '', onClick }) {
  return (
    <a
      href="/"
      className={`brand-logo ${light ? 'brand-logo-light' : ''} ${className}`}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick('/');
        }
      }}
      aria-label="Zenlogix Solutions Home"
    >
      <div className="logo-img-wrapper">
        <img
          src="/logo.png"
          alt="Zenlogix Solutions Logo"
          className="brand-logo-img"
        />
      </div>
      <div className="logo-text-group">
        <span className="logo-title">Zenlogix</span>
        <span className="logo-subtitle">Solutions</span>
      </div>
    </a>
  );
}
