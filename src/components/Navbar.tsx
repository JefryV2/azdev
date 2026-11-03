
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Background', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Index', href: '#index' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-3.5 transition-colors duration-200',
        isScrolled
          ? 'bg-github-dark/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-9">
        <a href="#hero" className="font-medium text-base text-foreground">
          Aziz Dhouib
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <span className="hidden sm:flex items-center gap-2 mr-4">
            <span className="h-2 w-2 rounded-full bg-github-accent" />
            <span className="font-mono text-xs text-muted-foreground">
              Open to work
            </span>
          </span>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors duration-150 px-3 py-2"
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/resume"
            className="ml-2 inline-flex items-center gap-2 h-9 px-4 rounded-lg border border-border text-sm text-foreground bg-secondary hover:bg-secondary/80 transition-colors duration-150"
          >
            <FileText className="h-4 w-4 text-muted-foreground" />
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg text-secondary-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-[60px] bg-github-dark/95 backdrop-blur-sm transition-all duration-300 ease-out shadow-md overflow-hidden border-b border-border',
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-secondary-foreground font-normal py-2.5 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/resume"
            className="text-secondary-foreground font-normal py-2.5 hover:text-foreground transition-colors flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText className="h-4 w-4 text-muted-foreground" /> Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
