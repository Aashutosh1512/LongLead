import { afterWalk } from '../content';
import { InsetPanel, OffsetLayout } from '../components/Section';

const LEAD = [{ x: '20%', y: '50%' }];

export function AfterWalk() {
  return (
    <InsetPanel tone="ink" lead={LEAD} labelledBy="after-walk-title">
      <OffsetLayout>
        <h2 id="after-walk-title" className="heading max-w-[16ch]">
          {afterWalk.title}
        </h2>
        <ol className="mt-12 border-b border-paper/15">
          {afterWalk.lines.map((line, i) => (
            <li key={line} className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 border-t border-paper/15 py-6 md:grid-cols-[56px_minmax(0,1fr)]">
              <span className="meta pt-2.5 text-paper/60">{String(i + 1).padStart(2, '0')}</span>
              <p className="max-w-[34ch] font-display text-[clamp(22px,2.3vw,30px)] leading-[1.3]">{line}</p>
            </li>
          ))}
        </ol>
      </OffsetLayout>
    </InsetPanel>
  );
}
