
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  ArrowRightIcon, 
  Layers, 
  Database, 
  LineChart, 
  Globe, 
  FileText, 
  PieChart,
  Shield,
  ChevronUpIcon,
  ChevronDownIcon,
  CreditCard
} from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ProjectCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  tech: string[];
  imageSrc: string;
  delay?: string;
  detailedDescription?: string;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  icon, 
  category, 
  title, 
  description, 
  tech, 
  imageSrc, 
  delay = 'delay-0',
  detailedDescription,
  demoUrl,
  githubUrl
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      "staggered-item project-card overflow-hidden rounded-2xl h-full flex flex-col",
      "transition-all duration-500 group",
      "bg-gradient-to-br from-github-darker via-github-darker to-github-dark",
      "border border-github-border/50 shadow-xl shadow-black/20",
      "hover:border-github-accent/30 hover:shadow-2xl hover:shadow-github-accent/10",
      "hover:-translate-y-2",
      delay
    )}>
      <div className="image-card flex-shrink-0 relative overflow-hidden">
        <AspectRatio ratio={16/9} className="w-full">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="image-card-overlay">
          <div className="text-xs font-semibold mb-2 px-3 py-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-300 inline-block">{category}</div>
          <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.slice(0, 3).map((item, index) => (
              <span 
                key={index} 
                className="text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20 text-white/95 px-3 py-1.5 rounded-full shadow-lg"
              >
                {item}
              </span>
            ))}
            {tech.length > 3 && (
              <span className="text-xs font-medium bg-white/15 backdrop-blur-sm border border-white/20 text-white/95 px-3 py-1.5 rounded-full shadow-lg">
                +{tech.length - 3} more
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {demoUrl && (
              <a 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-white to-gray-100 text-github-darker rounded-lg font-semibold hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Live Demo
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            )}
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Code
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="bg-gradient-to-br from-github-darker/95 to-github-dark/95 backdrop-blur-sm border-t border-github-border/50 transition-all duration-500 overflow-hidden flex-grow flex flex-col shadow-inner"
      >
        <div className="p-6 flex-grow">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3.5 inline-block rounded-xl bg-gradient-to-br from-github-accent/20 to-github-accent/10 border border-github-accent/30 text-github-accent shadow-lg">
              {icon}
            </div>
            <CollapsibleTrigger asChild>
              <button
                className="inline-flex items-center text-sm font-semibold text-github-accent hover:text-white bg-github-accent/10 hover:bg-github-accent/20 px-4 py-2 rounded-lg transition-all duration-300 border border-github-accent/20 hover:border-github-accent/40"
              >
                {isOpen ? (
                  <>
                    Hide Details <ChevronUpIcon className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    View Details <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </>
                )}
              </button>
            </CollapsibleTrigger>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-muted-foreground mb-0 leading-relaxed">{description}</p>
        </div>
        
        <CollapsibleContent>
          <div className="px-6 pb-6 space-y-6 pt-2">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-github-border/50 to-transparent"></div>
            
            {detailedDescription && (
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                  <span className="w-1 h-5 bg-gradient-to-b from-github-accent to-github-accent/50 rounded-full"></span>
                  Project Details
                </h4>
                <p className="text-muted-foreground leading-relaxed">{detailedDescription}</p>
              </div>
            )}
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-github-accent to-github-accent/50 rounded-full"></span>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((item, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium bg-gradient-to-r from-github-accent/15 to-github-accent/10 text-github-accent px-4 py-1.5 rounded-full border border-github-accent/30 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

const projects = [
  {
    icon: <Globe className="h-6 w-6" />,
    category: "Mobile Application",
    title: "Ruvopp",
    description: "A personalized news filtering application built with React Native and Expo that delivers curated articles tailored to user interests.",
    detailedDescription: "Ruvopp is a personalized news filtering application built with React Native and Expo that delivers curated articles tailored to user interests. Key features include personalized news feed with algorithm-driven content curation, article interaction system with like, save, and dismiss functionality, real-time updates that refresh content every 30 seconds, modern card-based interface with vertical action buttons, cross-platform responsive design, dark/light theme support, echo control system for intelligent article grouping, social community integration, screen time management with parental controls, location services integration, and full Supabase backend integration.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "REST APIs", "React Hooks", "Lucide Icons", "Nativewind", "EAS Build"],
    imageSrc: "/assets/ruvo.png",
    demoUrl: "https://ruvo-news-app.vercel.app/",
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    category: "Full-Stack Mobile Analytics App",
    title: "Trinity Life Optimizer",
    description: "A mobile-first personal analytics app that unifies Health, Wealth, and Relationships into a single interactive life dashboard.",
    detailedDescription: "Trinity Life Optimizer is a mobile-first personal analytics platform that combines health, wealth, and relationship data into a cohesive life operating system. It features rich visualizations for sleep, steps, mood, and stress, a Supabase-backed data model for all three life pillars, and an Insights Lab that showcases time-series analytics, correlations, and mini experiments. Built with React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Recharts, and Supabase, it is designed both as a real-life companion app and as a portfolio-ready data storytelling project, with mobile wrapping via Capacitor.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Recharts", "shadcn/ui", "Capacitor"],
    // Local preview image (add this file under public/assets)
    imageSrc: "/assets/trinity-dashboard.png",
    demoUrl: "https://trinity-life-optimizer.vercel.app/",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    category: "Fintech & Rewards Optimization",
    title: "RewardMax",
    description: "A credit card rewards optimization app that analyzes spending categories, bonus structures, and user preferences to recommend the best card for each purchase.",
    detailedDescription: "RewardMax is a web application that optimizes credit card rewards by analyzing spending patterns, category bonuses, and quarterly promotions to recommend the best card at checkout. Users can add cards manually, set reward priorities, and see interactive previews of recommendations without needing to link bank accounts. The app includes features like location-based nudges, challenge-based gamification, and clear analytics that show how much extra value is being unlocked over time.",
    tech: ["React", "TypeScript", "Tailwind-style UI", "Responsive Design", "Netlify Deployment"],
    // Add a screenshot of the RewardMax dashboard as public/assets/rewardmax.png
    imageSrc: "/assets/rewardmax.png",
    demoUrl: "https://rewardmax.netlify.app/welcome/",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    demoUrl: "https://debate-guardian.vercel.app/",
    category: "AI & Speech Recognition",
    title: "Debate Guardian",
    description: "A real-time fact-checking platform to promote honesty and accountability in debates using AI and speech recognition.",
    detailedDescription: "Debate Guardian captures spoken claims through speech recognition, automatically verifies them against a database of facts, and provides immediate feedback. It detects logical fallacies, assigns credibility scores, and offers visual analytics on debate patterns. The platform features adjustable tolerance settings, emotion analysis, and comprehensive speaker statistics, all powered by the Gemini API.",
    tech: ["React", "TypeScript", "Google Cloud Speech-to-Text", "Gemini API", "Node.js", "Chart.js", "TensorFlow.js"],
    imageSrc: "/assets/debateguadrdian.png",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    category: "Full-Stack Web App",
    title: "AI Business Analyzer",
    description: "An intelligent business analytics platform that provides AI-driven insights for financial and operational performance.",
    detailedDescription: "This platform integrates data from multiple sources to provide comprehensive business intelligence. It uses machine learning algorithms to analyze trends, identify anomalies, and generate predictive insights that help businesses optimize their operations and financial performance.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind CSS", "Supabase", "OpenAI"],
    imageSrc: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2940&auto=format&fit=crop",
  },
  {
    icon: <Database className="h-6 w-6" />,
    category: "Full-Stack Web App",
    title: "Ethical Checker for Social Media",
    description: "A platform that analyzes the credibility of influencer and brand partnerships through sentiment analysis and AI scoring.",
    detailedDescription: "This tool helps brands and consumers evaluate the authenticity and ethical standards of social media content and partnerships. By analyzing language patterns, disclosure practices, and audience engagement, it provides transparency scores that promote accountability in digital marketing.",
    tech: ["React", "Node.js", "TypeScript", "Supabase", "OpenAI", "Tailwind CSS"],
    imageSrc: "/assets/ethicallSearch.png",
    demoUrl: "https://ethical-searcher.vercel.app/",
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "AI-Powered Market Analysis",
    description: "A trading assistant that tracks market movements and provides AI-driven entry/exit recommendations.",
    detailedDescription: "This application monitors real-time market data and uses machine learning models to identify potential trading opportunities. It analyzes historical patterns, volatility factors, and technical indicators to generate timely recommendations while managing risk through adaptive position sizing algorithms.",
    tech: ["Streamlit", "Python", "Pandas", "ML", "Yahoo Finance API", "SQLite"],
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop",
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Data Cleaning & Visualization Tool",
    description: "An automation tool for data preprocessing with real-time visualization for anomaly detection.",
    detailedDescription: "This tool streamlines the data preparation workflow by automating common cleaning tasks like handling missing values, removing duplicates, and standardizing formats. It incorporates interactive visualizations that help users quickly identify patterns, outliers, and data quality issues.",
    tech: ["Streamlit", "Python", "Pandas", "Plotly", "Seaborn", "SQLite"],
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Job Application Automation Tool",
    description: "An automated system that scrapes job postings and matches them to resumes using AI technology.",
    detailedDescription: "This application helps job seekers efficiently find and apply for relevant positions by automating the search process. It uses natural language processing to analyze job descriptions and match them with the user's skills and experience, prioritizing opportunities with the highest potential fit.",
    tech: ["Streamlit", "Python", "BeautifulSoup", "OpenAI GPT", "SQLite"],
    imageSrc: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2940&auto=format&fit=crop",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    category: "Data Science & AI",
    title: "Advanced Stock Analysis Dashboard",
    description: "A real-time financial analytics dashboard with AI-driven predictions and visualization tools.",
    detailedDescription: "This dashboard provides comprehensive stock market analytics through multiple visualization tools and predictive models. It integrates fundamental data, technical indicators, and sentiment analysis to offer a holistic view of investment opportunities and market trends.",
    tech: ["Streamlit", "Python", "Yahoo Finance API", "Power BI", "Pandas"],
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940&auto=format&fit=crop",
  }
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
            if (subtitle) subtitle.classList.add('active', 'delay-300');
            
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('active');
              }, 300 + index * 100);
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
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="fancy-blob w-96 h-96 bottom-0 left-0 bg-github-accent/5"></div>
        <div className="fancy-blob w-80 h-80 top-1/4 right-10 bg-github-highlight/5"></div>
        <div className="fancy-blob w-64 h-64 bottom-1/4 right-1/4 bg-github-accent/5"></div>
        
        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 20 + 5}px`, 
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              backgroundColor: `rgba(46, 160, 67, ${Math.random() * 0.2})` // GitHub green particles
            }}
          ></div>
        ))}
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title staggered-item text-gradient">Featured Projects</h2>
          <p className="section-subtitle staggered-item mx-auto">
            A selection of my recent work combining full-stack development and AI technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              {...project} 
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
