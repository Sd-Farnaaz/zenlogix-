export const projects = [
  {
    id: 'manufacturing-zoho',
    number: '01',
    title: 'End-to-End Zoho Implementation for a Manufacturing Enterprise',
    shortTitle: 'Manufacturing Operating System',
    tagline: 'Connecting marketing, sales, inventory, accounting, and support into one unified operational backbone.',
    industry: 'Manufacturing',
    type: 'Enterprise CRM & Systems Automation',
    categories: ['CRM', 'Software', 'Automation'],
    description: 'A complete digital transformation connecting marketing lead generation, sales pipeline, inventory management, multi-entity accounting, and customer support into an automated end-to-end workflow.',
    services: ['Marketing Automation', 'Zoho CRM Architecture', 'Systems Integration', 'Inventory Workflow', 'Support Portal'],
    technologies: ['Zoho CRM', 'Zoho Inventory', 'Zoho Books', 'Zoho Desk', 'Zoho Analytics', 'REST APIs'],
    image: '', // Replaceable path
    badge: 'Enterprise Case Study',
    challenge: 'A growing manufacturing enterprise suffered from fragmented operations. Marketing campaigns were disconnected from sales reps, orders required double data entry into inventory systems, accounting reconciliation was delayed by weeks, and customer support had zero visibility into order status or warranty histories. Hand-offs were manual and errors were frequent.',
    solution: 'Zenlogix architected a seamless, unified Zoho ecosystem. We built automated lead routing from Google Ads & custom landing pages directly into Zoho CRM with Zoho SalesIQ live tracking. We integrated Zoho CRM with Zoho Inventory and Zoho Books for automated order-to-cash processing, real-time stock sync, and automated invoicing. Finally, we launched Zoho Desk with automated ticket routing tied directly to customer account histories.',
    architecture: [
      { step: '01', title: 'Lead Capture & Marketing', desc: 'Google Ads & landing pages push qualified leads directly into Zoho CRM with source attribution and instant SalesIQ chat history.' },
      { step: '02', title: 'Sales Pipeline & Quoting', desc: 'Custom deal stages with automated quotation generation, approval routing, and digital signature integration.' },
      { step: '03', title: 'Inventory & Order Fulfillment', desc: 'Automatic conversion of deals to sales orders, real-time stock allocation across warehouses, and picking list generation.' },
      { step: '04', title: 'Accounting & Invoicing', desc: 'Automated sync to Zoho Books for invoice generation, payment gateway reconciliation, and multi-currency reporting.' },
      { step: '05', title: 'Support & Maintenance', desc: 'Zoho Desk ticketing with direct access to product serial numbers, warranty terms, and purchase histories.' }
    ],
    flow: ['Lead Generation', 'CRM Pipeline', 'Sales Order', 'Inventory Sync', 'Books Accounting', 'Desk Support'],
    outcomes: [
      'Eliminated manual double-entry between sales, warehouse, and finance teams',
      'Accelerated lead-to-quote response time across enterprise sales reps',
      'Real-time inventory and order-to-cash visibility for executive leadership',
      '360-degree customer context available instantly to support engineers',
      'Automated multi-currency financial reporting and inventory valuation'
    ],
    features: [
      'Google Ads & Landing Page Webhooks',
      'Zoho SalesIQ Real-Time Visitor Tracking',
      'Automated Quotation & Sales Order Engine',
      'Multi-Warehouse Inventory Synchronization',
      'Automated Invoicing & Payment Webhooks',
      'Zoho Desk SLA Management & Routing'
    ]
  },
  {
    id: 'interior-design-crm',
    number: '02',
    title: 'CRM–Projects Integration for an Interior Design Studio',
    shortTitle: 'Design Studio Workflow Architecture',
    tagline: 'Bridging the gap between initial sales conversations and site execution.',
    industry: 'Interior Design',
    type: 'CRM & Project Workflow Architecture',
    categories: ['CRM', 'Automation', 'Software'],
    description: 'Connecting deal qualification, mood board approvals, contract signing, project milestone tracking, and site delivery into a seamless hand-off experience.',
    services: ['Process Engineering', 'Zoho CRM Customization', 'Zoho Projects Integration', 'Client Portal Setup'],
    technologies: ['Zoho CRM', 'Zoho Projects', 'Zoho Sign', 'Zoho WorkDrive', 'Webhooks'],
    image: '', // Replaceable path
    badge: 'Workflow Engineering',
    challenge: 'The interior design studio managed high-end client projects across multiple channels. Project briefs, client mood boards, material approvals, revision requests, contracts, and vendor procurement documents were scattered across email threads, personal cloud folders, and WhatsApp messages. When deals closed, project managers spent days reconstructing project context.',
    solution: 'Zenlogix built a unified CRM-to-Projects ecosystem. As sales deals advance in Zoho CRM, custom fields capture project specifications, floor plans, and budget tiers. Upon contract signing via Zoho Sign, an automated workflow instantly provisions a standardized Zoho Projects template, migrates all client assets from Zoho WorkDrive, assigns phase leads, and sets milestone schedules based on project scope.',
    architecture: [
      { step: '01', title: 'Design Consultation & Brief', desc: 'Custom CRM intake forms capture design preferences, space constraints, and preliminary estimates.' },
      { step: '02', title: 'Proposal & E-Signature', desc: 'Interactive proposal generation linked with Zoho Sign for immediate legally binding contract execution.' },
      { step: '03', title: 'Automated Project Provisioning', desc: 'Deal closure triggers automatic project creation with predefined milestone templates and task dependencies.' },
      { step: '04', title: 'Document & Revision Management', desc: 'Centralized WorkDrive repository linked to project tasks with approval workflows for clients and vendors.' },
      { step: '05', title: 'Milestone Tracking & Handover', desc: 'Real-time dashboard tracking project progress, vendor procurement statuses, and final client sign-off.' }
    ],
    flow: ['Consultation Deal', 'Proposal & Sign', 'Auto Project Provisioning', 'WorkDrive Centralization', 'Site Handover'],
    outcomes: [
      'Zero lost documentation during hand-off from sales team to project delivery leads',
      'Accelerated client approval turnarounds for mood boards and procurement budgets',
      'Complete executive pipeline visibility from pre-sales lead to active job site',
      'Repeatable, standardized project templates ensuring consistent delivery quality'
    ],
    features: [
      'Zoho CRM & Projects Automated Webhook Sync',
      'Zoho Sign Automated Document Triggering',
      'Structured WorkDrive Folder Template Generation',
      'Custom Executive Pipeline & Project Dashboards',
      'Vendor Procurement & Purchase Order Tracking',
      'Client Milestone Approval Workflows'
    ]
  },
  {
    id: 'retail-zoho',
    number: '03',
    title: 'E-commerce-Focused Zoho Implementation for a Retail Brand',
    shortTitle: 'Omnichannel Retail & Funnel Engine',
    tagline: 'Building the connected digital foundation to turn traffic into repeat brand loyalty.',
    industry: 'Retail & E-commerce',
    type: 'E-commerce Integration & Funnel Tracking',
    categories: ['Web', 'CRM', 'Automation'],
    description: 'An end-to-end e-commerce and CRM implementation connecting web store activity, checkout funnels, automated marketing campaigns, and customer retention workflows.',
    services: ['E-commerce Web Development', 'Funnel Tracking', 'Marketing Automation', 'Customer Data Integration'],
    technologies: ['Zoho CRM', 'Zoho Marketing Automation', 'Zoho SalesIQ', 'E-commerce APIs', 'Google Analytics 4'],
    image: '', // Replaceable path
    badge: 'E-commerce Case Study',
    challenge: 'An ambitious retail brand lacked visibility into its online customer journey. They could track overall revenue, but had zero insight into drop-offs between product views, cart additions, checkout steps, and post-purchase engagement. Repeat customers received generic blast emails instead of personalized product recommendations based on past purchase history.',
    solution: 'Zenlogix built an e-commerce-focused digital architecture connecting the web storefront to Zoho CRM and Zoho Marketing Automation. We implemented event-based tracking for key funnel actions, synced online customer profiles into unified CRM records, and automated segment-based email & SMS journeys triggered by cart abandonment, post-purchase follow-ups, and replenishment schedules.',
    architecture: [
      { step: '01', title: 'Web Storefront & Event Tracking', desc: 'Custom e-commerce layer capturing real-time user browsing, cart events, and search behavior.' },
      { step: '02', title: 'Customer Profile Aggregation', desc: 'Bi-directional sync of purchase history, lifetime value, and channel preferences into Zoho CRM.' },
      { step: '03', title: 'Funnel Analytics & Attribution', desc: 'Real-time dashboard mapping conversion drop-offs from initial ad click to final transaction.' },
      { step: '04', title: 'Automated Lifecycle Marketing', desc: 'Triggered messaging sequences for abandoned carts, order updates, and personalized product cross-sells.' },
      { step: '05', title: 'Customer Support Integration', desc: 'Unified view of past orders and live chat interactions inside Zoho SalesIQ and CRM.' }
    ],
    flow: ['Store Traffic', 'Behavioral Tracking', 'Checkout Conversion', 'CRM Profile Sync', 'Automated Retention'],
    outcomes: [
      'End-to-end multi-channel funnel visibility across all digital traffic sources',
      'Granular insight into customer drop-off points during product customization & checkout',
      'Increased repeat purchase rate through targeted automated customer lifecycle sequences',
      'Unified single-view customer profile across online store and support desk'
    ],
    features: [
      'Custom E-commerce API Sync with Zoho CRM',
      'Real-Time Abandoned Cart & Browse Webhooks',
      'Zoho Marketing Automation Behavioral Segments',
      'Zoho SalesIQ Live Chat with Customer Order History',
      'Omnichannel Revenue & Funnel Analytics Dashboards',
      'Automated Post-Purchase Feedback & Loyalty Triggers'
    ]
  }
];

export const capabilities = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    category: 'Web',
    headline: 'Digital experiences designed for absolute clarity and impact.',
    description: 'We design and engineer bespoke web applications and editorial web experiences that elevate brand positioning, clarify complex offerings, and convert visitors into high-value engagements.',
    deliverables: ['Custom Web Applications', 'Performant Front-end Engineering', 'CMS Architectures', 'Interactive Storytelling', 'Accessibility & SEO Optimization']
  },
  {
    id: 'software-dev',
    number: '02',
    title: 'Software Development',
    category: 'Software',
    headline: 'Purpose-built business applications engineered around actual workflows.',
    description: 'We design modern, reliable software solutions tailored to your operational realities. From internal management tools to complex SaaS products, we write clean, maintainable code built for scale.',
    deliverables: ['Custom Enterprise Portals', 'Cloud Application Architecture', 'Internal Workflow Systems', 'Database Architecture', 'RESTful API Engineering']
  },
  {
    id: 'mobile-apps',
    number: '03',
    title: 'Mobile Applications',
    category: 'Mobile',
    headline: 'High-utility mobile products that keep critical workflows accessible.',
    description: 'We build responsive, native-feeling mobile applications for iOS and Android that empower field teams, connect customers, and extend enterprise capabilities beyond the desktop.',
    deliverables: ['Cross-Platform Mobile Apps', 'Field Workforce Tools', 'Offline-First Applications', 'Push Notification Engines', 'Mobile UX/UI Design']
  },
  {
    id: 'zoho-crm',
    number: '04',
    title: 'Zoho & CRM Solutions',
    category: 'CRM',
    headline: 'Connected CRM architecture that turns customer data into operational action.',
    description: 'We architect, implement, and customize end-to-end Zoho ecosystems (CRM, Inventory, Books, Desk, Analytics, Projects) structured specifically around your business lifecycle.',
    deliverables: ['Custom Zoho CRM Architecture', 'Sales Pipeline Automation', 'Multi-System Integration', 'Deluge Scripting & Custom Functions', 'Executive Analytics Dashboards']
  },
  {
    id: 'automation',
    number: '05',
    title: 'Business Automation',
    category: 'Automation',
    headline: 'Replacing repetitive manual work with reliable, scalable automation.',
    description: 'We map operational bottlenecks and implement enterprise automations that handle routine tasks, eliminate human error, streamline approvals, and accelerate response times.',
    deliverables: ['Workflow Mapping & Optimization', 'Automated Lead Routing', 'Approval & SLA Engines', 'Document & E-Sign Automations', 'Cross-Departmental Triggers']
  },
  {
    id: 'integrations',
    number: '06',
    title: 'API & System Integrations',
    category: 'Integrations',
    headline: 'The connective neural network between your software ecosystem.',
    description: 'We eliminate data silos by engineering robust API integrations between web applications, CRMs, ERPs, payment gateways, databases, and third-party SaaS platforms.',
    deliverables: ['Custom REST & Webhook APIs', 'Bi-directional Data Synchronization', 'Payment & ERP Gateway Connectors', 'Legacy System Middleware', 'Data Transformation Pipelines']
  },
  {
    id: 'ui-ux',
    number: '07',
    title: 'UI/UX Design',
    category: 'Design',
    headline: 'Thoughtful interface design centered on user focus and decision speed.',
    description: 'We craft clean, modern digital products that prioritize visual hierarchy, cognitive ease, and functional elegance—ensuring users accomplish tasks with speed and confidence.',
    deliverables: ['Product Interface Design', 'UX Research & Wireframing', 'Design Systems & Component Libraries', 'Interactive Prototypes', 'User Testing & Refinement']
  },
  {
    id: 'ai-solutions',
    number: '08',
    title: 'AI-Powered Solutions',
    category: 'AI',
    headline: 'Pragmatic applications of artificial intelligence where leverage is real.',
    description: 'We integrate modern AI capabilities into everyday business tools—from intelligent document processing and automated customer triage to contextual search and predictive analytics.',
    deliverables: ['LLM & RAG Integration', 'Intelligent Document Parsing', 'Automated Lead Scoring', 'AI-Assisted Knowledge Bases', 'Conversational System Assistants']
  },
  {
    id: 'testing-qa',
    number: '09',
    title: 'Testing & Quality Assurance',
    category: 'Quality',
    headline: 'Dependable execution verified through rigorous validation standards.',
    description: 'We ensure software reliability, data integrity, and peak performance across devices through systematic manual testing, automated end-to-end validation, and security auditing.',
    deliverables: ['Automated End-to-End Testing', 'Security & Vulnerability Audits', 'Performance & Load Testing', 'Cross-Device Validation', 'UAT Process Management']
  }
];

export const principles = [
  {
    number: '01',
    title: 'Business First, Technology Second',
    description: 'We never write a line of code or select a tool until we thoroughly understand the underlying business model, operational constraints, and commercial objective.'
  },
  {
    number: '02',
    title: 'Contemporary Engineering Discipline',
    description: 'We build modern, modular systems using proven frameworks and architecture—focusing on maintainability, security, and long-term durability over passing trends.'
  },
  {
    number: '03',
    title: 'Architecture Built to Scale',
    description: 'Our digital solutions are designed to expand gracefully as your team grows, transaction volume increases, and business requirements evolve over time.'
  },
  {
    number: '04',
    title: 'Practical, Real-World Systems',
    description: 'We avoid over-engineered complexity. We design systems that actual team members can adopt comfortably, trust completely, and rely on daily.'
  },
  {
    number: '05',
    title: 'Transparent & Collaborative Process',
    description: 'We operate with total clarity. From scope definition to weekly development demos, you have complete visibility into progress, decisions, and timelines.'
  },
  {
    number: '06',
    title: 'Long-Term Strategic Partnership',
    description: 'Launch is just the beginning. We serve as a trusted technology partner, continuously optimizing, extending, and supporting your digital foundation.'
  }
];

export const technologies = {
  Frontend: [
    { name: 'React', desc: 'Modern reactive component architectures' },
    { name: 'Vite', desc: 'Ultra-fast build tooling and module bundling' },
    { name: 'JavaScript / TypeScript', desc: 'Type-safe robust frontend applications' },
    { name: 'GSAP & ScrollTrigger', desc: 'High-performance scroll and motion design' },
    { name: 'Three.js / WebGL', desc: 'Subtle 3D visual storytelling and interactions' }
  ],
  CRM: [
    { name: 'Zoho CRM', desc: 'Custom enterprise sales pipeline architecture' },
    { name: 'Zoho SalesIQ', desc: 'Real-time visitor tracking and live engagement' },
    { name: 'Zoho Projects', desc: 'Milestone, task, and team delivery management' },
    { name: 'Zoho Sign', desc: 'Automated legal contract e-signatures' }
  ],
  Operations: [
    { name: 'Zoho Inventory', desc: 'Multi-warehouse stock sync and order processing' },
    { name: 'Zoho Books', desc: 'Automated invoicing, reconciliation, and reporting' },
    { name: 'Zoho Desk', desc: 'Customer support ticketing and SLA workflows' },
    { name: 'Zoho Analytics', desc: 'Cross-system executive BI reporting' }
  ],
  Integrations: [
    { name: 'REST & Webhook APIs', desc: 'Seamless real-time data pipelines' },
    { name: 'Deluge & Cloud Functions', desc: 'Custom backend business logic execution' },
    { name: 'E-commerce Connectors', desc: 'Web store to CRM/ERP synchronization' },
    { name: 'Payment Gateways', desc: 'Stripe, PayPal, and regional processor sync' }
  ],
  Quality: [
    { name: 'Automated Testing', desc: 'End-to-end regression and workflow validation' },
    { name: 'Process Audit', desc: 'System security and performance optimization' },
    { name: 'UAT Frameworks', desc: 'Structured client acceptance validation' }
  ]
};

export const businessSolutions = [
  {
    id: 'sol-1',
    title: 'Sales-to-Operations Handoff Engine',
    problem: 'Closed deals get lost in email threads; project managers lack context; inventory isn\'t reserved in time.',
    solution: 'Automated workflow triggers when a deal hits "Closed Won" — provisioning project milestones, reserving stock in Inventory, and sending e-sign contracts.',
    outcome: 'Zero missed specs, 60% faster project kickoff, complete operational visibility.'
  },
  {
    id: 'sol-2',
    title: 'Unified Customer Data Platform (CDP)',
    problem: 'Marketing, sales, e-commerce, and support operate in separate tools with conflicting customer records.',
    solution: 'Centralized CRM synchronization bringing website events, past orders, support tickets, and communication logs into a single 360-degree profile.',
    outcome: 'Personalized customer journeys, faster support resolution, higher repeat orders.'
  },
  {
    id: 'sol-3',
    title: 'Multi-Channel Order & Inventory Sync',
    problem: 'Manual inventory updating leads to stock-outs, overselling across channels, and delayed financial reporting.',
    solution: 'Real-time API sync between online store front-end, central inventory database, warehouse pickers, and accounting ledger.',
    outcome: '100% stock accuracy across channels, automated invoicing, real-time margin visibility.'
  },
  {
    id: 'sol-4',
    title: 'Automated SLA & Support Triage',
    problem: 'High customer inquiry volume causes delayed responses, missed warranty details, and dissatisfied clients.',
    solution: 'Intelligent ticket routing based on account tier, automated customer history lookup, and SLA escalation alerts.',
    outcome: 'Rapid ticket response time, reduced support overhead, consistent SLA compliance.'
  }
];

export const industries = [
  { name: 'Manufacturing', desc: 'Connected lead-to-cash systems from marketing campaign to shop floor delivery.', icon: 'Factory' },
  { name: 'Interior Design', desc: 'Streamlined design briefs, e-sign contracts, and site execution workflows.', icon: 'Palette' },
  { name: 'Retail & E-commerce', desc: 'Unified customer profiles, behavioral funnel tracking, and automated retention.', icon: 'ShoppingBag' },
  { name: 'Fintech & Financial', desc: 'Secure, compliant data pipelines for complex transactional workflows.', icon: 'TrendingUp' },
  { name: 'Healthcare', desc: 'Dependable, privacy-conscious digital interfaces for high-precision teams.', icon: 'Activity' },
  { name: 'Real Estate', desc: 'Automated buyer lead routing, property matching, and pipeline analytics.', icon: 'Building' },
  { name: 'Logistics', desc: 'Real-time inventory tracking, dispatch updates, and multi-node sync.', icon: 'Truck' },
  { name: 'Education', desc: 'Intuitive portals for student admissions, course tracking, and administration.', icon: 'GraduationCap' }
];

export const processSteps = [
  {
    number: '01',
    title: 'Discover & Align',
    summary: 'Understanding your business, team, and current friction.',
    details: 'We dive deep into your existing operations, software stack, team bottlenecks, and business objectives. We map out manual workarounds, data silos, and user pain points to establish a clear baseline.',
    receive: 'Comprehensive Discovery Report & Problem Definition Matrix'
  },
  {
    number: '02',
    title: 'Define & Blueprint',
    summary: 'Architecting the solution and defining precise technical scope.',
    details: 'We map out system architecture, data models, integration webhooks, user journeys, and project milestones. We establish clear priorities so everyone agrees on what success looks like.',
    receive: 'Technical Solution Architecture & Implementation Roadmap'
  },
  {
    number: '03',
    title: 'Design & Prototype',
    summary: 'Structuring intuitive interfaces and frictionless workflows.',
    details: 'We craft user interface designs, custom CRM field layouts, automation logic flows, and interactive prototypes. We focus on clarity, cognitive speed, and usability for daily operators.',
    receive: 'Figma UI Wireframes & Workflow Logic Diagrams'
  },
  {
    number: '04',
    title: 'Build & Integrate',
    summary: 'Developing clean code, custom Zoho modules, and API connectors.',
    details: 'Our engineers build the solution in iterative sprints. We write custom Deluge scripts, develop performant React front-ends, establish API endpoints, and configure automated triggers with constant visibility.',
    receive: 'Functional Development Sprints & Live Sandbox Demos'
  },
  {
    number: '05',
    title: 'Test & Validate',
    summary: 'Rigorous end-to-end testing across edge cases and multi-system data.',
    details: 'We execute comprehensive quality assurance: validating data webhooks, testing error handling, verifying responsive layouts across devices, and auditing user permission roles.',
    receive: 'QA Validation Report & User Acceptance Test (UAT) Sign-off'
  },
  {
    number: '06',
    title: 'Deploy & Onboard',
    summary: 'Smooth production release with comprehensive team training.',
    details: 'We manage the live migration with minimal operational downtime. We conduct live team training sessions, provide video documentation, and deliver operator cheat sheets for immediate adoption.',
    receive: 'Live Production Release, System Documentation & Team Workshops'
  },
  {
    number: '07',
    title: 'Optimize & Scale',
    summary: 'Continuous refinement based on real-world usage data.',
    details: 'Post-launch, we monitor system performance, gather user feedback, and refine automations. As your business grows, we serve as an ongoing technology partner to extend capabilities.',
    receive: 'Monthly Optimization Reviews & Dedicated Technical Partnership'
  }
];
