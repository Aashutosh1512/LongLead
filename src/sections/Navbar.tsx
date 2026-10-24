import { brand, contact, nav } from '../content';
import { PillLink } from '../components/PillLink';
import { ClipIcon } from '../components/lead/ClipMark';
import { scrollToSection } from '../lib/scrollToSection';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 h-(--nav-height) border-b border-line bg-paper">
      <div className="page flex h-full items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 md:gap-2.5" aria-label="Long Lead, back to top">
          <ClipIcon className="h-7 w-auto text-accent md:h-8" />
          <span className="whitespace-nowrap font-display text-[24px] font-semibold leading-none tracking-[-0.03em] md:text-[30px]">
            {brand.wordmark}
          </span>
        </a>

        <nav aria-label="Main" className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 md:flex">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={scrollToSection}
                  className="text-[15px] font-medium text-ink/80 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <PillLink href={contact.meetHref} size="sm">
            {nav.cta}
          </PillLink>
        </nav>
      </div>
    </header>
  );
}
