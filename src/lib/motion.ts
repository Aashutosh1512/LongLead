import type { Transition } from 'motion/react';

export const EASE = [0.22, 1, 0.36, 1] as const;

export const settle: Transition = { duration: 1.1, ease: EASE };

export const lift: Transition = { duration: 0.4, ease: EASE };
