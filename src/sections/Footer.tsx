import { brand, contact, footer } from '../content';
import { LeadLane } from '../components/lead/LeadLane';
import { scrollToSection } from '../lib/scrollToSection';

/** The lead ends here; its loop hangs below this point, clear of the wordmark. */
const LEAD = [{ x: '22%', y: 'calc(var(--section-y) + 8px)' }];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="page grid pt-(--section-y) lg:grid-cols-3 lg:gap-x-10">
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-2 lg:col-start-2">
          <p className="max-w-[18ch]">{footer.area}</p>

          <ul className="flex flex-col gap-1">
            <li>
              <a href={contact.emailHref} className="transition-colors hover:text-accent">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={contact.phoneHref} className="transition-colors hover:text-accent">
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-1">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={scrollToSection} className="text-paper/70 transition-colors hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <p
        aria-hidden
        className="mt-20 select-none whitespace-nowrap pl-[2vw] font-display text-[19vw] font-semibold leading-[0.8] tracking-[-0.04em] lg:mt-28"
      >
        <span className="block translate-y-[0.14em]">{brand.wordmark}</span>
      </p>

      <LeadLane points={LEAD} />
    </footer>
  );
}
