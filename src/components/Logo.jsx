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
      <div
        className="logo-svg-wrapper"
        style={{
          width: 32,
          height: 32,
          minWidth: 32,
          minHeight: 32,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 46"
          width="32"
          height="32"
          className="logo-icon-svg"
          style={{
            width: '32px',
            height: '32px',
            maxWidth: '32px',
            maxHeight: '32px',
            display: 'block'
          }}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
          />
        </svg>
      </div>
      <div className="logo-text-group">
        <span className="logo-title">ZENLOGIX</span>
        <span className="logo-subtitle">SOLUTIONS</span>
      </div>
    </a>
  );
}
