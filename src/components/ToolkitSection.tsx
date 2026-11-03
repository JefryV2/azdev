import React from 'react';
import { tooling } from '@/data/projects';

const ToolkitSection = () => {
  return (
    <section id="toolkit" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[180px_1fr] gap-8 lg:gap-16">
          <div>
            <h2 className="text-xl font-medium tracking-tight text-foreground">Toolkit</h2>
            <p className="mt-2 font-mono text-[11px] text-muted-foreground">
              what I work in
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10">
            {tooling.map((group) => (
              <div key={group.group}>
                <h3 className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground mb-3 pb-3 border-b border-border">
                  {group.group}
                </h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-[13.5px] text-secondary-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
