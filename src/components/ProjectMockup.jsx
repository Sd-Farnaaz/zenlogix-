import React from 'react';
import { ArrowUpRight, CheckCircle2, Cpu, Database, Layers, RefreshCw, Server, ShieldCheck, Zap } from 'lucide-react';

export function ProjectMockup({ project, className = '' }) {
  // If an image URL is provided in the data file, render the image
  if (project.image && project.image.trim() !== '') {
    return (
      <div className={`project-real-image-container ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          className="project-real-image"
          loading="lazy"
        />
      </div>
    );
  }

  // Generative UI mockups for empty image paths
  return (
    <div className={`project-mockup-frame ${className} mockup-${project.id}`}>
      {/* Mockup Header Bar */}
      <div className="mockup-header">
        <div className="mockup-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="mockup-address">
          <span className="address-lock">https://</span>
          zenlogix.systems/workspace/{project.id}
        </div>
        <div className="mockup-status-badge">
          <span className="pulse-dot" /> LIVE INTEGRATION
        </div>
      </div>

      {/* Mockup Content Specific to Project Type */}
      <div className="mockup-body">
        {project.id === 'manufacturing-zoho' && (
          <div className="mockup-dashboard manufacturing-mockup">
            <div className="mockup-row mockup-top-stats">
              <div className="stat-card">
                <small>CRITICAL WORKFLOW</small>
                <strong>Order-to-Cash</strong>
                <span className="stat-status positive">+42% Speed</span>
              </div>
              <div className="stat-card">
                <small>ZOHO INTEGRATION</small>
                <strong>CRM ↔ Inventory</strong>
                <span className="stat-status active">Real-Time Sync</span>
              </div>
              <div className="stat-card">
                <small>RECONCILIATION</small>
                <strong>Zoho Books</strong>
                <span className="stat-status positive">Automated</span>
              </div>
            </div>

            <div className="mockup-pipeline-visual">
              <div className="pipeline-step active">
                <Zap size={14} />
                <span>Google Ads</span>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step active">
                <Cpu size={14} />
                <span>Zoho CRM</span>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step active">
                <Server size={14} />
                <span>Inventory</span>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step active">
                <ShieldCheck size={14} />
                <span>Books & Support</span>
              </div>
            </div>

            <div className="mockup-code-peek">
              <code>{`// Zenlogix Deluge Trigger: Sales Order Auto-Provisioning
void autoSyncOrderToInventory(Bigint dealId) {
  deal = zoho.crm.getRecordById("Deals", dealId);
  soMap = {"Customer": deal.get("Account_Name"), "Items": deal.get("Products")};
  response = zoho.inventory.createRecord("SalesOrders", soMap);
}`}</code>
            </div>
          </div>
        )}

        {project.id === 'interior-design-crm' && (
          <div className="mockup-dashboard design-mockup">
            <div className="mockup-row mockup-top-stats">
              <div className="stat-card">
                <small>SALES HANDOFF</small>
                <strong>Deal → Projects</strong>
                <span className="stat-status positive">0% Info Loss</span>
              </div>
              <div className="stat-card">
                <small>CLIENT APPROVAL</small>
                <strong>Zoho Sign</strong>
                <span className="stat-status active">E-Sign Auto</span>
              </div>
              <div className="stat-card">
                <small>ASSET REPOSITORY</small>
                <strong>WorkDrive</strong>
                <span className="stat-status positive">Centralized</span>
              </div>
            </div>

            <div className="mockup-stage-flow">
              <div className="stage-item completed">
                <CheckCircle2 size={13} /> Initial Consultation Brief
              </div>
              <div className="stage-item completed">
                <CheckCircle2 size={13} /> Concept & Mood Board Sign-off
              </div>
              <div className="stage-item active">
                <RefreshCw size={13} className="spin" /> E-Signature Contract Execution
              </div>
              <div className="stage-item upcoming">
                <Layers size={13} /> Auto-Provisioned Project Board
              </div>
            </div>
          </div>
        )}

        {project.id === 'retail-zoho' && (
          <div className="mockup-dashboard retail-mockup">
            <div className="mockup-row mockup-top-stats">
              <div className="stat-card">
                <small>FUNNEL VISIBILITY</small>
                <strong>Omnichannel</strong>
                <span className="stat-status positive">100% Tracked</span>
              </div>
              <div className="stat-card">
                <small>LIVE ENGAGEMENT</small>
                <strong>Zoho SalesIQ</strong>
                <span className="stat-status active">Behavioral</span>
              </div>
              <div className="stat-card">
                <small>RETENTION ENGINE</small>
                <strong>Marketing Auto</strong>
                <span className="stat-status positive">Cart Recovery</span>
              </div>
            </div>

            <div className="mockup-funnel-bar">
              <div className="funnel-level level-1" style={{ width: '100%' }}>
                <span>STORE TRAFFIC — 100%</span>
              </div>
              <div className="funnel-level level-2" style={{ width: '74%' }}>
                <span>PRODUCT VIEWS — 74%</span>
              </div>
              <div className="funnel-level level-3" style={{ width: '48%' }}>
                <span>CART ADDITIONS — 48%</span>
              </div>
              <div className="funnel-level level-4" style={{ width: '32%' }}>
                <span>CHECKOUT COMPLETED — 32%</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'logistics-erp' && (
          <div className="mockup-dashboard logistics-mockup">
            <div className="mockup-row mockup-top-stats">
              <div className="stat-card">
                <small>CUSTOM SOFTWARE</small>
                <strong>Freight ERP</strong>
                <span className="stat-status positive">35% Idle Saved</span>
              </div>
              <div className="stat-card">
                <small>LIVE GPS TELEMETRY</small>
                <strong>WebSockets</strong>
                <span className="stat-status active">Real-Time Sync</span>
              </div>
              <div className="stat-card">
                <small>DISPATCH MATCH</small>
                <strong>AI Route Match</strong>
                <span className="stat-status positive">Automated</span>
              </div>
            </div>

            <div className="mockup-pipeline-visual">
              <div className="pipeline-step active">
                <Server size={14} />
                <span>API Intake</span>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step active">
                <Cpu size={14} />
                <span>Smart Dispatch</span>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step active">
                <Zap size={14} />
                <span>GPS Telemetry</span>
              </div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step active">
                <CheckCircle2 size={14} />
                <span>Digital ePOD</span>
              </div>
            </div>
          </div>
        )}

        {project.id === 'healthcare-portal' && (
          <div className="mockup-dashboard healthcare-mockup">
            <div className="mockup-row mockup-top-stats">
              <div className="stat-card">
                <small>CUSTOM WEB PORTAL</small>
                <strong>HIPAA Secure</strong>
                <span className="stat-status positive">Encrypted DB</span>
              </div>
              <div className="stat-card">
                <small>EHR INTEGRATION</small>
                <strong>FHIR / HL7 API</strong>
                <span className="stat-status active">0 Transcribe Errors</span>
              </div>
              <div className="stat-card">
                <small>CHECK-IN SPEED</small>
                <strong>Digital Intake</strong>
                <span className="stat-status positive">&lt; 3 Mins</span>
              </div>
            </div>

            <div className="mockup-stage-flow">
              <div className="stage-item completed">
                <CheckCircle2 size={13} /> Encrypted Digital Patient Intake
              </div>
              <div className="stage-item completed">
                <CheckCircle2 size={13} /> FHIR Health Record Sync
              </div>
              <div className="stage-item active">
                <RefreshCw size={13} className="spin" /> Telehealth Video Session
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mockup Footer Caption */}
      <div className="mockup-footer">
        <span className="mockup-caption">{project.number} / {project.industry} System Architecture</span>
        <span className="mockup-view-indicator">
          Interactive Case Study <ArrowUpRight size={14} />
        </span>
      </div>
    </div>
  );
}
