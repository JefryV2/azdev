import React from 'react';
import { credentials } from '@/data/credentials';

const AboutSection = () => {
  return (
    <section id="about" className="pt-16 pb-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="text-xl font-medium tracking-tight text-foreground">Background</h2>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              programs · internships
            </p>
          </div>

          <div>
            {/* Programs & companies — the names, with the actual arrangement stated */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4">
                <h3 className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground">
                  Programs &amp; internships
                </h3>
                <span className="font-mono text-[10.5px] text-muted-foreground">
                  2022 — 2024 · remote
                </span>
              </div>

              <div className="grid sm:grid-cols-3 sm:divide-x divide-border border-y border-border">
                {credentials.map((item) => (
                  <div key={item.id} className="bg-background py-6 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                    <p className="text-lg md:text-xl font-medium tracking-tight text-foreground leading-tight">
                      {item.org}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-github-accent">
                      {item.kind}
                    </p>
                    <p className="mt-1 text-[13px] leading-6 text-secondary-foreground">
                      {item.role}
                    </p>
                    <p className="mt-2 text-[12.5px] leading-6 text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
