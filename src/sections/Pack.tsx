import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { pack } from '../content';
import { Photo } from '../components/Photo';
import { IndexedLayout, Section } from '../components/Section';
import { lift } from '../lib/motion';

const LEAD = [
  { x: '16%', y: '38%' },
  { x: '27%', y: '80%' },
];

/** Vertical offsets for each photograph, from tablet up. */
const OFFSETS = [0, 56, 20, 72, 8, 44];

export function Pack() {
  return (
    <Section id="pack" lead={LEAD}>
      <IndexedLayout label={pack.label}>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:pb-16">
          {pack.dogs.map((dog, i) => (
            <motion.li
              key={dog.name}
              className="md:mt-(--offset)"
              style={{ '--offset': `${OFFSETS[i % OFFSETS.length]}px` } as CSSProperties}
              whileHover={{ y: -4 }}
              transition={lift}
            >
              <figure>
                <Photo src={dog.src} alt={dog.alt} className="aspect-square rounded-card" />
                <figcaption className="meta mt-3 flex flex-col">
                  <span className="text-ink">{dog.name}</span>
                  <span className="text-muted">{dog.breed}</span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </IndexedLayout>
    </Section>
  );
}
