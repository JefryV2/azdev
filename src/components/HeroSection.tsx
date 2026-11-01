
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const terminalRows = [
  { label: 'agent', value: '+18.4%', detail: 'net, out-of-sample' },
  { label: 'market', value: '+9.2%', detail: 'buy & hold' },
  { label: 'sharpe', value: '1.31', detail: 'agent vs 0.86 baseline' },
];

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
          if (subtitle) subtitle.classList.add('active');
          if (cta) cta.classList.add('active');
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
      className="min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-24 items-center">
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-4">
              Aziz Dhouib · Portfolio
            </p>

            <h1 className="hero-title staggered-item text-4xl md:text-6xl font-medium tracking-tight leading-[1.05] text-foreground max-w-xl">
              Data scientist & full-stack developer
            </h1>

            <p className="hero-subtitle staggered-item mt-6 text-lg text-muted-foreground max-w-lg leading-8">
              I build data-driven platforms — trading systems, analytics
              dashboards and machine-learning apps — with Python, React and
              Node.js.
            </p>

            <div className="hero-cta staggered-item flex flex-wrap gap-3 mt-10">
              <a
                href="#projects"
                className={cn(
                  'inline-flex items-center justify-center h-12 px-6 rounded-lg text-[15px] font-medium',
                  'bg-primary text-primary-foreground',
                  'transition-colors duration-150 hover:bg-foreground/90'
                )}
              >
                View projects
              </a>
              <a
                href="#contact"
                className={cn(
                  'inline-flex items-center justify-center h-12 px-6 rounded-lg text-[15px] font-medium',
                  'bg-secondary text-secondary-foreground border border-border',
                  'transition-colors duration-150 hover:bg-secondary/80'
                )}
              >
                Contact
              </a>
            </div>
          </div>

          {/* The moment: a quiet terminal readout */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <span className="font-mono text-xs text-muted-foreground">
                backtest.py — flytrader
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                daily · ohlcv
              </span>
            </div>

            <div className="p-5 font-mono text-[13px] leading-6">
              <p className="text-muted-foreground">
                <span className="text-foreground">$</span> python backtest.py
                --agent flytrader --equities 54
              </p>
              <p className="mt-1 text-muted-foreground">
                walk-forward · 2018-01 → 2025-06
              </p>

              <div className="mt-4 space-y-1.5">
                {terminalRows.map((row) => (
                  <p key={row.label} className="flex items-baseline gap-3">
                    <span className="w-16 text-muted-foreground">{row.label}</span>
                    <span className="w-16 text-right tabular-nums text-foreground">
                      {row.value}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {row.detail}
                    </span>
                  </p>
                ))}
              </div>

              <p className="mt-4 pt-3 border-t border-border flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-github-accent" />
                <span className="text-muted-foreground text-xs">
                  edge held out-of-sample
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
