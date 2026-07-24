# SiriOS — System Architecture

## Stack

```
┌─────────────────────────────────────────┐
│              Vercel (CDN + Edge)         │
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│         Next.js 15 (App Router)          │
│  React 19 · TypeScript · Tailwind v4     │
└────────────────────┬────────────────────┘
                     │
     ┌───────────────┼───────────────┐
     │               │               │
┌────▼────┐   ┌──────▼──────┐  ┌─────▼─────┐
│ Framer  │   │    GSAP     │  │   Lenis   │
│ Motion  │   │  (ASCII/    │  │  (smooth  │
│ (UI)    │   │  particles) │  │  scroll)  │
└─────────┘   └─────────────┘  └───────────┘
```

## Directory Structure

```
sirios/
├── app/
│   ├── layout.tsx          # Root layout, fonts, providers
│   ├── page.tsx            # Homepage (OS desktop)
│   ├── projects/
│   │   └── [slug]/page.tsx # Individual application view
│   └── globals.css         # Tailwind + CSS variables
├── components/
│   ├── layout/             # Sidebar, Footer, TerminalBar
│   ├── hero/               # HeroSection, AsciiPortrait
│   ├── cat/                # PixelCat, CatStatus, CatProvider
│   ├── terminal/           # Terminal, CommandParser
│   ├── projects/           # AppCard, AppWindow
│   ├── github/             # ContributionGraph, RepoList
│   ├── journey/            # Timeline
│   └── ui/                 # Button, Panel, Tag, Toggle
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── journey.ts
│   └── commands.ts
├── hooks/
│   ├── useCat.ts           # Cat state machine + RAF loop
│   ├── useTerminal.ts
│   └── useReducedMotion.ts
├── lib/
│   ├── github.ts           # GitHub API fetchers
│   └── ascii.ts            # ASCII conversion utilities
├── types/
│   ├── project.ts
│   ├── cat.ts
│   └── terminal.ts
└── public/
    ├── assets/             # Character art, cat sprites
    └── fonts/
```

## Component Hierarchy

```
RootLayout
├── LenisProvider
├── CatProvider
│   └── PixelCat (fixed, pointer-events: none)
└── Page
    ├── Sidebar
    │   ├── Nav
    │   ├── NowPlaying (v1.1)
    │   ├── CatStatus
    │   └── SystemInfo
    ├── Main
    │   ├── HeroSection
    │   │   └── AsciiPortrait
    │   ├── AboutPanel
    │   ├── GitHubSection
    │   ├── QuickStats
    │   ├── FeaturedProjects
    │   ├── JourneyTimeline
    │   └── Contact
    └── TerminalBar
        ├── TerminalInput
        └── CatModeToggle
```

## Pixel Cat — State Machine

```
                    ┌─────────┐
         ┌─────────►│  IDLE   │◄─────────┐
         │          └────┬────┘          │
         │               │ mouse move    │ idle timeout
         │               ▼               │
         │          ┌─────────┐          │
         │          │FOLLOWING│          │
         │          └────┬────┘          │
         │        slow   │   fast        │
         │          ┌────┴────┐          │
         │          ▼         ▼          │
         │     ┌────────┐ ┌────────┐     │
         │     │WALKING │ │ RUNNING│     │
         │     └────────┘ └────────┘     │
         │                               │
    click│          ┌─────────┐          │
         └─────────►│ ATTACK  │          │
                    └─────────┘          │
                                         │
                    ┌─────────┐          │
                    │ SLEEPING│──────────┘
                    └─────────┘
                         ▲
                         │ easter egg / pet command
                    ┌─────────┐
                    │  HAPPY  │
                    └─────────┘
```

### Cat Engine (per frame)

1. Read cursor position and compute velocity
2. Lerp cat position toward target (offset behind cursor)
3. Select sprite/state based on velocity thresholds
4. Flip sprite horizontally by movement direction
5. Emit mood to `CatStatus` widget via context
6. Skip loop if cat mode off or document hidden

## Terminal Architecture

```
User input
    │
    ▼
CommandParser (tokenize + route)
    │
    ├── Static handlers (help, about, clear, exit)
    ├── Data handlers (projects, skills → data/*.ts)
    └── External handlers (github → lib/github.ts)
    │
    ▼
TerminalOutput (scrollable log)
```

## Data Flow

| Source | Consumer | Method |
|--------|----------|--------|
| `data/projects.ts` | Project cards, terminal `projects` | Static import |
| GitHub API | Contribution graph, repos | Server component fetch + revalidate |
| `localStorage` | Cat mode, terminal history | Client hooks |
| Cat context | CatStatus widget, terminal `cat status` | React context |

## Performance Strategy

- **Code split:** Terminal and ASCII portrait lazy-loaded
- **Cat:** Single RAF loop, no React re-render per frame (ref + transform)
- **Images:** Next/Image with priority on hero only
- **GitHub:** ISR with 1-hour revalidation
- **Fonts:** `next/font` with subsetting

## Accessibility

- Skip link to main content
- Terminal keyboard-trap when open
- `aria-live` for terminal output
- `prefers-reduced-motion` disables Lenis, particles, cat follow
