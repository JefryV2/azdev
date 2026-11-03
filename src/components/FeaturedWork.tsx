
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, projects } from '@/data/projects';
import ValidationLedger from '@/components/ValidationLedger';

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.staggered-item')
              .forEach((el, i) => {
                window.setTimeout(() => el.classList.add('active'), i * 60);
              });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className="pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 pb-6 border-b border-border">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
            Selected work
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground">
            {String(featuredProjects.length).padStart(2, '0')} of{' '}
            {String(projects.length).padStart(2, '0')} · full index below
          </p>
        </div>

        <div>
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="staggered-item grid lg:grid-cols-[56px_1fr_400px] gap-6 lg:gap-10 py-10 border-b border-border"
            >
              <div className="font-mono text-xs text-muted-foreground pt-1.5">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="text-2xl md:text-[28px] font-medium tracking-tight text-foreground">
                    {project.codeUrl || project.demoUrl ? (
                      <a
                        href={(project.demoUrl || project.codeUrl) as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-github-accent transition-colors duration-150"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
                  {project.stack.join(' · ')}
                </p>

                {project.story?.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="mt-4 text-[15px] leading-7 text-secondary-foreground max-w-[62ch]"
                  >
                    {paragraph}
                  </p>
                ))}

                {project.note && (
                  <p className="mt-5 border-l-2 border-github-accent/60 pl-4 font-mono text-[12.5px] leading-6 text-secondary-foreground max-w-[62ch]">
                    {project.note}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground hover:text-github-accent transition-colors duration-150"
                    >
                      Code
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground hover:text-github-accent transition-colors duration-150"
                    >
                      Live demo
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                {project.image && (
                  <figure>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full block"
                      loading="lazy"
                    />
                    <figcaption className="mt-2.5 font-mono text-[10.5px] leading-4 text-muted-foreground">
                      {project.ledger
                        ? 'Volumetric smoke over the parametric car — analytic potential flow, not a CFD result'
                        : `${project.domain} — ${project.title}`}
                    </figcaption>
                  </figure>
                )}
                {project.ledger && <ValidationLedger />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
