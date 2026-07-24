# SiriOS — Wireframes

Reference mockup: `assets/ChatGPT_Image_Jul_23_*_PM-*.png`

---

## Desktop — Homepage (1440px)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ SREE'S OS v1.0.0                                          [icons bar]    │
├────────────┬─────────────────────────────────────────────────────────────┤
│            │                                                             │
│  ◆ home    │   hi, i'm                                    ┌──────────┐   │
│  ◆ about   │   SREENANDANA                                │          │   │
│  ◆ projects│                                              │  ANIME   │   │
│  ◆ blog    │   full-stack dev · kerala · anime gothic     │  PORTRAIT│   │
│  ◆ contact │                                              │  (ASCII  │   │
│            │   [view projects]  [download resume]         │   hover) │   │
│ ─────────  │                                              └──────────┘   │
│ now playing│   > cat.log: "new human detected... following!"             │
│ ♫ track    │   ～～～🐱～～～～～ (cat on wavy path)                        │
│ ─────────  │                                                             │
│ cat status │─────────────────────────────────────────────────────────────│
│ 🐱 mood:   │  ┌─ about me ─────┐ ┌─ github activity ─┐ ┌─ quick stats ─┐  │
│  curious   │  │ bio text...    │ │ ░░▓▓░░▓▓░░░░    │ │ projects: 12  ││
│ > following│  │                │ │ contribution    │ │ languages: 8  ││
│ ─────────  │  └────────────────┘ └─────────────────┘ │ location: IN  ││
│ system info│                                          └───────────────┘  │
│ ram: 16gb  │─────────────────────────────────────────────────────────────│
│ uptime: 2y │  featured projects                                          │
│            │  ┌────────────┐ ┌────────────┐ ┌────────────┐               │
│            │  │ ExamMark   │ │ Project 2  │ │ Project 3  │               │
│            │  │ Next.js TS │ │ ...        │ │ ...        │               │
│            │  └────────────┘ └────────────┘ └────────────┘               │
│            │                                                             │
│            │  journey timeline                                           │
│            │  ● 2021 learning ── ● 2023 intern ── ● 2025 now             │
│            │                                                             │
│            │  contact                                                    │
│            │  github · linkedin · email                                  │
├────────────┴─────────────────────────────────────────────────────────────┤
│  sree@sirios:~$ █                                    [🐱 cat mode ●]   │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Project Application Window

```
┌─ ExamMark.app ──────────────────────────────────────────────── [×] ─┐
│  ┌────────────┐                                                     │
│  │ ASCII art  │  ExamMark — AI-powered exam grading platform       │
│  │ thumbnail  │  Next.js · TypeScript · Python · OpenAI           │
│  └────────────┘                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│  [features] [architecture] [gallery] [lessons] [github] [demo]      │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  Features                                                           │
│  • Automated rubric-based grading                                   │
│  • Student feedback generation                                      │
│  • ...                                                              │
│                                                                     │
│  Architecture                                                       │
│  [diagram or description]                                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Terminal Overlay

```
┌─────────────────────────────────────────────────────────────────────┐
│  sree@sirios:~$ help                                           [×]  │
│  ─────────────────────────────────────────────────────────────────  │
│  Available commands:                                                │
│    help      — show this message                                    │
│    about     — about sreenandana                                    │
│    projects  — list applications                                    │
│    skills    — tech stack                                           │
│    github    — github profile                                       │
│    contact   — contact info                                         │
│    resume    — download resume                                      │
│    clear     — clear terminal                                       │
│    exit      — close terminal                                       │
│  ─────────────────────────────────────────────────────────────────  │
│  sree@sirios:~$ █                                                   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Mobile (375px)

```
┌─────────────────────────┐
│  SREE'S OS        [≡]   │
├─────────────────────────┤
│                         │
│  hi, i'm                │
│  SREENANDANA            │
│                         │
│  [portrait]             │
│                         │
│  bio + CTAs             │
│                         │
│  about · stats          │
│  github heatmap         │
│  projects (stacked)     │
│  journey                │
│  contact                │
│                         │
├─────────────────────────┤
│  [home][about][proj][☰] │
└─────────────────────────┘

Cat mode: OFF by default on mobile
Terminal: full-screen overlay
```

---

## ASCII Portrait — Interaction States

```
State 1 (default)          State 2 (hover)           State 3 (leave)
┌──────────────┐           ┌──────────────┐          ┌──────────────┐
│              │           │  ·  ·  · ·   │          │  ·→ merging  │
│  [full anime │    →      │ · * ·  · * · │    →     │  ·  ·→ ·     │
│   portrait]  │           │  · * · ·  ·  │          │  [reforming] │
│              │           │  particles   │          │              │
└──────────────┘           └──────────────┘          └──────────────┘
```

---

## Cat State Sprites

```
IDLE/WALK    RUN         ATTACK       SLEEP        HAPPY
  🐱          🐱→→        🐱💥         😴 zzz       🐱💕
(sitting)   (stretched)  (pounce)    (curled)     (hearts)
```

Reference: `assets/ChatGPT_Image_Jul_23_*_10_17_21_PM-*.png`
