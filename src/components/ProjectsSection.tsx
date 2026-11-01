
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import FlyTraderPreview from '@/components/FlyTraderPreview';

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  detailedDescription?: string;
  demoUrl?: string;
  githubUrl?: string;
  livePreview?: 'flytrader';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  tech,
  imageSrc,
  detailedDescription,
  demoUrl,
  githubUrl,
  livePreview
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        'staggered-item rounded-xl border border-border bg-card overflow-hidden flex flex-col',
        'transition-colors duration-150 hover:border-foreground/20'
      )}
    >
      <div className="flex-shrink-0 relative overflow-hidden border-b border-border bg-black/40">
        <AspectRatio ratio={16 / 9} className="w-full">
          {livePreview === 'flytrader' ? (
            <FlyTraderPreview />
          ) : (
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" loading="lazy" />
          )}
        </AspectRatio>
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex flex-col flex-grow">
        <div className="p-6 flex flex-col flex-grow">
          <p className="font-mono text-xs text-muted-foreground mb-2 leading-5">{category}</p>
          <h3 className="text-lg font-medium text-foreground leading-snug">{title}</h3>
          <p className="mt-2.5 text-sm text-muted-foreground leading-6 flex-grow">{description}</p>
          <p className="mt-4 font-mono text-xs text-muted-foreground leading-5">
            {tech.join(' · ')}
          </p>

          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-5">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-github-accent transition-colors duration-150"
                >
                  Live demo
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-github-accent transition-colors duration-150"
                >
                  Code
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              )}
            </div>

            {detailedDescription && (
              <CollapsibleTrigger asChild>
                <button className="ml-4 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors duration-150">
                  {isOpen ? 'Hide' : 'Details'}
                  {isOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
              </CollapsibleTrigger>
            )}
          </div>
        </div>

        {detailedDescription && (
          <CollapsibleContent className="overflow-hidden">
            <div className="px-6 pb-6">
              <p className="text-sm text-muted-foreground leading-6 pt-1">
                {detailedDescription}
              </p>
            </div>
          </CollapsibleContent>
        )}
      </Collapsible>
    </div>
  );
};

const projects: ProjectCardProps[] = [
  {
    category: 'Reinforcement learning · quantitative research',
    title: 'FlyTrader',
    description:
      'A fruit-fly connectome–inspired RL trading system with honest out-of-sample evaluation and a FastAPI + Three.js research dashboard.',
    detailedDescription:
      'FlyTrader uses a simulated Drosophila melanogaster connectome as a fixed spiking feature extractor for a reinforcement-learning stock trader. A LIF network (optionally wired with FlyWire synaptic weights) processes market observations, and a small learned actor/critic maps that activity to Buy / Hold / Sell decisions. The stack includes a Gymnasium trading environment, daily OHLCV for 54 US equities, time-split training with validation-based checkpointing, and backtests against buy-and-hold, momentum, and trend baselines. A FastAPI + Three.js dashboard steps, trains, and evaluates the agent, including a portfolio mode that allocates across a cross-section of assets.',
    tech: ['Python', 'PyTorch', 'Gymnasium', 'FastAPI', 'Three.js', 'FlyWire', 'RL'],
    imageSrc: '/assets/flytrader.gif',
    githubUrl: 'https://github.com/JefryV2/fly-trader',
    livePreview: 'flytrader' as const,
  },
  {
    category: 'Mobile application',
    title: 'Ruvopp',
    description:
      'A personalized news filtering application built with React Native and Expo that delivers curated articles tailored to user interests.',
    detailedDescription:
      'Ruvopp is a personalized news filtering application built with React Native and Expo that delivers curated articles tailored to user interests. Key features include personalized news feed with algorithm-driven content curation, article interaction system with like, save, and dismiss functionality, real-time updates that refresh content every 30 seconds, modern card-based interface with vertical action buttons, cross-platform responsive design, dark/light theme support, echo control system for intelligent article grouping, social community integration, screen time management with parental controls, location services integration, and full Supabase backend integration.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'REST APIs', 'Nativewind', 'EAS Build'],
    imageSrc: '/assets/ruvo.png',
    demoUrl: 'https://ruvo-news-app.vercel.app/',
  },
  {
    category: 'Full-stack mobile analytics',
    title: 'Trinity Life Optimizer',
    description:
      'A mobile-first personal analytics app that unifies Health, Wealth, and Relationships into a single interactive life dashboard.',
    detailedDescription:
      'Trinity Life Optimizer is a mobile-first personal analytics platform that combines health, wealth, and relationship data into a cohesive life operating system. It features rich visualizations for sleep, steps, mood, and stress, a Supabase-backed data model for all three life pillars, and an Insights Lab that showcases time-series analytics, correlations, and mini experiments. Built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Recharts, and Supabase, it is designed both as a real-life companion app and as a portfolio-ready data storytelling project, with mobile wrapping via Capacitor.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Recharts', 'Capacitor'],
    imageSrc: '/assets/trinity-dashboard.png',
    demoUrl: 'https://trinity-life-optimizer.vercel.app/',
  },
  {
    category: 'Fintech · rewards optimization',
    title: 'RewardMax',
    description:
      'A credit card rewards optimization app that analyzes spending categories, bonus structures, and user preferences to recommend the best card for each purchase.',
    detailedDescription:
      'RewardMax is a web application that optimizes credit card rewards by analyzing spending patterns, category bonuses, and quarterly promotions to recommend the best card at checkout. Users can add cards manually, set reward priorities, and see interactive previews of recommendations without needing to link bank accounts. The app includes features like location-based nudges, challenge-based gamification, and clear analytics that show how much extra value is being unlocked over time.',
    tech: ['React', 'TypeScript', 'Tailwind-style UI', 'Netlify'],
    imageSrc: '/assets/rewardmax.png',
    demoUrl: 'https://rewardmax.netlify.app/welcome/',
  },
  {
    category: 'AI · speech recognition',
    title: 'Debate Guardian',
    description:
      'A real-time fact-checking platform to promote honesty and accountability in debates using AI and speech recognition.',
    detailedDescription:
      'Debate Guardian captures spoken claims through speech recognition, automatically verifies them against a database of facts, and provides immediate feedback. It detects logical fallacies, assigns credibility scores, and offers visual analytics on debate patterns. The platform features adjustable tolerance settings, emotion analysis, and comprehensive speaker statistics, all powered by the Gemini API.',
    tech: ['React', 'TypeScript', 'Speech-to-Text', 'Gemini API', 'Node.js', 'Chart.js'],
    imageSrc: '/assets/debateguadrdian.png',
    demoUrl: 'https://debate-guardian.vercel.app/',
  },
  {
    category: 'Full-stack web app',
    title: 'Ethical Checker for Social Media',
    description:
      'A platform that analyzes the credibility of influencer and brand partnerships through sentiment analysis and AI scoring.',
    detailedDescription:
      'This tool helps brands and consumers evaluate the authenticity and ethical standards of social media content and partnerships. By analyzing language patterns, disclosure practices, and audience engagement, it provides transparency scores that promote accountability in digital marketing.',
    tech: ['React', 'Node.js', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind CSS'],
    imageSrc: '/assets/ethicallSearch.png',
    demoUrl: 'https://ethical-searcher.vercel.app/',
  },
  {
    category: 'Full-stack web app',
    title: 'AI Business Analyzer',
    description:
      'An intelligent business analytics platform that provides AI-driven insights for financial and operational performance.',
    detailedDescription:
      'This platform integrates data from multiple sources to provide comprehensive business intelligence. It uses machine learning algorithms to analyze trends, identify anomalies, and generate predictive insights that help businesses optimize their operations and financial performance.',
    tech: ['React', 'Node.js', 'TypeScript', 'Supabase', 'OpenAI'],
    imageSrc: 'https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2940&auto=format&fit=crop',
  },
  {
    category: 'Data science · AI',
    title: 'AI-Powered Market Analysis',
    description:
      'A trading assistant that tracks market movements and provides AI-driven entry/exit recommendations.',
    detailedDescription:
      'This application monitors real-time market data and uses machine learning models to identify potential trading opportunities. It analyzes historical patterns, volatility factors, and technical indicators to generate timely recommendations while managing risk through adaptive position sizing algorithms.',
    tech: ['Streamlit', 'Python', 'Pandas', 'ML', 'Yahoo Finance API', 'SQLite'],
    imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop',
  },
  {
    category: 'Data science · AI',
    title: 'Data Cleaning & Visualization Tool',
    description:
      'An automation tool for data preprocessing with real-time visualization for anomaly detection.',
    detailedDescription:
      'This tool streamlines the data preparation workflow by automating common cleaning tasks like handling missing values, removing duplicates, and standardizing formats. It incorporates interactive visualizations that help users quickly identify patterns, outliers, and data quality issues.',
    tech: ['Streamlit', 'Python', 'Pandas', 'Plotly', 'Seaborn', 'SQLite'],
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop',
  },
  {
    category: 'Data science · automation',
    title: 'Job Application Automation Tool',
    description:
      'An automated system that scrapes job postings and matches them to resumes using AI technology.',
    detailedDescription:
      'This application helps job seekers efficiently find and apply for relevant positions by automating the search process. It uses natural language processing to analyze job descriptions and match them with the user\'s skills and experience, prioritizing opportunities with the highest potential fit.',
    tech: ['Streamlit', 'Python', 'BeautifulSoup', 'OpenAI GPT', 'SQLite'],
    imageSrc: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2940&auto=format&fit=crop',
  },
  {
    category: 'Data science · AI',
    title: 'Advanced Stock Analysis Dashboard',
    description:
      'A real-time financial analytics dashboard with AI-driven predictions and visualization tools.',
    detailedDescription:
      'This dashboard provides comprehensive stock market analytics through multiple visualization tools and predictive models. It integrates fundamental data, technical indicators, and sentiment analysis to offer a holistic view of investment opportunities and market trends.',
    tech: ['Streamlit', 'Python', 'Yahoo Finance API', 'Power BI', 'Pandas'],
    imageSrc: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940&auto=format&fit=crop',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('.section-title');
            const subtitle = entry.target.querySelector('.section-subtitle');
            const items = entry.target.querySelectorAll('.staggered-item');

            if (title) title.classList.add('active');
            if (subtitle) subtitle.classList.add('active');

            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('active');
              }, index * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl">
          <h2 className="section-title staggered-item">Selected projects</h2>
          <p className="section-subtitle staggered-item">
            Trading systems, analytics platforms and ML tools — recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
