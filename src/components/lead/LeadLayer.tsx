import { useCallback, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'motion/react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { ClipMark } from './ClipMark';
import { LEAD_POINT_SELECTOR } from './LeadLane';
import { buildLeadPath, createDepthToProgress, type Point } from './geometry';

/** Where the tip of the lead sits, as a fraction of viewport height. */
const TIP_POSITION = 0.6;

interface LeadGeometry {
  width: number;
  height: number;
  d: string;
  clip: Point;
  /** Distance from the top of the document to the top of the layer. */
  pageTop: number;
}

/**
 * Wraps the page content and draws the lead over it, through every
 * `LeadLane` waypoint inside. Desktop only.
 */
export function LeadLayer({ children }: { children: ReactNode }) {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div ref={setRoot} className="relative">
      {children}
      {isDesktop && root && <Lead root={root} />}
    </div>
  );
}

function Lead({ root }: { root: HTMLElement }) {
  const pathRef = useRef<SVGPathElement>(null);
  const geometry = useLeadGeometry(root);
  const progress = useLeadProgress(pathRef, geometry);
  const reduceMotion = useReducedMotion();

  if (!geometry) return null;
  const { width, height, d, clip } = geometry;

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 z-10"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="var(--accent)"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ClipMark transform={`translate(${clip.x} ${clip.y})`} strokeWidth={1.6} />
      <motion.path ref={pathRef} d={d} strokeWidth={2} style={{ pathLength: reduceMotion ? 1 : progress }} />
    </svg>
  );
}

function useLeadGeometry(root: HTMLElement): LeadGeometry | null {
  const [geometry, setGeometry] = useState<LeadGeometry | null>(null);

  useLayoutEffect(() => {
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rootRect = root.getBoundingClientRect();
        const points = Array.from(root.querySelectorAll(LEAD_POINT_SELECTOR), (el) => {
          const rect = el.getBoundingClientRect();
          return { x: rect.left - rootRect.left, y: rect.top - rootRect.top };
        });

        if (points.length < 2) {
          setGeometry(null);
          return;
        }

        setGeometry({
          width: rootRect.width,
          height: rootRect.height,
          d: buildLeadPath(points),
          clip: points[0],
          pageTop: rootRect.top + window.scrollY,
        });
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [root]);

  return geometry;
}

/** Pays the lead out so its tip follows a fixed line in the viewport. */
function useLeadProgress(pathRef: RefObject<SVGPathElement | null>, geometry: LeadGeometry | null) {
  const { scrollY } = useScroll();
  const target = useMotionValue(0);
  const progress = useSpring(target, { stiffness: 140, damping: 30, restDelta: 0.0005 });
  const depthToProgress = useRef<((y: number) => number) | null>(null);

  const update = useCallback(
    (scroll: number) => {
      if (!geometry || !depthToProgress.current) return;
      const viewport = window.innerHeight;
      const atBottom = scroll + viewport >= document.documentElement.scrollHeight - 2;
      const tipDepth = scroll + viewport * TIP_POSITION - geometry.pageTop;
      target.set(atBottom ? 1 : depthToProgress.current(tipDepth));
    },
    [geometry, target],
  );

  useLayoutEffect(() => {
    const path = pathRef.current;
    depthToProgress.current = path && geometry ? createDepthToProgress(path) : null;
    update(scrollY.get());
  }, [geometry, pathRef, scrollY, update]);

  useMotionValueEvent(scrollY, 'change', update);

  return progress;
}
