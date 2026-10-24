import type { ReactNode } from 'react';
import clsx from 'clsx';
import type { SectionLabel } from '../content';
import { LeadLane, type LeadWaypoint } from './lead/LeadLane';

interface SectionProps {
  id?: string;
  tone?: 'paper' | 'surface';
  /** Hairline along the top edge, to separate two sections on the same ground. */
  rule?: boolean;
  lead?: LeadWaypoint[];
  className?: string;
  children: ReactNode;
}

export function Section({ id, tone = 'paper', rule = false, lead, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'relative section-y',
        tone === 'surface' ? 'bg-surface' : 'bg-paper',
        rule && 'border-t border-line',
        className,
      )}
    >
      {children}
      {lead && <LeadLane points={lead} />}
    </section>
  );
}

interface InsetPanelProps {
  id?: string;
  tone: 'ink' | 'accent';
  lead?: LeadWaypoint[];
  labelledBy?: string;
  children: ReactNode;
}

/** A rounded panel inset 16px from the page edges. */
export function InsetPanel({ id, tone, lead, labelledBy, children }: InsetPanelProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="relative bg-paper p-4">
      <div
        className={clsx(
          'relative rounded-panel section-y',
          tone === 'ink' ? 'bg-ink text-paper' : 'bg-accent text-on-accent',
          // The rust panel sits above the lead so the stroke tucks behind it instead of vanishing on it.
          tone === 'accent' && 'z-20',
        )}
      >
        {children}
      </div>
      {lead && <LeadLane points={lead} />}
    </section>
  );
}

/** Mono index label in the left third, content from one third across. */
export function IndexedLayout({ label, children }: { label: SectionLabel; children: ReactNode }) {
  return (
    <div className="page grid gap-y-10 lg:grid-cols-3 lg:gap-x-10">
      <h2 className="meta text-muted lg:pt-2">
        <span className="text-accent">{label.index}/</span> {label.title}
      </h2>
      <div className="lg:col-span-2">{children}</div>
    </div>
  );
}

/** Matches IndexedLayout's columns for panels with no index label. */
export function OffsetLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page grid lg:grid-cols-3 lg:gap-x-10">
      <div className="lg:col-span-2 lg:col-start-2">{children}</div>
    </div>
  );
}
