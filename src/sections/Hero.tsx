import { motion } from 'motion/react';
import { brand, contact, hero } from '../content';
import { Emphasis } from '../components/Emphasis';
import { Photo } from '../components/Photo';
import { PillLink } from '../components/PillLink';
import { LeadLane } from '../components/lead/LeadLane';
import { EASE } from '../lib/motion';

/** The clip hangs in the bottom padding of the text column, below the actions. */
const LEAD = [{ x: '22%', y: 'calc(100% - 40px)' }];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="@container relative bg-paper">
      <div className="grid lg:min-h-[clamp(520px,76vh,780px)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="page-start order-2 flex flex-col justify-end pr-(--gutter) pb-16 pt-10 lg:order-1 lg:pb-32 lg:pr-14 lg:pt-20">
          <p className="meta text-muted">{brand.meta}</p>

          <motion.h1
            id="hero-title"
            className="display mt-6 max-w-[11ch]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <Emphasis text={hero.headline} />
          </motion.h1>

          <hr className="mt-10 border-line" />

          <p className="mt-6 max-w-[44ch] text-[18px] leading-[1.55]">{hero.sentence}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink href={contact.meetHref}>{hero.primary}</PillLink>
            <PillLink href={contact.phoneHref} variant="outline">
              {contact.callLabel}
            </PillLink>
          </div>
        </div>

        <div className="relative order-1 h-[46vh] lg:order-2 lg:h-auto lg:py-12">
          <Photo
            src={hero.image.src}
            alt={hero.image.alt}
            priority
            className="size-full lg:rounded-l-card"
          />
        </div>
      </div>

      <LeadLane points={LEAD} />
    </section>
  );
}
