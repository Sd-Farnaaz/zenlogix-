import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Contact({ go }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    'Last Name': '',
    Email: '',
    Company: '',
    Phone: '',
    LEADCF2: 'Software Development',
    LEADCF3: '$10k – $25k',
    Description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
                  Thank you for reaching out, <strong>{formData['Last Name']}</strong>. A technical lead from Zenlogix will review your requirements and respond within 24 hours.
                </p>
                <button
                  className="custom-button btn-variant-primary"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                className="contact-form-card"
                action="https://crm.zoho.in/crm/WebToLeadForm"
                method="POST"
              >
                <input type="hidden" name="xnQsjsdp" value="061ff6ff89b27ffe78e507e821c5eba18344a5d508662ae20aa7b57071ddc5ba" />
                <input type="hidden" name="zc_gad" value="" />
                <input type="hidden" name="xmIwtLD" value="66d88afca48407ab838d2ba802680598d13671fffdb9178918cd602276ae652ed32a195987b171f71dde3454369a154e" />
                <input type="hidden" name="actionType" value="TGVhZHM=" />
                <input type="hidden" name="returnURL" value="https://zenlogix.onrender.com/contact" />
                <h3 className="form-title">Project Intake Form</h3>

                <div className="form-row-2col">
                  <div className="form-field">
                    <label htmlFor="Last_Name">Full Name *</label>
                    <input
                      id="Last_Name"
                      name="Last Name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData['Last Name']}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="Email">Work Email *</label>
                    <input
                      id="Email"
                      name="Email"
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.Email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-field">
                    <label htmlFor="Company">Company Name</label>
                    <input
                      id="Company"
                      name="Company"
                      type="text"
                      placeholder="Company Ltd."
                      value={formData.Company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="Phone">Phone Number</label>
                    <input
                      id="Phone"
                      name="Phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.Phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-field">
                    <label htmlFor="LEADCF2">Project Category</label>
                    <select
                      id="LEADCF2"
                      name="LEADCF2"
                      value={formData.LEADCF2}
                      onChange={handleChange}
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Backend & API Development">Backend & API Development</option>
                      <option value="Frontend Development">Frontend Development</option>
                      <option value="App Development">App Development</option>
                      <option value="CRM & Zoho Solutions">CRM & Zoho Solutions</option>
                      <option value="Business & Workflow Automation">Business & Workflow Automation</option>
                      <option value="AI & Modern Technology">AI & Modern Technology</option>
                      <option value="Deployment & Engineering">Deployment & Engineering</option>
                      <option value="Testing & Maintenance">Testing & Maintenance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="LEADCF3">Estimated Budget</label>
                    <select
                      id="LEADCF3"
                      name="LEADCF3"
                      value={formData.LEADCF3}
                      onChange={handleChange}
                    >
                      <option value="$1k – $5k">$1k – $5k</option>
                      <option value="$5k – $10k">$5k – $10k</option>
                      <option value="$10k – $25k">$10k – $25k</option>
                      <option value="$25k – $50k">$25k – $50k</option>
                      <option value="$50k – $100k">$50k – $100k</option>
                      <option value="$100k+">$100k+</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="form-field full-width">
                  <label htmlFor="Description">Project Context / Requirements *</label>
                  <textarea
                    id="Description"
                    name="Description"
                    rows={5}
                    required
                    placeholder="Describe your current setup, challenges, goals, or specifications..."
                    value={formData.Description}
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
