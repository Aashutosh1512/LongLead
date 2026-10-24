export interface LeadWaypoint {
  /** Horizontal position as a CSS length, relative to the section's content column. */
  x: string;
  /** Vertical position as a CSS length, relative to the section's height. */
  y: string;
}

export const LEAD_POINT_SELECTOR = '[data-lead-point]';

/**
 * Marks where the lead passes through a section. Place inside a positioned
 * section; waypoints are collected in document order, so the first one on the
 * page holds the clip and the last one holds the loop. Keep waypoints in empty
 * space: the lead runs in vertical S curves between them.
 */
export function LeadLane({ points }: { points: LeadWaypoint[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="page h-full">
        <div className="relative h-full">
          {points.map((point, i) => (
            <span
              key={i}
              data-lead-point=""
              className="absolute size-0"
              style={{ left: point.x, top: point.y }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
