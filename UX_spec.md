# SiriOS — UX Specification

## Experience Principles

1. **Feel like an OS, not a website** — Navigation, panels, and terminal reinforce the metaphor
2. **Personality without noise** — The cat and ASCII portrait delight; they never obstruct content
3. **Story over list** — Every section answers "who is this engineer?"
4. **Minimal luxury** — Black canvas, hot pink accents, generous whitespace, sharp typography

---

## User Flows

### First Visit

1. Land on homepage — hero loads with character art and `cat.log: "new human detected... following!"`
2. Cat begins following cursor (if cat mode on)
3. User scans sidebar nav, scrolls through panels
4. Optional: open terminal, type `help`

### Exploring Projects

1. Click project in sidebar or featured grid
2. Project opens as an "application window" (modal or dedicated route)
3. Tabs/sections: Features · Architecture · Gallery · Lessons · GitHub · Demo
4. Close returns to desktop

### Terminal Power User

1. Click terminal bar or press `` ` `` (backtick)
2. Type commands to navigate without scrolling
3. `projects` lists apps; `github` opens stats; `contact` shows links

---

## Layout — Homepage

```
┌──────────┬────────────────────────────────────────┐
│ SIDEBAR  │  HERO                                   │
│ 240px    │  "hi, i'm SREENANDANA" + ASCII portrait │
│          │  bio + CTA buttons + cat on path        │
├──────────┤─────────────────────────────────────────┤
│ Nav      │  ABOUT │ GITHUB HEATMAP │ QUICK STATS   │
│ Now Play │─────────────────────────────────────────│
│ Cat Stat │  FEATURED PROJECTS (app cards)          │
│ Sys Info │─────────────────────────────────────────│
│          │  JOURNEY TIMELINE                       │
│          │  CONTACT                                │
├──────────┴─────────────────────────────────────────┤
│  sree@sirios:~$  [terminal input]    [cat mode]   │
└────────────────────────────────────────────────────┘
```

**Mobile:** Sidebar becomes bottom nav or hamburger drawer. Cat mode defaults off.

---

## Interactions

### ASCII Portrait

| Event | Response |
|-------|----------|
| Hover enter | Illustration → particle field |
| Mouse move while hovered | Particles drift toward cursor |
| Hover leave | Particles reform into illustration (600ms) |
| Reduced motion | Crossfade only, no particles |

### Pixel Cat

| Event | State | Feedback |
|-------|-------|----------|
| Mouse move (slow) | Following / Walking | Cat lerps toward cursor |
| Mouse move (fast) | Running | Run sprite, faster lerp |
| Click | Attack | Pounce animation at click point |
| Idle 6s | Sleeping | Zzz particles, sidebar: `mood: sleepy` |
| Terminal `pet cat` | Happy | Hearts, sidebar: `mood: happy` |
| Cat mode off | Hidden | Sidebar shows `cat: offline` |
| Touch tap | Attack | Mobile substitute for cursor follow |

### Terminal

| Command | Output |
|---------|--------|
| `help` | List all commands |
| `about` | Bio summary |
| `projects` | Numbered project list with slugs |
| `skills` | Tech stack grouped by category |
| `github` | Profile link + repo count |
| `contact` | Email, GitHub, LinkedIn |
| `resume` | Link to PDF or `/resume` |
| `clear` | Wipe terminal output |
| `exit` | Close terminal overlay |

**Keyboard:** ↑/↓ history, Tab autocomplete, Enter execute

### Project Application Window

- Draggable title bar (optional V1.1)
- Close button (×)
- Scrollable content area
- External links open in new tab

---

## Cat Status Widget

```
┌─────────────────┐
│  cat status     │
│  [pixel cat]    │
│  mood: curious  │
│  > following you│
└─────────────────┘
```

Mood mapping:

| Cat State | Mood Label |
|-----------|------------|
| Idle / Following | curious |
| Walking | exploring |
| Running | hunting |
| Sleeping | sleepy |
| Attack | fierce |
| Happy | blissful |
| Cat mode off | offline |

---

## Motion Guidelines

- Scroll: Lenis smooth scroll (disable on reduced motion)
- Panels: fade + slight translate up on enter (Framer Motion)
- Hover: 150ms border glow intensify
- No autoplay video or sound without user action

---

## Accessibility

- Focus visible on all interactive elements (accent outline)
- Terminal fully keyboard-operable
- Cat is decorative (`aria-hidden`)
- Color contrast: white on black meets WCAG AA; pink used for accents only, not body text
- Skip navigation link

---

## Empty & Error States

| State | Treatment |
|-------|-----------|
| GitHub API fail | Static placeholder heatmap + "offline" badge |
| No projects | "Applications loading..." skeleton |
| Terminal unknown command | `command not found: {input}. type 'help' for commands.` |
