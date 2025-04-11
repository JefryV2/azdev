
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, Code, Zap, BarChart, BrainCircuit, Database, LineChart, Terminal } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const title = document.querySelector('.hero-title');
          const subtitle = document.querySelector('.hero-subtitle');
          const cta = document.querySelector('.hero-cta');
          
          if (title) title.classList.add('active');
          if (subtitle) subtitle.classList.add('active', 'delay-300');
          if (cta) cta.classList.add('active', 'delay-600');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center pt-16 mb-10 relative overflow-hidden fade-section"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-github-accent/5 filter blur-3xl opacity-20 moving-gradient"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-github-accent/5 filter blur-3xl opacity-20 moving-gradient"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-muted/10 filter blur-3xl opacity-10 moving-gradient"></div>
        
        {/* Enhanced Grid overlay with animation - similar to footer */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
        
        {/* Animated Tech Icons */}
        <div className="absolute top-1/4 left-1/4 floating-element animate-bounce-subtle">
          <Code className="h-8 w-8 text-github-accent/30" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 floating-element" style={{ animationDelay: "1s" }}>
          <BrainCircuit className="h-10 w-10 text-github-accent/30" />
        </div>
        <div className="absolute top-2/3 right-1/4 floating-element" style={{ animationDelay: "2s" }}>
          <Database className="h-12 w-12 text-github-accent/30" />
        </div>
        <div className="absolute top-1/3 right-1/5 floating-element" style={{ animationDelay: "3s" }}>
          <Terminal className="h-9 w-9 text-github-accent/20" />
        </div>
        
        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 2}px`, 
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 flex flex-col justify-center z-10">
        <div className="max-w-4xl">
          <h1 className="hero-title staggered-item text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="block text-white">Data Scientist &</span>
            <span className="block text-white">Full-Stack Developer</span>
          </h1>
          
          <div className="hero-subtitle staggered-item mb-10 max-w-3xl space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Strong background in AI, automation, and data-driven platforms with extensive experience
              in Node.js, React, Supabase, Python, and machine learning.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start space-x-3 fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1 fade-border">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">AI Integration</h3>
                  <p className="text-muted-foreground text-sm">Building intelligent applications with advanced AI capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1 fade-border">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Predictive Modeling</h3>
                  <p className="text-muted-foreground text-sm">Developing data-driven insights and forecasting models</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1 fade-border">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Scalable Applications</h3>
                  <p className="text-muted-foreground text-sm">Building robust platforms that grow with your business</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="p-2 rounded-md bg-github-accent/10 text-github-accent mt-1 fade-border">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Tech Leadership</h3>
                  <p className="text-muted-foreground text-sm">Driving innovation and leading development teams</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-cta staggered-item flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium fade-in",
                "bg-github-accent text-white hover:bg-github-accent/90 transition-all",
                "shadow-lg shadow-github-accent/10 hover:shadow-xl hover:shadow-github-accent/20"
              )}
              style={{ animationDelay: "0.5s" }}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium fade-in fade-border",
                "bg-secondary text-foreground hover:bg-secondary/80 transition-all",
                "shadow-sm hover:shadow-md"
              )}
              style={{ animationDelay: "0.6s" }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll to projects">
          <ChevronDownIcon className="h-8 w-8 text-github-accent/70" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
