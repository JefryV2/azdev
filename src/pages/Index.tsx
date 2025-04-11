
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScroll';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Index = () => {
  useScrollAnimation();
  
  useEffect(() => {
    // Set dark theme for the entire site
    document.documentElement.classList.add('dark');
    
    // Smooth scroll to section when clicking on hash links
    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);
        
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
          
          // Update URL without triggering a page reload
          history.pushState(null, '', targetId);
        }
      }
    };
    
    // Background particles animation with improved aesthetics
    const createBackgroundParticles = () => {
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'fixed inset-0 -z-20 overflow-hidden pointer-events-none';
      document.body.appendChild(particlesContainer);
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle absolute rounded-full';
        
        // Random size, position and animation duration
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.3}`;
        particle.style.backgroundColor = `rgba(56, 139, 253, ${Math.random() * 0.2})`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    document.addEventListener('click', handleHashLinkClick);
    createBackgroundParticles();
    
    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background antialiased overflow-x-hidden relative">
      {/* Animated gradient background similar to footer */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl animate-pulse fixed"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl fixed"></div>
      <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full bg-primary/5 blur-3xl animate-pulse fixed"></div>
      
      {/* Enhanced Grid overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 fixed -z-10"></div>
      
      {/* Grid overlay for depth */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0)_1.5px,transparent_1.5px)] bg-[size:30px_30px] opacity-[0.03] pointer-events-none -z-10"></div>
      
      <Navbar />
      
      <div className="relative z-10">
        <HeroSection />
        
        {/* Enhanced Resume Button with hover effects and hover card */}
        <div className="container mx-auto px-6 my-8 flex justify-center md:hidden">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link to="/resume">
                <Button className="w-full gap-2 btn-glow bg-github-darker hover:bg-github-darker/80 transition-all duration-300 border border-primary/20 hover:border-primary/40">
                  <FileText className="h-4 w-4" /> View My Resume
                </Button>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-github-darker border border-primary/20">
              <div className="flex flex-col space-y-2">
                <p className="text-sm text-muted-foreground">
                  View my professional experience, skills, and qualifications.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
