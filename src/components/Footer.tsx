
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRightIcon, PiggyBank } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleInvestmentInterest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Investment Interest Received",
      description: `Thank you for your interest in investing in "${project || 'our projects'}"!`,
    });
    setEmail('');
    setProject('');
    setIsDialogOpen(false);
  };
  
  return (
    <footer className="py-12 border-t border-primary/20 bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      
      {/* Enhanced Grid overlay with animation */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="relative overflow-hidden">
            <h3 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Specializing in full-stack AI-driven applications that combine elegant interfaces with powerful data science.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#hero" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300 mr-2"></span>
                Home
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300 mr-2"></span>
                Projects
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300 mr-2"></span>
                Skills
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300 mr-2"></span>
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="font-bold text-base bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-4">Project Investment</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Interested in investing in one of my projects? Let me know which one caught your attention.
            </p>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary transition-all duration-300">
                  <PiggyBank className="h-4 w-4 mr-2" /> Invest in a Project
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-github-darker border border-primary/20">
                <DialogHeader>
                  <DialogTitle className="text-white">Investment Interest</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Share your details and which project interests you.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleInvestmentInterest} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label htmlFor="project" className="text-sm text-muted-foreground">Which project interests you?</label>
                    <Input
                      id="project"
                      placeholder="Project name (optional)"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="bg-black/50 border-primary/20 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground">Your email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black/50 border-primary/20 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 transition-all duration-300"
                  >
                    Submit Interest <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="text-xs text-muted-foreground/60">
            <span className="inline-block px-2 py-1 border border-primary/10 rounded-md bg-black/50 hover:bg-primary/5 transition-colors">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
