
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { cn } from '@/lib/utils';

const stateStyles: Record<string, string> = {
  active: 'text-github-accent',
  live: 'text-github-accent',
  archived: 'text-muted-foreground',
};

const ProjectIndex = () => {
  return (
    <section id="index" className="pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 pb-5 border-b border-border">
          <h2 className="text-xl font-medium tracking-tight text-foreground">
            Full index
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground">
            {projects.length} projects · sorted by last update
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr>
                <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground py-3 pr-3 w-8">
                  #
                </th>
                <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground py-3 pr-4">
                  project
                </th>
                <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground py-3 pr-4 hidden md:table-cell">
                  domain
                </th>
                <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground py-3 pr-4 hidden lg:table-cell">
                  stack
                </th>
                <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground py-3 pr-4 w-14">
                  year
                </th>
                <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground py-3 pr-4 w-20 hidden sm:table-cell">
                  state
                </th>
                <th className="text-right font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground py-3 w-28">
                  links
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={project.id}
                  className="border-t border-border hover:bg-secondary/40 transition-colors duration-150"
                >
                  <td className="py-3 pr-3 font-mono text-[11px] text-muted-foreground align-top">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <td className="py-3 pr-4 align-top">
                    <span className="block text-[14px] text-foreground leading-snug">
                      {project.title}
                    </span>
                    <span className="block md:hidden font-mono text-[10.5px] text-muted-foreground mt-0.5">
                      {project.domain}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-[13px] text-muted-foreground align-top hidden md:table-cell">
                    {project.domain}
                  </td>
                  <td className="py-3 pr-4 font-mono text-[11px] text-muted-foreground align-top hidden lg:table-cell">
                    {project.stack.slice(0, 3).join(' · ')}
                  </td>
                  <td className="py-3 pr-4 font-mono text-[11px] text-muted-foreground align-top">
                    {project.year}
                  </td>
                  <td
                    className={cn(
                      'py-3 pr-4 font-mono text-[10.5px] align-top hidden sm:table-cell',
                      stateStyles[project.state]
                    )}
                  >
                    {project.state}
                  </td>
                  <td className="py-3 align-top text-right whitespace-nowrap">
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[12.5px] text-secondary-foreground hover:text-github-accent transition-colors duration-150 mr-3"
                      >
                        code
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[12.5px] text-secondary-foreground hover:text-github-accent transition-colors duration-150"
                      >
                        demo
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    {!project.codeUrl && !project.demoUrl && (
                      <span className="font-mono text-[11px] text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProjectIndex;
