import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Cpu, Database, Network, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import { businessSolutions } from '../data/portfolioData';

export function BusinessSolutionsDiagram() {
  const [activeSolution, setActiveSolution] = useState(businessSolutions[0].id);

  const current = businessSolutions.find((s) => s.id === activeSolution) || businessSolutions[0];

  return (
    <div className="solutions-diagram-container">
      {/* Selector Tabs */}
      <div className="solutions-tabs">
        {businessSolutions.map((sol) => (
          <button
            key={sol.id}
            className={`solution-tab-btn ${activeSolution === sol.id ? 'active' : ''}`}
            onClick={() => setActiveSolution(sol.id)}
          >
            <span className="tab-id">{sol.id.replace('sol-', '0')}</span>
            <span className="tab-title">{sol.title}</span>
          </button>
        ))}
      </div>

      {/* Dynamic Diagram Visualizer */}
      <div className="diagram-stage">
        {/* Step 1: Problem / Input */}
        <div className="stage-card stage-problem">
          <div className="card-badge badge-problem">01 / Friction Point</div>
          <h3>Business Challenge</h3>
          <p>{current.problem}</p>
          <div className="stage-icon">
            <Network size={20} />
          </div>
        </div>

        {/* Connector Line 1 */}
        <div className="diagram-connector">
          <svg className="connector-svg" viewBox="0 0 100 40">
            <path d="M 0 20 Q 50 0 100 20" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
          <div className="pulse-particle" />
        </div>

        {/* Step 2: Zenlogix Engine / Architecture */}
        <div className="stage-card stage-engine">
          <div className="card-badge badge-engine">02 / Zenlogix Solution</div>
          <h3>Connected Automation</h3>
          <p>{current.solution}</p>
          <div className="engine-node-list">
            <span><Cpu size={12} /> Real-time API Webhooks</span>
            <span><Workflow size={12} /> Automated Logic Triggers</span>
            <span><Database size={12} /> Multi-System Sync</span>
          </div>
        </div>

        {/* Connector Line 2 */}
        <div className="diagram-connector">
          <svg className="connector-svg" viewBox="0 0 100 40">
            <path d="M 0 20 Q 50 40 100 20" stroke="currentColor" fill="none" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
          <div className="pulse-particle" />
        </div>

        {/* Step 3: Result / Commercial Impact */}
        <div className="stage-card stage-outcome">
          <div className="card-badge badge-outcome">03 / Business Outcome</div>
          <h3>Measured Impact</h3>
          <p>{current.outcome}</p>
          <div className="outcome-check">
            <CheckCircle size={16} /> Verified Operational Result
          </div>
        </div>
      </div>
    </div>
  );
}
