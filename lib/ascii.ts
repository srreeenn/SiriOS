// Wide density ramp (classic ascii-art ordering, light -> dense) for finer
// tonal gradation than a 10-char ramp gives. Leading space = "skip" (background).
const RAMP = " .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";

export interface AsciiParticle {
  /** Home position in source-image pixel space */
  hx: number;
  hy: number;
  /** Current animated position (mutated per-frame, kept out of React state) */
  x: number;
  y: number;
  vx: number;
  vy: number;
  ch: string;
  color: string;
  brightness: number;
  size: number;
  phase: number;
  state: "home" | "explode" | "float" | "return";
  stateStart: number;
  lastHit: number;
}

/**
 * Samples an already-drawn <canvas> (or any CanvasRenderingContext2D source)
 * on a grid, converts luminance to an ASCII density character, and returns
 * one particle per non-background sample. Pixels darker than `threshold`
 * are skipped so the portrait dissolves into its silhouette, not a full grid.
 */
export function extractParticles(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  cell = 9,
  threshold = 0.06
): AsciiParticle[] {
  const { data } = ctx.getImageData(0, 0, width, height);
  const cols = Math.floor(width / cell);
  const rows = Math.floor(height / cell);
  const particles: AsciiParticle[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const px = Math.floor(c * cell + cell / 2);
      const py = Math.floor(r * cell + cell / 2);
      const idx = (py * width + px) * 4;
      const rr = data[idx];
      const gg = data[idx + 1];
      const bb = data[idx + 2];
      const lum = (0.299 * rr + 0.587 * gg + 0.114 * bb) / 255;

      if (lum < threshold) continue;

      const rampIdx = Math.min(RAMP.length - 1, Math.floor(lum * (RAMP.length - 1)));
      const ch = RAMP[rampIdx];
      if (ch === " ") continue;

      particles.push({
        hx: px,
        hy: py,
        x: px,
        y: py,
        vx: 0,
        vy: 0,
        ch,
        color: `rgb(${rr}, ${gg}, ${bb})`,
        brightness: lum,
        // grid-consistent size with a little brightness-driven texture,
        // instead of size ballooning with luminance
        size: cell * (0.85 + lum * 0.35),
        phase: Math.random() * Math.PI * 2,
        state: "home",
        stateStart: 0,
        lastHit: 0,
      });
    }
  }

  return particles;
}

/** Maps source-image pixel coords -> canvas pixel coords for object-fit: cover. */
export function toCanvasSpace(
  px: number,
  py: number,
  sourceW: number,
  sourceH: number,
  canvasW: number,
  canvasH: number
): [number, number] {
  const scale = Math.max(canvasW / sourceW, canvasH / sourceH);
  const offX = (canvasW - sourceW * scale) / 2;
  const offY = (canvasH - sourceH * scale) / 2;
  return [px * scale + offX, py * scale + offY];
}
