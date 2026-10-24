import { contact, meet } from '../content';
import { PillLink } from '../components/PillLink';
import { InsetPanel, OffsetLayout } from '../components/Section';

const LEAD = [{ x: '16%', y: '50%' }];

export function MeetFirst() {
  return (
    <InsetPanel id="meet" tone="accent" lead={LEAD} labelledBy="meet-title">
      <OffsetLayout>
        <h2
          id="meet-title"
          className="max-w-[18ch] font-display text-[clamp(34px,4.4vw,60px)] font-semibold leading-[1.05] tracking-[-0.02em]"
        >
          {meet.line}
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <PillLink href={contact.meetHref} variant="paper">
            {meet.primary}
          </PillLink>
          <PillLink href={contact.phoneHref} variant="outline-light">
            {contact.callLabel}
          </PillLink>
        </div>
        <p className="meta mt-8 text-on-accent/80">{meet.note}</p>
      </OffsetLayout>
    </InsetPanel>
  );
}
