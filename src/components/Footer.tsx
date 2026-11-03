
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRightIcon, PiggyBank, Github } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const quickLinks = [
  { name: 'Background', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Index', href: '#index' },
  { name: 'Contact', href: '#contact' }
];

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
    <footer className="py-16 border-t border-border bg-background">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-medium text-base text-foreground mb-3">Aziz Dhouib</h3>
            <p className="text-muted-foreground text-sm leading-6 max-w-xs">
              Data science and full-stack work: trading systems, analytics platforms and ML-powered apps.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Links</h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 w-fit"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://github.com/JefryV2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 w-fit"
              >
                <Github className="h-4 w-4" />
                @JefryV2
              </a>
            </nav>
          </div>

          <div>
            <h3 className="font-medium text-sm text-foreground mb-3">Project investment</h3>
            <p className="text-sm text-muted-foreground leading-6 mb-4">
              Interested in investing in one of my projects? Let me know which one caught your attention.
            </p>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full h-10 gap-2 border-border bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground"
                >
                  <PiggyBank className="h-4 w-4 text-muted-foreground" /> Invest in a project
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-foreground">Investment interest</DialogTitle>
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
                      className="bg-secondary/60 border-border rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-muted-foreground">Your email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-secondary/60 border-border rounded-lg"
                    />
                  </div>

                  <Button type="submit" className="w-full h-10 rounded-lg">
                    Submit interest <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aziz Dhouib
          </p>

          <p className="font-mono text-xs text-muted-foreground">v1.0.0</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
