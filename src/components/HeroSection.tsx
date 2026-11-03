
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, FileText } from 'lucide-react';
import AsciiPortrait from '@/components/AsciiPortrait';

const facts = [
  { label: 'focus', value: 'simulation · markets · analytics' },
  { label: 'stack', value: 'python · typescript · react' },
  { label: 'status', value: 'open to work', live: true },
];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current
            ?.querySelectorAll('.staggered-item')
            .forEach((el, i) => {
              window.setTimeout(() => el.classList.add('active'), i * 60);
            });
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-start">
          <div>
            <p className="staggered-item font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-8">
              Data scientist · full-stack developer
            </p>

            <h1 className="staggered-item text-5xl md:text-7xl font-medium tracking-tight leading-[0.98] text-foreground">
              Aziz Dhouib
            </h1>

            <p className="staggered-item mt-8 text-2xl md:text-3xl leading-snug tracking-tight text-secondary-foreground max-w-2xl">
              I build systems that have to survive scrutiny.
            </p>

            <p className="staggered-item mt-5 text-base md:text-lg leading-8 text-secondary-foreground max-w-xl">
              Data scientist and full-stack developer. I interned at KPM Group and
              completed data science programs with Boston Consulting Group and
              Accenture — forecasting models, BI dashboards and ETL pipelines. I ship
              the software behind that analysis: Python services, React interfaces,
              and simulation and trading systems where every number carries a
              provenance label.
            </p>

            <div className="staggered-item mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-colors duration-150 hover:bg-foreground/90"
              >
                Read the work
                <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-border bg-secondary text-secondary-foreground text-sm font-medium transition-colors duration-150 hover:bg-secondary/80"
              >
                <FileText className="h-4 w-4 text-muted-foreground" />
                Résumé
              </Link>
            </div>

            <dl className="staggered-item mt-12 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground mb-1.5">
                    {fact.label}
                  </dt>
                  <dd className="font-mono text-xs text-secondary-foreground flex items-center gap-2">
                    {fact.live && (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-github-accent" />
                    )}
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <AsciiPortrait
            src="/assets/portrait.jpg"
            className="staggered-item w-full max-w-md lg:mt-2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
