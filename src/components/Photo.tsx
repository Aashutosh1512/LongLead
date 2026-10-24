import { motion } from 'motion/react';
import clsx from 'clsx';
import { settle } from '../lib/motion';

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

/** A cropped photograph that settles from a slight zoom the first time it is seen. */
export function Photo({ src, alt, className, priority = false }: PhotoProps) {
  return (
    <div className={clsx('overflow-hidden bg-surface', className)}>
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="size-full object-cover"
        initial={{ scale: 1.03 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={settle}
      />
    </div>
  );
}
