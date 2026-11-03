export interface Credential {
  id: string;
  org: string;
  role: string;
  kind: string;
  detail: string;
  years: string;
}

/**
 * Taken verbatim from the résumé. BCG and Accenture are recorded there as job
 * simulations, so the label says so — the names carry weight on their own, and
 * mislabelling them as employment is the one thing that would undo it.
 */
export const credentials: Credential[] = [
  {
    id: 'bcg',
    org: 'Boston Consulting Group',
    role: 'Data Science Job Simulation',
    kind: 'simulation',
    detail: 'Predictive models in Python; automated SQL/ETL pipelines cut data inconsistencies by 40%.',
    years: '2022 — 2024',
  },
  {
    id: 'accenture',
    org: 'Accenture',
    role: 'Data Analytics & Visualization Job Simulation',
    kind: 'simulation',
    detail: 'Cleaned and modelled large datasets in Python and R; Power BI and Tableau dashboards for live decisions.',
    years: '2022 — 2024',
  },
  {
    id: 'kpm',
    org: 'KPM Group',
    role: 'Data Analytics Consulting Internship',
    kind: 'internship',
    detail: 'SQL and BI on large-scale customer data; automated reporting pipelines cut manual time by 30%.',
    years: '2022 — 2024',
  },
];
