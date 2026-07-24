# SiriOS — Design Tokens

## Design Language

Anime Gothic × Minimal Luxury × Terminal Interface × Pixel Art × Interactive Storytelling

---

## Color

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg` | `#000000` | Page background |
| `--color-bg-elevated` | `#0a0a0a` | Panels, cards |
| `--color-bg-subtle` | `#111111` | Hover states, inputs |
| `--color-accent` | `#ff1493` | Hot pink — borders, links, glow |
| `--color-accent-muted` | `#e6007e` | Secondary accent |
| `--color-accent-glow` | `rgba(255, 20, 147, 0.4)` | Box shadows, text glow |
| `--color-text-primary` | `#ffffff` | Headings, body |
| `--color-text-secondary` | `#a0a0a0` | Labels, metadata |
| `--color-text-muted` | `#666666` | Placeholders, disabled |
| `--color-border` | `#ff1493` | 1px panel borders |
| `--color-border-subtle` | `rgba(255, 20, 147, 0.3)` | Dividers |

---

## Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Editorial serif (TBD) | Hero headings, section titles |
| `--font-mono` | JetBrains Mono | Terminal, labels, system UI |
| `--font-body` | System sans or editorial sans | Paragraphs |

### Scale

| Token | Size | Line Height |
|-------|------|-------------|
| `--text-xs` | 0.75rem | 1rem |
| `--text-sm` | 0.875rem | 1.25rem |
| `--text-base` | 1rem | 1.5rem |
| `--text-lg` | 1.125rem | 1.75rem |
| `--text-xl` | 1.25rem | 1.75rem |
| `--text-2xl` | 1.5rem | 2rem |
| `--text-4xl` | 2.25rem | 2.5rem |
| `--text-6xl` | 3.75rem | 1 |

---

## Spacing

Base unit: `4px`

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |

---

## Borders & Radius

| Token | Value |
|-------|-------|
| `--border-width` | 1px |
| `--radius-sm` | 2px |
| `--radius-md` | 4px |
| `--radius-none` | 0 |

Panels use sharp corners with 1px hot pink borders. No heavy rounding.

---

## Effects

| Token | Value |
|-------|-------|
| `--glow-sm` | `0 0 8px var(--color-accent-glow)` |
| `--glow-md` | `0 0 16px var(--color-accent-glow)` |
| `--glow-text` | `0 0 10px var(--color-accent-glow)` |
| `--scanline-opacity` | 0.03 |

Optional scanline overlay for retro OS feel.

---

## Motion

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Hovers, toggles |
| `--duration-normal` | 300ms | Panel transitions |
| `--duration-slow` | 600ms | ASCII portrait morph |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes |

Respect `prefers-reduced-motion`: disable particles, reduce cat animation, skip Lenis smoothing.

---

## Pixel Art

```css
image-rendering: pixelated;
image-rendering: crisp-edges;
```

Cat sprites and icons render at integer scale multiples (32px, 48px, 64px).

---

## Component Patterns

- **Panel:** `bg-elevated` + 1px accent border + optional glow
- **Terminal:** mono font, `$` prompt prefix, blinking cursor
- **Tag:** small mono label, accent border, transparent bg
- **Button primary:** accent fill, black text
- **Button ghost:** accent border, transparent bg, glow on hover
