import React from 'react';
import { ArrowUpRight, Globe, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export function Footer({ go }) {
  const handleNav = (path) => (e) => {
    e.preventDefault();
    go(path);
  };

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* Brand Column */}
        <div className="footer-col footer-brand-col">
          <Logo light onClick={go} />
          <p className="footer-tagline">
            Zenlogix Solutions builds practical digital solutions across software development,
            CRM, automation, integrations, web, mobile, and modern technology.
          </p>
          <div className="footer-meta-info">
            <span className="footer-location">
              <MapPin size={14} /> Digital Solutions & Systems Architecture
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-list">
              <li><a href="/" onClick={handleNav('/')}>Home</a></li>
              <li><a href="/work" onClick={handleNav('/work')}>Selected Work</a></li>
              <li><a href="/process" onClick={handleNav('/process')}>Our Process</a></li>
              <li><a href="/contact" onClick={handleNav('/contact')}>Start a Conversation</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">CAPABILITIES</h4>
            <ul className="footer-list">
              <li><span>Web Development</span></li>
              <li><span>Software Development</span></li>
              <li><span>Zoho & CRM Solutions</span></li>
              <li><span>Business Automation</span></li>
              <li><span>API & Systems Integration</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">CASE STUDIES</h4>
            <ul className="footer-list">
              <li>
                <a href="/work/manufacturing-zoho" onClick={handleNav('/work/manufacturing-zoho')}>
                  Manufacturing Zoho Implementation <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="/work/interior-design-crm" onClick={handleNav('/work/interior-design-crm')}>
                  Interior Design CRM-Projects <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="/work/retail-zoho" onClick={handleNav('/work/retail-zoho')}>
                  Retail E-commerce Implementation <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="container footer-bottom-bar">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Zenlogix Solutions. All rights reserved.
        </div>
        <div className="footer-statement">
          Practical Technology • Connected Systems • Business Impact
        </div>
      </div>
    </footer>
  );
}
