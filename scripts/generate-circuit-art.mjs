// Procedurally generates two on-brand PCB / circuit-art SVGs for the
// "Who Venture Electronics is" section. Re-run for new random variants:
//   node scripts/generate-circuit-art.mjs [seed1] [seed2]
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "..", "public");

function mulberry32(seed) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function circuit({ width, height, seed, tone }) {
  const rng = mulberry32(seed);
  const rand = (a, b) => a + rng() * (b - a);
  const ri = (a, b) => Math.floor(rand(a, b + 1));
  const pick = (arr) => arr[ri(0, arr.length - 1)];
  const f = (n) => Number(n).toFixed(1);

  const pal =
    tone === "light"
      ? { bg0: "#102a52", bg1: "#1d4488", trace: "#5d8dff", node: "#86abff", accent: "#e3a23e" }
      : { bg0: "#0b1424", bg1: "#17243d", trace: "#2f63d8", node: "#4f8bff", accent: "#c98a2a" };

  const cell = 46;
  const cols = Math.round(width / cell);
  const rows = Math.round(height / cell);
  const jit = 5;
  const pts = [];
  for (let r = 0; r <= rows; r++)
    for (let c = 0; c <= cols; c++)
      pts.push({ x: c * cell + rand(-jit, jit), y: r * cell + rand(-jit, jit) });

  let pads = "";
  for (const pt of pts)
    if (rng() < 0.2) {
      const s = pick([3, 3, 4, 5]);
      pads += `<rect x="${f(pt.x - s)}" y="${f(pt.y - s)}" width="${f(s * 2)}" height="${f(s * 2)}" rx="1" fill="${pal.trace}" opacity="${rand(0.16, 0.36).toFixed(2)}"/>`;
    }

  let traces = "";
  let nodes = "";
  const nTraces = Math.round(cols * rows * 0.34);
  for (let i = 0; i < nTraces; i++) {
    const a = pick(pts);
    const dir = pick([[1, 0], [0, 1], [1, 1], [1, -1]]);
    const len = ri(2, 5);
    const bx = a.x + dir[0] * len * cell;
    const by = a.y + dir[1] * len * cell;
    if (bx < 4 || bx > width - 4 || by < 4 || by > height - 4) continue;
    traces += `<path d="M ${f(a.x)} ${f(a.y)} L ${f(bx)} ${f(a.y)} L ${f(bx)} ${f(by)}" fill="none" stroke="${pal.trace}" stroke-width="1.4" opacity="${rand(0.1, 0.3).toFixed(2)}"/>`;
    if (rng() < 0.5) {
      const accent = rng() < 0.09;
      nodes += `<circle cx="${f(bx)}" cy="${f(by)}" r="${rand(1.6, 3).toFixed(1)}" fill="${accent ? pal.accent : pal.node}" opacity="${rand(0.6, 1).toFixed(2)}"/>`;
    }
  }

  let chips = "";
  const nChips = ri(2, 4);
  for (let i = 0; i < nChips; i++) {
    const cw = ri(2, 4) * cell;
    const ch = ri(2, 3) * cell;
    const x = rand(cell, width - cw - cell);
    const y = rand(cell, height - ch - cell);
    chips += `<rect x="${f(x)}" y="${f(y)}" width="${cw}" height="${ch}" rx="4" fill="none" stroke="${pal.trace}" stroke-width="1.2" opacity="0.24"/>`;
    const pins = Math.max(2, Math.floor(cw / 12));
    for (let k = 1; k < pins; k++) {
      const px = x + (k * cw) / pins;
      chips += `<line x1="${f(px)}" y1="${f(y - 6)}" x2="${f(px)}" y2="${f(y)}" stroke="${pal.trace}" stroke-width="1" opacity="0.18"/><line x1="${f(px)}" y1="${f(y + ch)}" x2="${f(px)}" y2="${f(y + ch + 6)}" stroke="${pal.trace}" stroke-width="1" opacity="0.18"/>`;
    }
    chips += `<rect x="${f(x + cw * 0.3)}" y="${f(y + ch * 0.3)}" width="${f(cw * 0.4)}" height="${f(ch * 0.4)}" rx="2" fill="${pal.trace}" opacity="0.12"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" width="${width}" height="${height}">
  <defs>
    <radialGradient id="bg" cx="${tone === "light" ? "72%" : "46%"}" cy="32%" r="95%">
      <stop offset="0%" stop-color="${pal.bg1}"/>
      <stop offset="100%" stop-color="${pal.bg0}"/>
    </radialGradient>
    <radialGradient id="vg" cx="50%" cy="42%" r="78%">
      <stop offset="52%" stop-color="${pal.bg0}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${pal.bg0}" stop-opacity="0.72"/>
    </radialGradient>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="1.8" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <g>${chips}</g>
  <g>${pads}</g>
  <g>${traces}</g>
  <g filter="url(#glow)">${nodes}</g>
  <rect width="${width}" height="${height}" fill="url(#vg)"/>
</svg>`;
}

const seed1 = Number(process.argv[2]) || 20260603;
const seed2 = Number(process.argv[3]) || 815472;

writeFileSync(join(publicDir, "identity-circuit-1.svg"), circuit({ width: 880, height: 820, seed: seed1, tone: "dark" }));
writeFileSync(join(publicDir, "identity-circuit-2.svg"), circuit({ width: 680, height: 460, seed: seed2, tone: "light" }));
console.log(`Generated identity-circuit-1.svg (seed ${seed1}) and identity-circuit-2.svg (seed ${seed2}).`);
