
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Briefcase, 
  Code, 
  FileText, 
  GraduationCap, 
  Award, 
  Languages, 
  ArrowRight,
  Shield
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  delay?: string;
}

const Experience = ({ title, company, period, responsibilities, delay = 'delay-0' }: ExperienceProps) => {
  return (
    <Card className={cn(
      "staggered-item glass-card border-github-border hover:border-github-accent/30 transition-all",
      delay
    )}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <span>{title}</span>
        </CardTitle>
        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="font-medium text-github-accent">{company}</span>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span className="text-muted-foreground">{period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-github-accent mt-1 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  techStack: string;
  delay?: string;
}

const Project = ({ title, description, techStack, delay = 'delay-0' }: ProjectProps) => {
  return (
    <Card className={cn(
      "staggered-item glass-card border-github-border hover:border-github-accent/30 transition-all",
      delay
    )}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{description}</p>
        <div className="text-xs">
          <span className="font-medium text-github-accent">Tech Stack:</span> {techStack}
        </div>
      </CardContent>
    </Card>
  );
};

const ResumeSection = () => {
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

  const experiences = [
    {
      title: "Data Analyst & Business Intelligence Consultant",
      company: "Freelance & Independent Projects",
      period: "2022 – Present",
      responsibilities: [
        "Designed interactive BI dashboards in Looker and Power BI to track customer engagement, product adoption, and business KPIs.",
        "Developed SQL-based ETL pipelines to ingest and transform data from multiple sources, improving data integrity and reporting accuracy.",
        "Conducted deep-dive analyses on clickstream data, user behaviors, and retention metrics using Amplitude and Python.",
        "Led data governance initiatives, creating data dictionaries and standardizing KPI definitions across teams.",
        "Worked closely with engineers and product managers to align customer data insights with strategic decision-making."
      ]
    },
    {
      title: "Data Science Job Simulation",
      company: "Boston Consulting Group",
      period: "2022 – 2024",
      responsibilities: [
        "Built predictive models in Python to analyze business performance and improve forecasting accuracy.",
        "Automated data pipelines using SQL and ETL processes, reducing data inconsistencies by 40%.",
        "Conducted exploratory data analysis (EDA) to uncover trends, providing data-driven recommendations."
      ]
    },
    {
      title: "Data Analytics & Visualization Job Simulation",
      company: "Accenture",
      period: "2022 – 2024",
      responsibilities: [
        "Cleaned and modeled large datasets in Python and R, ensuring data quality and consistency.",
        "Developed interactive dashboards in Power BI and Tableau to support real-time business decision-making.",
        "Collaborated with cross-functional teams to deliver insights on user engagement and customer retention."
      ]
    },
    {
      title: "Data Analytics Consulting Internship",
      company: "KPM Group",
      period: "2022 – 2024",
      responsibilities: [
        "Processed and analyzed large-scale customer datasets using SQL and BI tools to track key performance indicators (KPIs).",
        "Developed Tableau & Power BI reports to present insights on customer behavior, engagement trends, and churn analysis.",
        "Implemented automated reporting pipelines, reducing manual reporting time by 30%."
      ]
    }
  ];

  const projects = [
    {
      title: "Debate Guardian (AI & Speech Recognition Tool)",
      description: "A real-time fact-checking platform to promote honesty and accountability in debates using AI and speech recognition.",
      techStack: "React, TypeScript, Google Cloud Speech-to-Text, Gemini API, Node.js, Chart.js, TensorFlow.js"
    },
    {
      title: "AI Business Analyzer (BI & Data Analytics Tool)",
      description: "Built a business intelligence platform that analyzes customer trends, financial performance, and risk factors.",
      techStack: "SQL, Looker, Python, PostgreSQL, Supabase, Power BI, Amplitude"
    },
    {
      title: "Data Cleaning & Visualization Tool (ETL & Reporting)",
      description: "Developed an automated ETL pipeline and real-time anomaly detection dashboard for high-accuracy reporting.",
      techStack: "Python, SQL, Pandas, Seaborn, Power BI"
    },
    {
      title: "Ethical Checker for Social Media Influencers & Brands",
      description: "Created a BI tool to assess influencer credibility, analyzing engagement data and brand partnerships using AI models.",
      techStack: "SQL, Python, React, Supabase, Looker"
    },
    {
      title: "Market Analysis & Trading Assistant",
      description: "Designed an interactive trading dashboard tracking customer trading behaviors, stock trends, and AI-driven predictions.",
      techStack: "SQL, Python, Yahoo Finance API, Power BI, Tableau"
    }
  ];

  const technicalSkills = [
    {
      category: "Business Intelligence & Data Visualization",
      skills: ["Looker", "Power BI", "Tableau", "Amplitude"]
    },
    {
      category: "Programming & Data Pipelines",
      skills: ["SQL", "Python", "Pandas", "NumPy", "ETL", "Supabase", "PostgreSQL"]
    },
    {
      category: "Customer & Product Analytics",
      skills: ["Clickstream Analysis", "KPI Development", "A/B Testing"]
    },
    {
      category: "Cloud & Data Engineering",
      skills: ["AWS", "GCP", "Airflow", "Dataflow", "Event Tracking"]
    },
    {
      category: "Data Governance & Reporting",
      skills: ["Data Modeling", "Data Dictionaries", "Anomaly Detection"]
    }
  ];

  return (
    <section id="resume" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-github-accent/5 filter blur-3xl opacity-20" />
        <div className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-github-accent/5 filter blur-3xl opacity-20" />
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title staggered-item text-gradient">Resume</h2>
          <p className="section-subtitle staggered-item mx-auto">
            My professional journey and qualifications
          </p>
        </div>
        
        {/* Summary Section */}
        <div className="mb-16 staggered-item">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-md bg-github-accent/10 text-github-accent">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Summary</h3>
          </div>
          <div className="glass-card rounded-xl p-6">
            <p className="text-muted-foreground">
              Data Analyst with expertise in business intelligence (BI), data modeling, and customer analytics. 
              Strong background in SQL, Python, Looker, and Amplitude, with experience in ETL pipelines, dashboard development, and KPI reporting. 
              Adept at working cross-functionally with engineers, product teams, and stakeholders to deliver actionable insights 
              that improve customer engagement and user experience.
            </p>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-md bg-github-accent/10 text-github-accent">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <Experience 
                key={index} 
                {...exp} 
                delay={`delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-md bg-github-accent/10 text-github-accent">
              <Code className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Project 
                key={index} 
                {...project} 
                delay={`delay-${(index + 1) * 100}`} 
              />
            ))}
          </div>
        </div>
        
        {/* Education & Certifications Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="staggered-item">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <Card className="glass-card border-github-border">
                <CardHeader>
                  <CardTitle className="text-lg">Bachelor of Science in Computer Science</CardTitle>
                  <CardDescription>University of the People, Remote – Present</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            {/* Certifications */}
            <div className="staggered-item delay-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <Card className="glass-card border-github-border">
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-github-accent mt-1 flex-shrink-0" />
                      <span>IBM Data Analytics with Excel and R – Coursera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-github-accent mt-1 flex-shrink-0" />
                      <span>IBM Data Analysis and Visualization Foundations – Coursera</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Languages */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-md bg-github-accent/10 text-github-accent">
              <Languages className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold">Languages</h3>
          </div>
          <div className="glass-card rounded-xl p-6 staggered-item">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-github-accent h-2.5 rounded-full w-full"></div>
                </div>
                <span className="text-sm min-w-[80px]">Arabic (Native)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-github-accent h-2.5 rounded-full w-[90%]"></div>
                </div>
                <span className="text-sm min-w-[80px]">English (Proficient)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-github-accent h-2.5 rounded-full w-[90%]"></div>
                </div>
                <span className="text-sm min-w-[80px]">French (Proficient)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="text-center staggered-item">
          <p className="text-muted-foreground">
            📍 Tunisia | 📧 azizdhouib2002@gmail.com | 📞 +21624725227
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
