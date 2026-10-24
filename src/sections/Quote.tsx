import { quote } from '../content';
import { Section } from '../components/Section';

/** The quote is centred, so the lead swings out to the far left to pass it. */
const LEAD = [{ x: '6%', y: '50%' }];

export function Quote() {
  return (
    <Section tone="surface" lead={LEAD}>
      <figure className="page flex flex-col items-center text-center">
        <blockquote className="max-w-[32ch] font-display text-[clamp(24px,3vw,30px)] leading-[1.35]">
          <p>“{quote.text}”</p>
        </blockquote>
        <figcaption className="meta mt-8 text-muted">{quote.signature}</figcaption>
      </figure>
    </Section>
  );
}
