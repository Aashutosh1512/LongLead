import { prices } from '../content';
import { IndexedLayout, Section } from '../components/Section';

const LEAD = [{ x: '18%', y: '55%' }];

export function Prices() {
  return (
    <Section id="prices" rule lead={LEAD}>
      <IndexedLayout label={prices.label}>
        <ul className="border-b border-line">
          {prices.rows.map((row) => (
            <li key={row.item} className="flex items-baseline justify-between gap-6 border-t border-line py-6">
              <span className="font-display text-[clamp(20px,2vw,26px)] leading-snug">{row.item}</span>
              <span className="meta shrink-0 text-right">{row.price}</span>
            </li>
          ))}
        </ul>
        <p className="meta mt-6 max-w-[60ch] text-muted">{prices.note}</p>
      </IndexedLayout>
    </Section>
  );
}
