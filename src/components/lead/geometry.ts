export interface Point {
  x: number;
  y: number;
}

const LOOP_HALF_WIDTH = 15;
const LOOP_DEPTH = 64;

const round = (n: number) => Math.round(n * 2) / 2;

/**
 * Joins waypoints with cubic curves whose tangents are vertical at every
 * waypoint. Each curve stays inside the box spanned by its two ends, so the
 * lead never swings wider than the waypoints allow. Ends in a hand loop.
 */
export function buildLeadPath(points: Point[]): string {
  const [first, ...rest] = points.map(({ x, y }) => ({ x: round(x), y: round(y) }));
  const commands = [`M${first.x} ${first.y}`];

  let previous = first;
  for (const point of rest) {
    const midY = round((previous.y + point.y) / 2);
    commands.push(`C${previous.x} ${midY} ${point.x} ${midY} ${point.x} ${point.y}`);
    previous = point;
  }

  commands.push(handLoop(previous));
  return commands.join(' ');
}

function handLoop({ x, y }: Point): string {
  const w = LOOP_HALF_WIDTH;
  const h = LOOP_DEPTH;
  return [
    `C${x - w * 1.7} ${y + h * 0.3} ${x - w * 1.3} ${y + h} ${x} ${y + h}`,
    `C${x + w * 1.3} ${y + h} ${x + w * 1.7} ${y + h * 0.3} ${x} ${y}`,
    // Two turns of whipping where the loop is stitched back onto the lead.
    `M${x - 4} ${y - 6} L${x + 4} ${y - 9}`,
    `M${x - 4} ${y - 11} L${x + 4} ${y - 14}`,
  ].join(' ');
}

/**
 * Samples a rendered path and returns a function mapping a page depth (in the
 * path's coordinate space) to the fraction of the path drawn by that depth.
 */
export function createDepthToProgress(path: SVGPathElement, step = 12): (y: number) => number {
  const total = path.getTotalLength();
  const count = Math.max(1, Math.ceil(total / step));
  const depths = new Float64Array(count + 1);

  let deepest = -Infinity;
  for (let i = 0; i <= count; i++) {
    deepest = Math.max(deepest, path.getPointAtLength((i / count) * total).y);
    depths[i] = deepest;
  }

  return (y) => {
    let low = 0;
    let high = count;
    while (low < high) {
      const mid = (low + high) >> 1;
      if (depths[mid] < y) low = mid + 1;
      else high = mid;
    }
    return low / count;
  };
}
