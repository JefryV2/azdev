import React from 'react';
import { cn } from '@/lib/utils';
import { validationLedger } from '@/data/projects';

const verdictStyles: Record<string, string> = {
  pass: 'text-github-accent',
  pending: 'text-[#c9a227]',
  miss: 'text-[#e5705a]',
  'not met': 'text-[#e5705a]',
};

const ValidationLedger = () => {
  return (
    <div className="rounded-lg border border-border bg-github-dark overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
        <span className="font-mono text-[11px] text-muted-foreground">
          validation ledger
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">
          2026-11-02
        </span>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground px-4 py-2 w-12">
              #
            </th>
            <th className="text-left font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground px-2 py-2">
              check
            </th>
            <th className="text-right font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-muted-foreground px-4 py-2">
              verdict
            </th>
          </tr>
        </thead>
        <tbody>
          {validationLedger.map((row) => (
            <tr key={row.id} className="border-b border-border/60 last:border-b-0">
              <td className="px-4 py-2 font-mono text-[11px] text-muted-foreground">
                {row.id}
              </td>
              <td className="px-2 py-2">
                <span className="block text-[12px] text-secondary-foreground leading-tight">
                  {row.measure}
                </span>
                <span className="block font-mono text-[10px] text-muted-foreground mt-0.5">
                  {row.detail}
                </span>
              </td>
              <td
                className={cn(
                  'px-4 py-2 text-right font-mono text-[11px] align-top',
                  verdictStyles[row.verdict]
                )}
              >
                {row.verdict}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="px-4 py-2.5 border-t border-border font-mono text-[10.5px] leading-4 text-muted-foreground">
        Failures stay in the ledger. A solver failure returns an error, never a
        synthetic number.
      </p>
    </div>
  );
};

export default ValidationLedger;
