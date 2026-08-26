import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { Logo } from './Logo';

export function Navbar({ currentPath, go }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(mobileMenuRef.current, {
        clipPath: 'circle(150% at 90% 10%)',
        duration: 0.6,
        ease: 'power3.inOut'
      });
      gsap.fromTo(
        menuItemsRef.current.filter(Boolean),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power2.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(mobileMenuRef.current, {
        clipPath: 'circle(0% at 90% 10%)',
        duration: 0.5,
        ease: 'power3.inOut'
      });
    }
  }, [menuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (path) => {
    setMenuOpen(false);
    go(path);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <Logo onClick={handleNavClick} />

        {/* Desktop Links */}
        <nav className="desktop-nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <a
                key={link.path}
                href={link.path}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-actions">
          <a
            href="/contact"
            className="navbar-cta-btn"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/contact');
            }}
            data-cursor-text="TALK"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Hamburger Toggle */}
          <button
            className={`mobile-menu-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div className="mobile-menu-overlay" ref={mobileMenuRef}>
        <div className="mobile-menu-header container">
          <Logo light onClick={handleNavClick} />
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="mobile-menu-content container">
          <span className="mobile-menu-eyebrow">NAVIGATION</span>
          <nav className="mobile-nav-list">
            {navLinks.map((link, index) => (
              <a
                key={link.path}
                href={link.path}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className={`mobile-nav-item ${currentPath === link.path ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path);
                }}
              >
                <span className="mobile-nav-num">0{index + 1}</span>
                <span className="mobile-nav-label">{link.label}</span>
                <ArrowUpRight size={20} className="mobile-nav-arrow" />
              </a>
            ))}
          </nav>

          <div
            className="mobile-menu-footer"
            ref={(el) => (menuItemsRef.current[navLinks.length] = el)}
          >
            <p>Zenlogix Solutions — Digital Technology & Business Solutions</p>
            <a
              href="/contact"
              className="mobile-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/contact');
              }}
            >
              Start a Conversation <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
