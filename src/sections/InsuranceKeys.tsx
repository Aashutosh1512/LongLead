import { insurance } from '../content';
import { IndexedLayout, Section } from '../components/Section';

const LEAD = [{ x: '26%', y: '52%' }];

export function InsuranceKeys() {
  return (
    <Section id="insurance" lead={LEAD}>
      <IndexedLayout label={insurance.label}>
        <div className="grid gap-12 md:grid-cols-2 md:gap-10">
          {insurance.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-[22px] font-semibold leading-snug">{column.title}</h3>
              <ul className="mt-5 border-b border-line">
                {column.items.map((item) => (
                  <li key={item} className="border-t border-line py-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </IndexedLayout>
    </Section>
  );
}
