import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Contact({ go }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Software Development',
    budget: '$10k – $25k',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      <main className="page-main contact-page">
        <div className="container contact-editorial-layout">
          {/* Left Column Copy */}
          <div className="contact-info-col">
            <div className="section-eyebrow">
              <span className="eyebrow-dot" />
              <span>START A CONVERSATION</span>
            </div>
            <h1 className="page-title">
              Let's make something <em>useful.</em>
            </h1>
            <p className="page-intro-copy">
              Tell us about what you're trying to build or solve. Whether you need an end-to-end Zoho CRM implementation, custom software application, or enterprise automation, we're ready to align on strategy and architecture.
            </p>

            <div className="contact-context-card">
              <span className="card-label">HELPFUL TO INCLUDE IN YOUR MESSAGE</span>
              <ul>
                <li>• What current operational problem or data friction you are trying to solve</li>
                <li>• What software tools or systems are currently in place</li>
                <li>• Who the primary end-users or internal team operators will be</li>
                <li>• Target timeline or launch expectations</li>
              </ul>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="contact-form-col">
            {formSubmitted ? (
              <div className="contact-success-state">
                <CheckCircle2 size={48} className="success-icon" />
                <h2>Message Received</h2>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>. A technical lead from Zenlogix will review your requirements and respond within 24 hours.
                </p>
                <button
                  className="custom-button btn-variant-primary"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="contact-form-card" onSubmit={handleSubmit}>
                <h3 className="form-title">Project Intake Form</h3>

                <div className="form-row-2col">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Work Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-field">
                    <label htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Company Ltd."
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-field">
                    <label htmlFor="projectType">Project Category</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="Zoho & CRM Solutions">Zoho & CRM Solutions</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="API & System Integration">API & System Integration</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile Applications">Mobile Applications</option>
                      <option value="Other Technology Request">Other Technology Request</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="budget">Estimated Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="Under $10k">Under $10k</option>
                      <option value="$10k – $25k">$10k – $25k</option>
                      <option value="$25k – $50k">$25k – $50k</option>
                      <option value="$50k+">$50k+</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                <div className="form-field full-width">
                  <label htmlFor="message">Project Context / Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Describe your current setup, challenges, goals, or specifications..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="custom-button btn-variant-primary btn-size-lg submit-btn">
                  <span>Start the Conversation</span>
                  <ArrowUpRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer go={go} />
    </>
  );
}
