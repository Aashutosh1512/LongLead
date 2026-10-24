import { groups } from '../content';
import { IndexedLayout, Section } from '../components/Section';

const LEAD = [{ x: '24%', y: '55%' }];

export function Groups() {
  return (
    <Section id="groups" tone="surface" lead={LEAD}>
      <IndexedLayout label={groups.label}>
        <div className="border-b border-line">
          {groups.items.map((group) => (
            <article key={group.name} className="border-t border-line py-9 md:py-11">
              <h3 className="font-display text-[clamp(34px,4.2vw,58px)] font-semibold leading-[1.04] tracking-[-0.02em]">
                {group.name}
              </h3>
              <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-10">
                <p className="max-w-[42ch] text-ink/85">{group.note}</p>
                <p className="meta shrink-0 text-ink">{group.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </IndexedLayout>
    </Section>
  );
}
