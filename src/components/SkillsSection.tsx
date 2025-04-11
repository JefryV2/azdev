
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: string;
}

const SkillCategory = ({ title, skills, delay = 'delay-0' }: SkillCategoryProps) => {
  return (
    <div className={cn(
      "staggered-item glass-card rounded-xl p-6 h-full",
      "hover:shadow-lg transition-all duration-300",
      delay
    )}>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="text-sm bg-secondary rounded-full px-3 py-1 mb-2"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const skillsData = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Streamlit", "Responsive Design", "UI/UX", "Redux", "Next.js"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express", "Supabase", "PostgreSQL", "SQLite", "RESTful APIs", "GraphQL", "Firebase"]
  },
  {
    title: "AI & Data Science",
    skills: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NLP (SpaCy)", "OpenAI API", "Machine Learning", "Data Analysis"]
  },
  {
    title: "Data Visualization & BI",
    skills: ["Power BI", "Tableau", "Plotly", "Seaborn", "D3.js", "Chart.js", "Data Dashboards", "Real-time Analytics"]
  },
  {
    title: "Web Scraping & Automation",
    skills: ["BeautifulSoup", "Selenium", "Puppeteer", "API Integration", "Process Automation", "ETL Pipelines", "Cron Jobs"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Supabase", "AWS", "Azure", "Docker", "CI/CD", "Git", "GitHub Actions", "Deployment Automation"]
  }
];

// Add logo information for tech slider
const techSlider = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "OpenAI API", logo: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Streamlit", logo: "https://seeklogo.com/images/S/streamlit-logo-1A3B208AE4-seeklogo.com.png" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Machine Learning", logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
  { name: "RESTful APIs", logo: "https://cdn-icons-png.flaticon.com/512/10306/10306726.png" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Tableau", logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub Actions", logo: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" }
];

const SkillsSection = () => {
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
    <section id="skills" ref={sectionRef} className="py-20 relative bg-gradient-to-b from-github-dark to-github-darker">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-github-accent/5 filter blur-3xl opacity-20" />
      </div>
      
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title staggered-item text-gradient">Technical Expertise</h2>
          <p className="section-subtitle staggered-item mx-auto">
            A comprehensive toolkit for building modern, AI-driven applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index} 
              {...category} 
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
        
        {/* Tech Slider with Logos - Fixed to prevent text overflow */}
        <div className="staggered-item overflow-hidden mt-16 rounded-lg glass-card p-6">
          <div className="tech-slider flex space-x-8 whitespace-nowrap">
            {[...techSlider, ...techSlider].map((tech, index) => (
              <div 
                key={index}
                className="text-sm md:text-base font-medium px-3 py-1 bg-secondary/50 rounded-full inline-flex items-center space-x-2 min-w-fit"
              >
                <img src={tech.logo} alt={tech.name} className="w-5 h-5 flex-shrink-0" />
                <span className="truncate max-w-[120px]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
