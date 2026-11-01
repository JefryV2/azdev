
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

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Dark theme for the entire site
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

          history.pushState(null, '', targetId);
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);

    return () => {
      document.removeEventListener('click', handleHashLinkClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />

      <HeroSection />

      {/* Resume shortcut for small screens */}
      <div className="flex justify-center pb-12 mt-4 md:hidden">
        <Link to="/resume">
          <Button
            variant="outline"
            className="h-10 gap-2 rounded-lg border-border bg-secondary/60 text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground"
          >
            <FileText className="h-4 w-4 text-muted-foreground" /> View my resume
          </Button>
        </Link>
      </div>

      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
