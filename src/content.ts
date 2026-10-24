export interface SectionLabel {
  index: string;
  title: string;
}

export interface NavLink {
  label: string;
  href: string;
}

/** Public assets under Vite `base` (GitHub Pages: /LongLead/). */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const phoneDisplay = '0114 555 0180';
const email = 'hello@longlead.dog';

export const contact = {
  phoneDisplay,
  phoneHref: 'tel:+441145550180',
  email,
  emailHref: `mailto:${email}`,
  meetHref: `mailto:${email}?subject=${encodeURIComponent('Meet first')}`,
  callLabel: `Call ${phoneDisplay}`,
};

export const brand = {
  wordmark: 'LONG LEAD',
  meta: 'Dog walking in Sheffield. Groups of four, never more.',
};

export const nav = {
  links: [
    { label: 'The walk', href: '#walk' },
    { label: 'Groups', href: '#groups' },
    { label: 'Prices', href: '#prices' },
  ] satisfies NavLink[],
  cta: 'Meet first',
};

export const hero = {
  /** Wrap at most one word in asterisks to set it in accent italic. */
  headline: 'An hour out, properly *tired*, home again.',
  sentence:
    'Small group walks on the moor edge and in the woods, never more than four dogs, always the same face at the door.',
  primary: 'Meet first',
  image: {
    src: asset('images/hero.jpg'),
    alt: 'A lurcher, a black labrador and a border terrier walking a muddy moorland path in low winter sun, the walker’s boots just in frame.',
  },
};


export const walk = {
  label: { index: '000', title: 'The hour' } satisfies SectionLabel,
  steps: [
    {
      time: '08:40',
      title: 'Pickup.',
      body: 'I let myself in, say hello properly, and check water and the back door before we go.',
    },
    {
      time: '09:00',
      title: 'The walk.',
      body: 'Sixty minutes on the moor edge, in the woods or by the river, depending on weather and who is in the group.',
    },
    {
      time: '10:05',
      title: 'Towels and paws.',
      body: 'Everyone gets dried in the van. Muddy dogs do not come back into clean hallways.',
    },
    {
      time: '10:20',
      title: 'A message.',
      body: 'A photograph, a line about how they were, and the distance we covered.',
    },
  ],
};

export const groups = {
  label: { index: '001', title: 'Groups' } satisfies SectionLabel,
  items: [
    {
      name: 'The Steady Four.',
      note: 'Older dogs and gentle walkers. Plenty of sniffing, no sprinting.',
      meta: 'Max 4 dogs. 60 min. 16 GBP',
    },
    {
      name: 'The Long Ones.',
      note: 'Young, fit dogs who need real distance. Moor edge, hills, two rivers.',
      meta: 'Max 4 dogs. 90 min. 22 GBP',
    },
    {
      name: 'Solo.',
      note: 'Dogs who find groups hard, or who are recovering from something.',
      meta: 'One dog. 45 min. 24 GBP',
    },
  ],
};

export const pack = {
  label: { index: '002', title: 'The pack' } satisfies SectionLabel,
  dogs: [
    { name: 'Mabel', breed: 'lurcher', src: asset('images/mabel.jpg'), alt: 'Mabel, a grey brindle lurcher, standing on a leafy woodland path.' },
    { name: 'Otto', breed: 'cocker spaniel', src: asset('images/otto.jpg'), alt: 'Otto, a liver and white cocker spaniel with wet ears, looking up by a river.' },
    { name: 'Sid', breed: 'staffie cross', src: asset('images/sid.jpg'), alt: 'Sid, a brindle staffie cross, grinning on a heather moor path.' },
    { name: 'Winnie', breed: 'border terrier', src: asset('images/winnie.jpg'), alt: 'Winnie, a border terrier, sitting on a stony track by a dry stone wall.' },
    { name: 'Bruno', breed: 'labrador', src: asset('images/bruno.jpg'), alt: 'Bruno, a yellow labrador with a muddy chest, in a beech wood.' },
    { name: 'Peg', breed: 'whippet', src: asset('images/peg.jpg'), alt: 'Peg, a fawn and white whippet in a knitted jumper, on a frosty moor path.' },
  ],
};

export const afterWalk = {
  title: 'What you get after every walk',
  lines: [
    'A photograph from the walk.',
    'A line about how they were, honestly, including the day they rolled in something.',
    'The route and the distance, so you know what they have had.',
  ],
};

export const insurance = {
  label: { index: '003', title: 'The dull but important bit' } satisfies SectionLabel,
  columns: [
    {
      title: 'What is covered',
      items: [
        'Full public liability to 5m GBP',
        'Care, custody and control cover',
        'Canine first aid trained, certificate on request',
        'DBS checked, happy to show it',
      ],
    },
    {
      title: 'How keys are handled',
      items: [
        'Kept in a locked box, tagged with a code and never an address',
        'Returned the day you ask',
        'Never copied',
        'Alarm codes stored separately from keys',
      ],
    },
  ],
};

export const prices = {
  label: { index: '004', title: 'Prices' } satisfies SectionLabel,
  rows: [
    { item: 'Single group walk', price: '16 GBP' },
    { item: 'Block of ten walks', price: '145 GBP' },
    { item: 'Puppy visit, 30 minutes', price: '12 GBP' },
    { item: 'Solo walk', price: '24 GBP' },
  ],
  note: 'Prices include pickup and drop off within four miles. No charge for bank holidays you cancel.',
};

export const quote = {
  text: 'He comes home muddy, exhausted and slightly smug. Exactly what we wanted.',
  signature: 'Rachel, Nether Edge',
};

export const meet = {
  line: 'Come on a walk with us before you book anything.',
  primary: 'Arrange a meet',
  note: 'The first meet and a short walk together are free.',
};

export const footer = {
  area: 'Sheffield S7, S8, S11 and S17',
  links: [
    { label: 'The walk', href: '#walk' },
    { label: 'Prices', href: '#prices' },
    { label: 'Insurance', href: '#insurance' },
  ] satisfies NavLink[],
};
