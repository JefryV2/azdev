
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedWork from '@/components/FeaturedWork';
import ProjectIndex from '@/components/ProjectIndex';
import ToolkitSection from '@/components/ToolkitSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScroll';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const handleHashLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId as string);

        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 72,
            behavior: 'smooth'
          });

          history.pushState(null, '', targetId);
        }
      }
    };

    document.addEventListener('click', handleHashLinkClick);
    return () => document.removeEventListener('click', handleHashLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <FeaturedWork />
      <ProjectIndex />
      <ToolkitSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
