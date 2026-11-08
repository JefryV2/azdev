export interface Project {
  id: string;
  title: string;
  domain: string;
  stack: string[];
  year: string;
  state: 'active' | 'live' | 'archived';
  summary: string;
  story?: string[];
  note?: string;
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
  caption?: string;
  featured?: boolean;
  ledger?: boolean;
}

export const projects: Project[] = [
  {
    id: 'business-checkup',
    title: 'Business Check-up',
    domain: 'Business intelligence · small business',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Prisma'],
    year: '2026',
    state: 'active',
    featured: true,
    summary:
      'A business website or a spreadsheet export goes in; a plain-language report comes out — what the numbers say, what is going wrong, what to fix first.',
    story: [
      'Two ways in. The app reads a public business page over plain HTTP, with a headless Puppeteer fallback for sites that block or render in JavaScript, and scores it with five rule-based indicators. Or it takes a CSV, XLSX or XLS upload — up to 10 MB and 10,000 rows — detects the business profile and the role of each column, then runs totals and movement, change attribution, concentration, profit by dimension, customer mix and a data-quality pass. Multi-sheet workbooks are scored per sheet and you pick which one to analyse.',
      'Every number comes from a deterministic TypeScript module rather than a model, so a spreadsheet report never needs an API key. Depth analyses are suppressed when the columns they need are missing or coverage falls below 80%, and the report names what would unlock them. Traffic and audience figures on the public-details page are labelled as heuristic estimates. Saved reports belong to an httpOnly cookie, stored through Prisma on PostgreSQL when configured and in a local db.json when not.',
    ],
    note: 'Built for an owner with no analyst. When the data cannot support a question the report says so instead of estimating an answer — the limitations are part of the product, not a footnote.',
    image: '/assets/business-checkup.png',
    caption:
      'Analyses catalogue on the bundled synthetic workbook — break-even is marked "needs data" and waits for the column this file lacks',
    codeUrl: 'https://github.com/JefryV2/bi-mvp',
  },
  {
    id: 'ethical-checker',
    title: 'Ethical Checker',
    domain: 'Evidence retrieval · on-device NLP',
    stack: ['React', 'TypeScript', 'Vite', 'Transformers.js', 'ONNX'],
    year: '2026',
    state: 'live',
    featured: true,
    summary:
      'A keyless public-record reader: search a company or creator and read what Wikidata, Wikipedia and the entity’s own site actually publish — every claim linked, and a score that measures evidence coverage, not virtue.',
    story: [
      'No API keys, no accounts. Wikidata supplies identity and official links, Wikipedia supplies the dispute record, and a local Scrapling service reads the official site, falling back to a text proxy when it cannot. When a page cannot be read the record says so; when a dimension has no evidence it is reported as unscored instead of estimated.',
      'Two models run in the browser through ONNX. all-MiniLM-L6-v2 embeds every scraped passage so a question can be matched against what a lookup actually read, with MMR keeping the five results diverse; MobileBERT-MNLI reads the same passages against five transparency definitions. A model lab runs hand-labeled probes and reports its own accuracy, confusion matrix, latency and regex failures live — on the bundled probes, 5/5 retrieval, 9/10 entailment and 10/13 regex, with the three misses listed. A rules-vs-model panel shows where the literal layer and the model disagree.',
    ],
    note: 'The score is deterministic evidence coverage, and every number carries its provenance: rule, model or source. Retrieval quotes the record — no model writes an answer.',
    demoUrl: 'https://ethical-searcher.vercel.app/',
    codeUrl: 'https://github.com/JefryV2/ethical-searcher',
  },
  {
    id: 'motorsport-aero-simulator',
    title: 'Motorsport Aero Simulator',
    domain: 'Aerodynamics · simulation',
    stack: ['Python', 'FastAPI', 'OpenFOAM', 'Three.js', 'Optuna'],
    year: '2026',
    state: 'active',
    featured: true,
    ledger: true,
    summary:
      'Three force tiers — empirical, vortex lattice, real RANS — behind one interface, with a validation ledger that records its own failures.',
    story: [
      'A Formula open-wheel aerodynamics workbench. The empirical model, a 3D horseshoe vortex lattice with an image ground plane, and a real 2D front-wing-section k-ω SST RANS case all sit behind one interface. The CFD tier writes its own body-fitted O-grid, reports measured y+ and checkMesh quality per run, and returns an error when a solver fails instead of substituting synthetic numbers.',
      'An Optuna TPE optimiser searches wing angles, ride heights, rake and diffuser angle. The browser side is a parametric car assembled from the same setup the solver reads, with an analytic potential-flow wind tunnel: nine seeding sources, volumetric smoke, streamlines and a heuristic Cp map. CI gates the flow field with 37 assertions.',
    ],
    note: 'The point of this project is not the downforce numbers. It is that every result carries a provenance label saying what produced it.',
    image: '/assets/aero-smoke.png',
    codeUrl: 'https://github.com/JefryV2/motorsport-aero-simulator',
  },
  {
    id: 'flytrader',
    title: 'FlyTrader',
    domain: 'Reinforcement learning · markets',
    stack: ['Python', 'PyTorch', 'Gymnasium', 'FastAPI', 'Three.js'],
    year: '2026',
    state: 'active',
    featured: true,
    summary:
      'A fruit-fly connectome used as a fixed spiking feature extractor for an RL trader, with honest out-of-sample evaluation.',
    story: [
      'A simulated Drosophila melanogaster connectome, optionally wired with FlyWire synaptic weights, processes market observations through a LIF network. A small learned actor/critic maps that activity to Buy / Hold / Sell decisions across daily OHLCV for 54 US equities.',
      'Training uses a time split with validation-based checkpointing, and backtests run against buy-and-hold, momentum and trend baselines. A FastAPI + Three.js dashboard steps, trains and evaluates the agent, including a portfolio mode that allocates across a cross-section of assets.',
    ],
    image: '/assets/flytrader.gif',
    codeUrl: 'https://github.com/JefryV2/fly-trader',
  },
  {
    id: 'trinity-life-optimizer',
    title: 'Trinity Life Optimizer',
    domain: 'Analytics · mobile',
    stack: ['React', 'TypeScript', 'Supabase', 'Recharts'],
    year: '2025',
    state: 'live',
    featured: true,
    summary:
      'A mobile-first personal analytics app that unifies health, wealth and relationships into one dashboard.',
    story: [
      'Three life pillars on one data model: sleep, steps, mood and stress for health; accounts and spending for wealth; people and cadence for relationships. Rich visualisations sit on a Supabase-backed schema, and an Insights Lab adds time-series analysis, correlations and small experiments.',
    ],
    image: '/assets/trinity-dashboard.png',
    demoUrl: 'https://trinity-life-optimizer.vercel.app/',
  },
  {
    id: 'ruvopp',
    title: 'Ruvopp',
    domain: 'Mobile · news',
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
    year: '2025',
    state: 'live',
    summary:
      'A personalised news app built with React Native and Expo, with algorithm-driven curation and a 30-second refresh.',
    demoUrl: 'https://ruvo-news-app.vercel.app/',
    codeUrl: 'https://github.com/JefryV2/ruvo-news-app',
  },
  {
    id: 'rewardmax',
    title: 'RewardMax',
    domain: 'Fintech · rewards',
    stack: ['React', 'TypeScript', 'Netlify'],
    year: '2025',
    state: 'live',
    summary:
      'A credit card rewards optimiser that recommends the best card for each purchase from category bonuses and user priorities.',
    demoUrl: 'https://rewardmax.netlify.app/welcome/',
  },
  {
    id: 'debate-guardian',
    title: 'Debate Guardian',
    domain: 'AI · speech',
    stack: ['React', 'TypeScript', 'Gemini API', 'Node.js'],
    year: '2025',
    state: 'archived',
    summary:
      'Real-time fact-checking for debates: spoken claims are captured, verified and scored for fallacies and credibility.',
    demoUrl: 'https://debate-guardian.vercel.app/',
    codeUrl: 'https://github.com/JefryV2/debate-guardians',
  },
  {
    id: 'ai-business-analyzer',
    title: 'AI Business Analyzer',
    domain: 'Business intelligence',
    stack: ['React', 'Node.js', 'Supabase', 'OpenAI'],
    year: '2025',
    state: 'archived',
    summary:
      'A business analytics platform that joins multiple data sources and generates trend, anomaly and forecast views.',
  },
  {
    id: 'market-analysis',
    title: 'AI-Powered Market Analysis',
    domain: 'Markets · ML',
    stack: ['Streamlit', 'Python', 'Pandas', 'SQLite'],
    year: '2024',
    state: 'archived',
    summary:
      'A trading assistant that tracks market movement and suggests entries and exits from historical patterns and volatility.',
  },
  {
    id: 'data-cleaning',
    title: 'Data Cleaning & Visualization Tool',
    domain: 'Data tooling',
    stack: ['Streamlit', 'Python', 'Pandas', 'Plotly'],
    year: '2024',
    state: 'archived',
    summary:
      'Automates preprocessing — missing values, duplicates, formats — with interactive views for outliers and quality issues.',
  },
  {
    id: 'job-application-automation',
    title: 'Job Application Automation',
    domain: 'Automation · NLP',
    stack: ['Streamlit', 'Python', 'BeautifulSoup', 'SQLite'],
    year: '2024',
    state: 'archived',
    summary:
      'Scrapes job postings and matches them to a résumé with NLP, ranking roles by fit.',
  },
  {
    id: 'stock-analysis-dashboard',
    title: 'Advanced Stock Analysis Dashboard',
    domain: 'Markets · analytics',
    stack: ['Streamlit', 'Python', 'Power BI', 'Pandas'],
    year: '2024',
    state: 'archived',
    summary:
      'A financial analytics dashboard combining fundamentals, technical indicators and sentiment into one view.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const tooling = [
  {
    group: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Streamlit'],
  },
  {
    group: 'Backend & data',
    items: ['Node.js', 'Express', 'Supabase', 'PostgreSQL', 'SQLite', 'REST'],
  },
  {
    group: 'AI & modelling',
    items: ['Python', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'Pandas', 'OpenAI', 'Transformers.js (ONNX)'],
  },
  {
    group: 'Analysis & delivery',
    items: ['Power BI', 'Plotly', 'Docker', 'GitHub Actions', 'AWS', 'Azure'],
  },
];

export const validationLedger = [
  { id: 'V1', measure: 'Lift-curve slope vs thin airfoil', verdict: 'pass', detail: 'e 1.016 · Cl error 2.7%' },
  { id: 'V3', measure: 'Grid convergence, 4 levels', verdict: 'pass', detail: 'monotonic · GCI < 1.5%' },
  { id: 'V7', measure: 'Surrogate cross-validation', verdict: 'pass', detail: 'Cl R² 0.995' },
  { id: 'V4b', measure: 'Ground effect vs literature', verdict: 'pending', detail: '1.93× off published' },
  { id: 'V6a', measure: 'Section vs published slope', verdict: 'miss', detail: '16.6% vs 4% target' },
  { id: 'V9', measure: 'Active learning vs maximin', verdict: 'not met', detail: '−16.8% below baseline' },
] as const;
