# SiriOS — Implementation Guide

Build order aligned with [PRD.md](./PRD.md) §27. Content and layout ship first; interactive layer comes after.

---

## Phase 0 — Project Setup

```bash
npx create-next-app@latest sirios --typescript --tailwind --eslint --app --src-dir=false
cd sirios
npm install framer-motion gsap @studio-freight/lenis
```

1. Copy design tokens from `DESIGN_TOKENS.md` into `app/globals.css`
2. Configure fonts via `next/font` (JetBrains Mono + editorial display)
3. Copy assets into `public/assets/`
4. Set up folder structure per `SYSTEM_ARCHITECTURE.md`

**Done when:** Black page with pink CSS variables and mono font loads.

---

## Phase 1 — Foundation

Design System · Navigation · Layout · Boot Screen

**Files:** `app/layout.tsx`, `app/globals.css`, `components/layout/Sidebar.tsx`, `components/layout/TerminalBar.tsx`, `components/ui/Panel.tsx`, `components/boot/BootScreen.tsx`

1. Implement design tokens (colors, typography, borders, glow)
2. Build reusable `Panel`, `Button`, `Tag` components
3. OS desktop layout: sidebar + main + footer terminal bar
4. Navigation with anchor scroll to section IDs
5. Boot screen: ASCII logo → loading animation → "Enter SiriOS" (skippable, `sessionStorage` flag)
6. Responsive: sidebar → drawer on `< md`

**Done when:** Boot screen flows into navigable OS layout with empty section placeholders.

---

## Phase 2 — Homepage Content

Hero · Applications · Skills

**Files:** `components/hero/HeroSection.tsx`, `components/projects/AppCard.tsx`, `components/skills/SkillsModules.tsx`, `data/projects.ts`, `data/skills.ts`

1. Hero: name, title, tagline, CTA buttons, static portrait (`next/image`)
2. Typing animation on tagline or subtitle
3. About section: bio, philosophy, interests, current learning (short blocks)
4. Applications grid — featured project **CineVerse** plus others
5. Skills as system modules (Languages, Frontend, Backend, Database, DevOps, AI, Design, Tools, Currently Learning)
6. No colorful badges — consistent panel styling throughout

**Done when:** Homepage tells Siri's story with static content; visitors scroll through all sections.

---

## Phase 3 — Project Pages & Remaining Sections

Journey · GitHub · Contact

**Files:** `app/projects/[slug]/page.tsx`, `components/projects/AppWindow.tsx`, `components/journey/Timeline.tsx`, `components/github/ContributionGraph.tsx`, `components/contact/ContactSection.tsx`, `lib/github.ts`, `data/journey.ts`

1. Dynamic project routes with full application layout:
   - Artwork → Description → Tech Stack → Features → Architecture → Lessons → GitHub → Demo
2. Journey timeline: Education → Learning → Projects → Current Goals
3. GitHub section: contribution graph, pinned repos, current activity (ISR `revalidate: 3600`)
4. Contact: email, GitHub, LinkedIn, resume link, closing message — no form

**Done when:** All PRD §8 flow sections exist with real or placeholder data.

---

## Phase 4 — Interactive Layer

ASCII Portrait · Pixel Cat · Terminal

### 4a — Pixel Cat

**Files:** `components/cat/PixelCat.tsx`, `hooks/useCat.ts`, `components/cat/CatProvider.tsx`, `components/cat/CatStatus.tsx`

1. Fixed-position sprite (`pointer-events: none`, `z-index: 50`)
2. RAF loop with lerp cursor follow
3. States: idle, walking, running, sleeping, attack, easter eggs
4. Cat mode toggle → `localStorage`; cat status widget in sidebar
5. Pause when tab hidden or cat mode off

**Sprites:** idle, walk (2 frames), run (2 frames), attack, sleep, happy

### 4b — ASCII Portrait

**Files:** `components/hero/AsciiPortrait.tsx`, `lib/ascii.ts`

1. Hover-triggered only (no autoplay)
2. Illustration → ASCII particles → cursor interaction → restore
3. `prefers-reduced-motion` fallback: opacity crossfade

### 4c — Terminal

**Files:** `components/terminal/Terminal.tsx`, `hooks/useTerminal.ts`, `data/commands.ts`

1. Optional overlay — fun, does not replace nav
2. Commands: `help`, `about`, `projects`, `skills`, `github`, `contact`, `resume`, `clear`, `exit`
3. History (↑/↓), autocomplete (Tab)
4. `pet cat` triggers happy easter egg

**Done when:** All three interactives work at 60 FPS without blocking content.

---

## Phase 5 — Ship

Performance · Accessibility · SEO · Testing · Deployment

1. Lenis smooth scroll (disable on `prefers-reduced-motion`)
2. Framer Motion: one hero animation per section max
3. Lazy load ASCII portrait, terminal, and GitHub graph
4. Accessibility audit: keyboard nav, focus rings, semantic HTML, screen readers
5. SEO: metadata, OG image, sitemap, robots.txt
6. Lighthouse target 95+; Core Web Vitals green
7. Deploy to Vercel

**Done when:** Production URL live; PRD §25 success criteria met within 2-minute visit.

---

## Key Implementation Notes

### Cat Performance

Do **not** call `setState` every frame. Use refs + direct DOM transform:

```typescript
catRef.current.style.transform = `translate(${x}px, ${y}px) scaleX(${flip})`;
```

Update React state only on state *changes* (idle → running), not every frame.

### Animation Rules (PRD §20)

- One hero animation per section
- GPU-accelerated transforms only
- No excessive motion

### Terminal Security

Sanitize input. No `eval`. Commands are a static lookup table only.

### Tailwind v4

Use `@theme` in CSS for design tokens.

---

## Asset Checklist

- [ ] Hero character illustration (gothic anime)
- [ ] Cat sprite sheet (idle, walk, run, attack, sleep, happy)
- [ ] CineVerse application artwork
- [ ] ASCII boot logo
- [ ] Pixel icons for nav and project cards
- [ ] OG image for social sharing
- [ ] Favicon (pixel cat or "S" monogram)
