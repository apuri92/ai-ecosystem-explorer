import type { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    accentColor: '#2563EB',
    tagline: 'Connected care journeys powered by intelligent healthcare ecosystems.',
    description: 'Turn patient experiences into orchestrated care pathways, digitally enabled by data, devices, and trusted ISV partners.',
    heroStats: ['9 Care Touchpoints', '40+ Digital Integrations', 'Patient-first, provider-ready'],
    journey: [
      {
        stepNumber: 1,
        title: 'Discover & Engage',
        description: 'Drive awareness with personalized patient outreach and front-door triage across digital and physical channels.',
        keyExperiences: ['Virtual pre-screening', 'Remote appointment scheduling', 'Care navigation support'],
        poweredBySolutions: ['Patient portals', 'Digital front door', 'Conversational AI']
      },
      {
        stepNumber: 2,
        title: 'Assess & Diagnose',
        description: 'Streamline intake and diagnostics by unifying clinical workflows and patient-generated data.',
        keyExperiences: ['Telehealth evaluations', 'Device-based vitals capture', 'Pre-visit symptom collection'],
        poweredBySolutions: ['EHR connectors', 'Telemedicine', 'Clinical decision support']
      },
      {
        stepNumber: 3,
        title: 'Treat & Coordinate',
        description: 'Deliver coordinated care with task orchestration, care plans, and multidisciplinary collaboration.',
        keyExperiences: ['Care team coordination', 'Digital care plans', 'Order tracking and integration'],
        poweredBySolutions: ['Care management', 'Workflow automation', 'Clinical collaboration']
      },
      {
        stepNumber: 4,
        title: 'Empower & Monitor',
        description: 'Keep patients on track through remote monitoring, engagement nudges, and outcome tracking.',
        keyExperiences: ['Chronic condition monitoring', 'Adherence reminders', 'Patient engagement journeys'],
        poweredBySolutions: ['Remote monitoring', 'Patient engagement', 'Analytics dashboards']
      },
      {
        stepNumber: 5,
        title: 'Measure & Optimize',
        description: 'Measure outcomes across the continuum to improve quality, reduce cost, and scale effective programs.',
        keyExperiences: ['Population health analytics', 'Quality score tracking', 'Value-based care insights'],
        poweredBySolutions: ['Outcome analytics', 'Risk stratification', 'Value-based reporting']
      }
    ],
    businessOutcomes: [
      {
        icon: 'heart-pulse',
        title: 'Higher patient engagement',
        description: 'More meaningful touchpoints, fewer missed appointments, and better care adherence.'
      },
      {
        icon: 'shield-check',
        title: 'Faster clinician decisions',
        description: 'Integrated workflows help care teams act on the right data at the right time.'
      },
      {
        icon: 'trending-up',
        title: 'Better value outcomes',
        description: 'Reduced readmissions and improved population health performance.'
      }
    ],
    portfolioTable: [
      {
        touchpoint: 'Patient Access',
        icon: 'users',
        portfolioPartners: ['Digital front door', 'Omni-channel outreach'],
        capabilitiesDelivered: ['Appointment booking', 'Intake capture', 'Patient triage'],
        outcomesEnabled: ['Faster access', 'Higher conversion', 'Improved satisfaction']
      },
      {
        touchpoint: 'Clinical Workflow',
        icon: 'clipboard-list',
        portfolioPartners: ['EHR integration', 'Clinical automation'],
        capabilitiesDelivered: ['Order orchestration', 'Care team tasking', 'Evidence-based guidance'],
        outcomesEnabled: ['Reduced clinician burden', 'Fewer errors', 'Faster treatment']
      },
      {
        touchpoint: 'Remote Care',
        icon: 'watch',
        portfolioPartners: ['Connected devices', 'Telehealth platform'],
        capabilitiesDelivered: ['Vitals monitoring', 'Teleconsultation', 'Patient coaching'],
        outcomesEnabled: ['Lower cost of care', 'Improved compliance', 'Better chronic outcomes']
      },
      {
        touchpoint: 'Patient Engagement',
        icon: 'message-circle',
        portfolioPartners: ['Engagement journeys', 'Mobile experience'],
        capabilitiesDelivered: ['Personalized nudges', 'Education content', 'Two-way messaging'],
        outcomesEnabled: ['Higher retention', 'Stronger loyalty', 'Better outcomes']
      },
      {
        touchpoint: 'Analytics & Insights',
        icon: 'bar-chart-3',
        portfolioPartners: ['Population analytics', 'Quality reporting'],
        capabilitiesDelivered: ['Outcome measurement', 'Risk stratification', 'Performance dashboards'],
        outcomesEnabled: ['Actionable insights', 'Improved quality', 'Stronger margins']
      }
    ],
    solutionDescriptions: {
      'Patient portals': 'Secure patient-facing portals that centralize scheduling, records, and communications.',
      'Digital front door': 'A modern entry point that makes self-service and inbound outreach seamless.',
      'Conversational AI': 'AI-driven assistants that qualify prospects and route patients efficiently.',
      'EHR connectors': 'Integrated connections to core healthcare systems to eliminate data silos.',
      'Telemedicine': 'Virtual care tools that let providers assess patients anytime, anywhere.',
      'Clinical decision support': 'Guidance systems that support diagnostics with evidence-based insights.',
      'Care management': 'Coordinated care pathways and care team collaboration tools.',
      'Workflow automation': 'Automated task routing and approvals for consistent care execution.',
      'Clinical collaboration': 'Shared workspaces for care teams to coordinate across specialties.',
      'Remote monitoring': 'Continuous remote data collection to keep care plans on track.',
      'Patient engagement': 'Experience-driven journeys that keep patients informed and involved.',
      'Analytics dashboards': 'Self-service dashboards that translate care metrics into action.',
      'Outcome analytics': 'Metrics that measure health outcomes and program performance.',
      'Risk stratification': 'Tools that identify high-priority populations for proactive care.',
      'Value-based reporting': 'Reports that align performance to value-based care goals.'
    }
  },
  {
    id: 'banking',
    name: 'Banking',
    accentColor: '#F97316',
    tagline: 'Modern banking journeys that streamline customer moments and operational efficiency.',
    description: 'Showcase how banks can deliver digital-first experiences, faster decisions, and stronger risk controls with an ecosystem of fintech solutions.',
    heroStats: ['8 Banking Touchpoints', '30+ Partner Integrations', 'Secure, agile, compliant'],
    journey: [
      {
        stepNumber: 1,
        title: 'Acquire & Onboard',
        description: 'Create low-friction customer acquisition with seamless onboarding and digital identity verification.',
        keyExperiences: ['Instant account opening', 'KYC document capture', 'Guided onboarding journeys'],
        poweredBySolutions: ['Digital onboarding', 'Identity verification', 'Customer analytics']
      },
      {
        stepNumber: 2,
        title: 'Transact & Serve',
        description: 'Deliver frictionless payments and responsive servicing across channels.',
        keyExperiences: ['Real-time payments', 'Smart dispute handling', 'Omni-channel support'],
        poweredBySolutions: ['Payments hub', 'Case management', 'Chat and bots']
      },
      {
        stepNumber: 3,
        title: 'Protect & Comply',
        description: 'Safeguard accounts and stay compliant with intelligent fraud detection and audit-ready controls.',
        keyExperiences: ['Fraud scoring', 'Regulatory monitoring', 'Secure authentication'],
        poweredBySolutions: ['Fraud detection', 'Compliance automation', 'Identity security']
      },
      {
        stepNumber: 4,
        title: 'Grow & Cross-sell',
        description: 'Increase customer share-of-wallet with contextual offers and personalised advisory moments.',
        keyExperiences: ['Personalized offers', 'Advisory nudges', 'Lifecycle campaigns'],
        poweredBySolutions: ['CRM orchestration', 'Customer intelligence', 'Marketing automation']
      },
      {
        stepNumber: 5,
        title: 'Measure & Optimize',
        description: 'Use continuous insights to improve conversion, retention, and product profitability.',
        keyExperiences: ['Performance dashboards', 'Channel mix analysis', 'Revenue optimisation'],
        poweredBySolutions: ['Business intelligence', 'Revenue analytics', 'Experience measurement']
      }
    ],
    businessOutcomes: [
      {
        icon: 'shield-check',
        title: 'Faster approvals with lower risk',
        description: 'Automate decisioning to approve the right customers quickly and safely.'
      },
      {
        icon: 'trending-up',
        title: 'Higher customer lifetime value',
        description: 'Personalized journeys and proactive outreach drive stronger revenue growth.'
      },
      {
        icon: 'sparkles',
        title: 'More efficient operations',
        description: 'Reduce manual work with automated workflows and straight-through processing.'
      }
    ],
    portfolioTable: [
      {
        touchpoint: 'Acquisition',
        icon: 'user-plus',
        portfolioPartners: ['Digital onboarding', 'Identity verification'],
        capabilitiesDelivered: ['Account creation', 'KYC automation', 'Digital identity'],
        outcomesEnabled: ['Faster conversion', 'Reduced abandonment', 'Better risk capture']
      },
      {
        touchpoint: 'Payments',
        icon: 'credit-card',
        portfolioPartners: ['Payments hub', 'Real-time settlement'],
        capabilitiesDelivered: ['Instant transfers', 'Cross-border payments', 'Payment reconciliation'],
        outcomesEnabled: ['Lower transaction costs', 'Improved cash flow', 'Better customer experience']
      },
      {
        touchpoint: 'Risk & Fraud',
        icon: 'shield-alert',
        portfolioPartners: ['Fraud detection', 'Compliance automation'],
        capabilitiesDelivered: ['Behavioral analytics', 'Alerts and case management', 'Audit trails'],
        outcomesEnabled: ['Stronger protection', 'Fewer false positives', 'Faster investigations']
      },
      {
        touchpoint: 'Engagement',
        icon: 'message-square',
        portfolioPartners: ['CRM orchestration', 'Marketing automation'],
        capabilitiesDelivered: ['Campaign personalization', 'Lifecycle messaging', 'Customer analytics'],
        outcomesEnabled: ['Higher retention', 'Stronger loyalty', 'More relevant offers']
      },
      {
        touchpoint: 'Insights',
        icon: 'pie-chart',
        portfolioPartners: ['Business intelligence', 'Experience measurement'],
        capabilitiesDelivered: ['Revenue tracking', 'Channel performance', 'Customer insights'],
        outcomesEnabled: ['Smarter decisions', 'Faster optimisation', 'Clearer ROI']
      }
    ],
    solutionDescriptions: {
      'Digital onboarding': 'A frictionless account opening experience with guided forms and identity capture.',
      'Identity verification': 'Secure KYC, AML, and identity checks that protect compliance and trust.',
      'Customer analytics': 'Customer insights that help personalize offers and boost acquisition.',
      'Payments hub': 'A unified payment engine that supports real-time, domestic, and cross-border flows.',
      'Case management': 'Structured servicing tools to manage disputes, inquiries, and escalations.',
      'Chat and bots': 'Conversational self-service for faster customer support and digital engagement.',
      'Fraud detection': 'AI-powered monitoring that catches suspicious behavior before it impacts customers.',
      'Compliance automation': 'Controls and workflows that keep regulatory reporting in sync with operations.',
      'Identity security': 'Authentication and access controls that protect accounts across channels.',
      'CRM orchestration': 'A coordinated system to deliver consistent, contextual customer experiences.',
      'Customer intelligence': 'Insights into customer needs and behaviours for smarter cross-sell.',
      'Marketing automation': 'Campaign execution and personalization at scale across digital channels.',
      'Business intelligence': 'Operational reporting that connects financial and customer metrics.',
      'Revenue analytics': 'Measures product profitability and return on marketing investments.',
      'Experience measurement': 'Signals that show how customers are interacting with your banking experience.'
    }
  },
  {
    id: 'retail',
    name: 'Retail',
    accentColor: '#22C55E',
    tagline: 'Retail ecosystems that connect customers, inventory, and fulfillment in real time.',
    description: 'Show how retailers can deliver seamless commerce, inventory visibility, and personalized experiences through a modern partner-led stack.',
    heroStats: ['7 Retail Touchpoints', '35+ Partner Solutions', 'Omni-channel commerce'],
    journey: [
      {
        stepNumber: 1,
        title: 'Explore & Inspire',
        description: 'Guide shoppers with compelling digital storefronts and rich product discovery across channels.',
        keyExperiences: ['Curated product journeys', 'Smart search', 'Omni-channel catalogs'],
        poweredBySolutions: ['Commerce platform', 'Product experience', 'Personalization']
      },
      {
        stepNumber: 2,
        title: 'Buy & Fulfill',
        description: 'Enable click-to-brick experiences, fast checkout, and real-time order visibility.',
        keyExperiences: ['One-click pickup', 'Express checkout', 'Fulfillment transparency'],
        poweredBySolutions: ['POS integration', 'Order orchestration', 'Inventory sync']
      },
      {
        stepNumber: 3,
        title: 'Service & Support',
        description: 'Turn post-purchase care into loyalty with easy returns, service workflows, and support automation.',
        keyExperiences: ['Self-service returns', 'After-sales care', 'Loyalty support'],
        poweredBySolutions: ['Returns management', 'Customer service', 'Loyalty engines']
      },
      {
        stepNumber: 4,
        title: 'Optimize & Replenish',
        description: 'Keep shelves stocked and demand met using unified inventory and predictive replenishment.',
        keyExperiences: ['Inventory visibility', 'Demand forecasting', 'Supplier collaboration'],
        poweredBySolutions: ['Inventory control', 'Replenishment planning', 'Supplier portals']
      },
      {
        stepNumber: 5,
        title: 'Measure & Grow',
        description: 'Monitor performance across channels and optimize merchandising, pricing, and promotions.',
        keyExperiences: ['Sales performance', 'Customer analytics', 'Promotion effectiveness'],
        poweredBySolutions: ['Retail analytics', 'Merchandising tools', 'Price optimization']
      }
    ],
    businessOutcomes: [
      {
        icon: 'shopping-cart',
        title: 'Faster conversion',
        description: 'Reduce friction across browse, buy, and pickup to win more revenue.'
      },
      {
        icon: 'layers',
        title: 'Stronger inventory control',
        description: 'Visible stock and smarter replenishment keep products available when customers want them.'
      },
      {
        icon: 'sparkles',
        title: 'More loyal customers',
        description: 'Consistent service and personalized journeys earn repeat engagement.'
      }
    ],
    portfolioTable: [
      {
        touchpoint: 'Digital Commerce',
        icon: 'shopping-bag',
        portfolioPartners: ['Commerce platform', 'Product experience'],
        capabilitiesDelivered: ['Online storefronts', 'Product discovery', 'Catalog management'],
        outcomesEnabled: ['Higher conversion', 'More discoverability', 'Faster merchandising']
      },
      {
        touchpoint: 'Fulfillment',
        icon: 'truck',
        portfolioPartners: ['Order orchestration', 'Inventory sync'],
        capabilitiesDelivered: ['BOPIS / curbside', 'Order tracking', 'Stock allocation'],
        outcomesEnabled: ['Faster delivery', 'Lower fulfillment costs', 'Higher accuracy']
      },
      {
        touchpoint: 'Service',
        icon: 'headset',
        portfolioPartners: ['Returns management', 'Customer service'],
        capabilitiesDelivered: ['Easy returns', 'Service cases', 'Post-purchase care'],
        outcomesEnabled: ['Lower churn', 'Better brand trust', 'Higher repeat rates']
      },
      {
        touchpoint: 'Inventory',
        icon: 'box',
        portfolioPartners: ['Inventory control', 'Replenishment planning'],
        capabilitiesDelivered: ['Real-time stock', 'Demand analytics', 'Supplier coordination'],
        outcomesEnabled: ['Fewer out-of-stocks', 'Lower inventory carry', 'Stronger margin']
      },
      {
        touchpoint: 'Performance',
        icon: 'bar-chart-3',
        portfolioPartners: ['Retail analytics', 'Price optimization'],
        capabilitiesDelivered: ['Promo ROI', 'Sales analytics', 'Customer insights'],
        outcomesEnabled: ['More profitable growth', 'Sharper merchandising', 'Faster insight action']
      }
    ],
    solutionDescriptions: {
      'Commerce platform': 'A commerce foundation that supports seamless transactions across web, mobile, and in-store.',
      'Product experience': 'Tools that make product discovery rich, visual, and context-aware.',
      'Personalization': 'Contextual recommendations and offers tailored to each shopper.',
      'POS integration': 'A unified point-of-sale experience that connects digital and in-store purchases.',
      'Order orchestration': 'Cross-channel order routing that keeps fulfillment efficient and transparent.',
      'Inventory sync': 'Live inventory updates so customers always see accurate availability.',
      'Returns management': 'A smooth returns flow that recovers value while preserving experience.',
      'Customer service': 'Support tools that resolve issues across interactions and channels.',
      'Loyalty engines': 'Programs that reward customers for repeat purchases and advocacy.',
      'Inventory control': 'Visibility into stock levels across stores, DCs, and online inventory.',
      'Replenishment planning': 'Forecast-driven replenishment that keeps products on shelf.',
      'Supplier portals': 'Collaborative supplier tools that simplify ordering and fulfillment.',
      'Retail analytics': 'Insights into sales, customer behavior, and operational performance.',
      'Merchandising tools': 'Capabilities that make pricing, assortment, and promotions easier to manage.',
      'Price optimization': 'Dynamic pricing tools that protect margin and stimulate demand.'
    }
  }
];
