import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionHeading = ({
  index,
  title,
  meta,
}: {
  index: string;
  title: string;
  meta?: string;
}) => (
  <div className="flex items-baseline justify-between gap-4 pt-10 pb-4 border-b border-border">
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-[10.5px] text-muted-foreground">{index}</span>
      <h2 className="text-[15px] font-medium tracking-tight text-foreground">{title}</h2>
    </div>
    {meta && (
      <span className="font-mono text-[10.5px] text-muted-foreground shrink-0">{meta}</span>
    )}
  </div>
);

const experience = [
  {
    org: 'Independent',
    role: 'Data Analyst & Business Intelligence Consultant',
    period: '2022 — present',
    place: 'Freelance · remote',
    points: [
      'Designed interactive BI dashboards in Looker and Power BI to track customer engagement, product adoption and business KPIs.',
      'Built SQL-based ETL pipelines that ingest and transform data from multiple sources, improving data integrity and reporting accuracy.',
      'Ran deep-dive analyses on clickstream data, user behaviour and retention metrics using Amplitude and Python.',
      'Led data governance work — data dictionaries and standardised KPI definitions across teams.',
    ],
  },
  {
    org: 'Boston Consulting Group',
    role: 'Data Science Job Simulation',
    period: '2022 — 2024',
    place: 'Remote',
    points: [
      'Built predictive models in Python to analyse business performance and improve forecasting accuracy.',
      'Automated data pipelines with SQL and ETL processes, reducing data inconsistencies by 40%.',
      'Ran exploratory analysis to surface trends and turn them into data-driven recommendations.',
    ],
  },
  {
    org: 'Accenture',
    role: 'Data Analytics & Visualization Job Simulation',
    period: '2022 — 2024',
    place: 'Remote',
    points: [
      'Cleaned and modelled large datasets in Python and R, holding data quality and consistency.',
      'Developed interactive Power BI and Tableau dashboards for real-time business decisions.',
      'Worked with cross-functional teams on user engagement and customer retention insights.',
    ],
  },
  {
    org: 'KPM Group',
    role: 'Data Analytics Consulting Internship',
    period: '2022 — 2024',
    place: 'Remote',
    points: [
      'Processed and analysed large-scale customer datasets with SQL and BI tools to track KPIs.',
      'Produced Tableau and Power BI reports on customer behaviour, engagement trends and churn.',
      'Implemented automated reporting pipelines, cutting manual reporting time by 30%.',
    ],
  },
];

const projects = [
  {
    title: 'Motorsport Aero Simulator',
    note: 'Three force tiers — empirical, vortex lattice, real RANS — behind one interface, with a validation ledger that records its own failures.',
    stack: 'Python · FastAPI · OpenFOAM · Three.js · Optuna',
    link: 'https://github.com/JefryV2/motorsport-aero-simulator',
  },
  {
    title: 'FlyTrader',
    note: 'Reinforcement-learning trader using a simulated fruit-fly connectome as a spiking feature extractor, with honest out-of-sample backtests and seed intervals.',
    stack: 'Python · PyTorch · Gymnasium · FastAPI · Three.js',
    link: 'https://github.com/JefryV2/fly-trader',
  },
  {
    title: 'Trinity Life Optimizer',
    note: 'Mobile-first dashboard unifying health, wealth and relationships into one data model, with stress modelling and time-series insights.',
    stack: 'React · TypeScript · Supabase · Recharts',
    link: 'https://trinity-life-optimizer.vercel.app/',
  },
  {
    title: 'Ruvopp',
    note: 'Cross-platform news app with algorithm-driven curation, real-time updates and engagement tracking.',
    stack: 'React Native · Expo · TypeScript · Supabase',
    link: 'https://ruvo-news-app.vercel.app/',
  },
  {
    title: 'Debate Guardian',
    note: 'Real-time fact-checking for debates: claim detection, credibility scoring and fallacy analysis.',
    stack: 'React · Google Cloud Speech-to-Text · Gemini API · Node.js',
    link: 'https://debate-guardian.vercel.app/',
  },
  {
    title: 'Ethical Checker',
    note: 'Scores influencer and brand collaborations on transparency, sentiment and engagement.',
    stack: 'React · Supabase · OpenAI API · Tailwind',
    link: 'https://ethical-searcher.vercel.app/',
  },
  {
    title: 'RewardMax',
    note: 'Credit-card rewards optimiser that models category bonuses and recommends the best card per purchase.',
    stack: 'React · TypeScript · Netlify',
    link: 'https://rewardmax.netlify.app/welcome/',
  },
];

const skills = [
  {
    group: 'Frontend',
    items: 'React, React Native, TypeScript, Vite, Tailwind CSS, shadcn/ui, Streamlit, UI/UX',
  },
  {
    group: 'Backend & data',
    items: 'Node.js, Express, Supabase, PostgreSQL, SQLite, REST, GraphQL, Firebase',
  },
  {
    group: 'AI & modelling',
    items: 'Python, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch, NLP, OpenAI, Gemini',
  },
  {
    group: 'BI & visualisation',
    items: 'Power BI, Tableau, Plotly, Seaborn, Chart.js, Recharts, real-time dashboards',
  },
  {
    group: 'Cloud & delivery',
    items: 'AWS, Azure, Docker, Git, GitHub Actions, CI/CD, ETL pipelines, automation',
  },
];

const Resume = () => {
  const handleDownloadPDF = () => {
    const navbar = document.querySelector('header');
    const footer = document.querySelector('footer');
    const backButton = document.querySelector('.back-button-container');

    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (backButton) (backButton as HTMLElement).style.display = 'none';

    window.print();

    setTimeout(() => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
      if (backButton) (backButton as HTMLElement).style.display = '';
    }, 1000);
  };

  return (
    <div className="resume-page min-h-screen bg-background text-foreground antialiased">
      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-24">
        <div className="back-button-container flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            back
          </Link>

          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border bg-secondary text-secondary-foreground text-[13px] hover:bg-secondary/70 transition-colors duration-150"
          >
            <Download className="h-4 w-4 text-muted-foreground" />
            Download PDF
          </button>
        </div>

        <div className="resume-content max-w-4xl mx-auto">
          {/* Masthead */}
          <div className="pt-12">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted-foreground">
              curriculum vitae · 2026
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.02] text-foreground">
              Aziz Dhouib
            </h1>
            <p className="mt-3 text-lg text-secondary-foreground tracking-tight">
              Data scientist · full-stack developer
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11.5px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Tunisia
              </span>
              <a
                href="mailto:azizdhouib2002@gmail.com"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-150"
              >
                <Mail className="h-3.5 w-3.5" /> azizdhouib2002@gmail.com
              </a>
              <span className="inline-flex items-center gap-1.5 tabular-nums">
                <Phone className="h-3.5 w-3.5" /> +216 24 725 227
              </span>
              <a
                href="https://github.com/JefryV2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-150"
              >
                <ArrowUpRight className="h-3.5 w-3.5" /> github.com/JefryV2
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="pt-4">
            <SectionHeading index="01" title="Summary" />
            <p className="pt-5 text-[15px] leading-7 text-secondary-foreground max-w-[70ch]">
              I build systems that have to survive scrutiny: aerodynamic solvers,
              trading agents and analytics platforms. Python for modelling and
              backends, TypeScript and React for the interface, and a provenance
              label on every number. Comfortable owning the full lifecycle — data
              modelling and ETL, API design, UI, deployment.
            </p>
          </section>

          {/* Experience */}
          <section>
            <SectionHeading index="02" title="Experience" meta="2022 — present" />
            <div>
              {experience.map((job) => (
                <article
                  key={job.org}
                  className="grid md:grid-cols-[210px_1fr] gap-2 md:gap-10 py-6 border-b border-border/70 last:border-b-0"
                >
                  <div>
                    <h3 className="text-[15px] font-medium tracking-tight text-foreground">
                      {job.org}
                    </h3>
                    <p className="mt-1.5 font-mono text-[11px] leading-5 text-secondary-foreground">
                      {job.role}
                    </p>
                    <p className="mt-1 font-mono text-[10.5px] text-github-accent">
                      {job.period}
                    </p>
                    <p className="font-mono text-[10.5px] text-muted-foreground">
                      {job.place}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point.slice(0, 24)}
                        className="text-[13.5px] leading-6 text-secondary-foreground flex gap-3"
                      >
                        <span className="mt-2.5 h-px w-3 shrink-0 bg-border" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Selected projects */}
          <section>
            <SectionHeading index="03" title="Selected projects" meta="07 of 12" />
            <div>
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="grid md:grid-cols-[210px_1fr] gap-2 md:gap-10 py-5 border-b border-border/70 last:border-b-0"
                >
                  <h3 className="text-[14px] font-medium text-foreground">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1 hover:text-github-accent transition-colors duration-150"
                    >
                      {project.title}
                      <ArrowUpRight className="h-3 w-3 mt-1 shrink-0 text-muted-foreground" />
                    </a>
                  </h3>
                  <div>
                    <p className="text-[13.5px] leading-6 text-secondary-foreground">
                      {project.note}
                    </p>
                    <p className="mt-1.5 font-mono text-[10.5px] text-muted-foreground">
                      {project.stack}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <SectionHeading index="04" title="Technical skills" />
            <div className="pt-5 space-y-3">
              {skills.map((skill) => (
                <div
                  key={skill.group}
                  className="grid sm:grid-cols-[160px_1fr] gap-1 sm:gap-6 py-2.5 border-b border-border/60 last:border-b-0"
                >
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted-foreground">
                    {skill.group}
                  </p>
                  <p className="text-[13.5px] leading-6 text-secondary-foreground">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education & certification */}
          <section>
            <SectionHeading index="05" title="Education & certification" />
            <div className="pt-5 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted-foreground">
                  education
                </p>
                <p className="mt-2 text-[14px] text-foreground">
                  BSc Computer Science
                </p>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  University of the People · remote · present
                </p>
              </div>
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted-foreground">
                  certification
                </p>
                <ul className="mt-2 space-y-1 text-[13px] text-secondary-foreground">
                  <li>IBM Data Analytics with Excel and R — Coursera</li>
                  <li>IBM Data Analysis and Visualization Foundations — Coursera</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <SectionHeading index="06" title="Languages" />
            <div className="pt-5 grid grid-cols-3 gap-6">
              {[
                ['English', 'proficient'],
                ['French', 'proficient'],
                ['Arabic', 'native'],
              ].map(([language, level]) => (
                <div key={language}>
                  <p className="text-[14px] text-foreground">{language}</p>
                  <p className="font-mono text-[10.5px] text-muted-foreground mt-0.5">
                    {level}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-14 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] text-muted-foreground">
            <span>azizdhouib2002@gmail.com</span>
            <span>Tunisia · +216 24 725 227</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
