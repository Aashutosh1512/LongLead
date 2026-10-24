import type { AnchorHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

type Variant = 'accent' | 'paper' | 'outline' | 'outline-light';
type Size = 'sm' | 'md';

interface PillLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

/** Filled variants carry the round arrow; outline variants are the quieter second action. */
const variants: Record<Variant, { pill: string; circle?: string }> = {
  accent: { pill: 'bg-accent text-on-accent', circle: 'bg-on-accent text-accent' },
  paper: { pill: 'bg-paper text-ink', circle: 'bg-accent text-on-accent' },
  outline: { pill: 'border border-ink/25 text-ink hover:border-ink/70' },
  'outline-light': { pill: 'border border-paper/40 text-paper hover:border-paper' },
};

const sizes: Record<Size, { pill: string; withArrow: string; plain: string; circle: string; icon: number }> = {
  sm: { pill: 'h-10 text-[14px]', withArrow: 'pl-4 pr-1', plain: 'px-4', circle: 'size-8', icon: 15 },
  md: { pill: 'h-12 text-[15px]', withArrow: 'pl-5 pr-1.5', plain: 'px-5', circle: 'size-9', icon: 16 },
};

export function PillLink({ variant = 'accent', size = 'md', className, children, ...rest }: PillLinkProps) {
  const v = variants[variant];
  const s = sizes[size];

  return (
    <a
      className={clsx(
        'group inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-full font-medium transition-colors duration-300',
        s.pill,
        v.circle ? s.withArrow : s.plain,
        v.pill,
        className,
      )}
      {...rest}
    >
      {children}
      {v.circle && (
        <span
          aria-hidden
          className={clsx(
            'grid place-items-center rounded-full transition-transform duration-300 ease-settle group-hover:translate-x-0.5',
            s.circle,
            v.circle,
          )}
        >
          <ArrowRight size={s.icon} strokeWidth={1.75} />
        </span>
      )}
    </a>
  );
}
