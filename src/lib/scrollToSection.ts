import type { MouseEvent } from 'react';
import { animate } from 'motion';
import { EASE } from './motion';

const CANCEL_EVENTS = ['wheel', 'touchstart', 'keydown'] as const;

/**
 * Click handler for in-page links. Animates the scroll itself because
 * Chromium on Windows ignores `scroll-behavior: smooth` when the system's
 * animation effects are switched off.
 */
export function scrollToSection(event: MouseEvent<HTMLAnchorElement>) {
  const { hash } = event.currentTarget;
  const target = hash ? document.querySelector<HTMLElement>(hash) : null;
  if (!target) return;

  event.preventDefault();
  history.pushState(null, '', hash);

  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const destination = () => target.getBoundingClientRect().top + window.scrollY - offset;

  const from = window.scrollY;
  const distance = Math.abs(destination() - from);

  const controls = animate(0, 1, {
    duration: Math.min(1.4, Math.max(0.6, distance / 3000)),
    ease: EASE,
    // Re-read the destination each frame so layout shifts mid-scroll still land on target.
    onUpdate: (p) => window.scrollTo({ top: from + (destination() - from) * p, behavior: 'instant' }),
  });

  const cancel = () => controls.stop();
  CANCEL_EVENTS.forEach((type) => window.addEventListener(type, cancel, { once: true, passive: true }));
  controls.finished.then(() => CANCEL_EVENTS.forEach((type) => window.removeEventListener(type, cancel)));
}
