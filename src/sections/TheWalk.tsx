import { walk } from '../content';
import { IndexedLayout, Section } from '../components/Section';

const LEAD = [
  { x: '27%', y: '34%' },
  { x: '17%', y: '78%' },
];

export function TheWalk() {
  return (
    <Section id="walk" rule lead={LEAD}>
      <IndexedLayout label={walk.label}>
        <ol className="border-b border-line">
          {walk.steps.map((step) => (
            <li
              key={step.time}
              className="grid grid-cols-[64px_minmax(0,1fr)] gap-x-4 gap-y-2 border-t border-line py-7 md:grid-cols-[88px_minmax(0,13rem)_minmax(0,1fr)] md:gap-x-8"
            >
              <span className="meta pt-1.5 text-muted">{step.time}</span>
              <h3 className="font-display text-[20px] font-semibold leading-snug">{step.title}</h3>
              <p className="col-start-2 max-w-[48ch] md:col-start-3">{step.body}</p>
            </li>
          ))}
        </ol>
      </IndexedLayout>
    </Section>
  );
}
