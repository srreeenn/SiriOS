# Product Requirements Document (PRD)

# SiriOS

**Version:** 1.0  
**Owner:** A Sreenandana Panangattu  
**Status:** Planning

---

## 1. Vision

SiriOS is not a traditional portfolio.

It is an interactive digital experience that presents the developer as a software engineer through storytelling, thoughtful interaction, and polished design.

The goal is to make visitors remember the experience rather than simply scrolling through projects.

SiriOS should feel like entering someone's personal operating system.

---

## 2. Problem Statement

Most developer portfolios follow the same pattern:

- Hero
- Skills
- Projects
- Contact

Although functional, they often fail to create a memorable impression.

Recruiters spend less than a minute on many portfolios.

SiriOS solves this by combining excellent UX with strong engineering to create an experience that is both enjoyable and professional.

---

## 3. Goals

### Primary Goals

- Impress recruiters
- Showcase engineering ability
- Demonstrate frontend craftsmanship
- Present projects professionally
- Create a memorable experience

### Secondary Goals

- Encourage GitHub exploration
- Increase interview opportunities
- Build a recognizable personal brand
- Serve as a long-term personal website

---

## 4. Target Audience

### Primary

- Software recruiters
- Hiring managers
- Senior engineers
- Technical interviewers

### Secondary

- Developers
- Open-source contributors
- UI/UX enthusiasts
- Students

---

## 5. Product Principles

Every feature must satisfy at least one of these principles.

1. Tells a story
2. Demonstrates technical skill
3. Improves user experience
4. Reinforces the SiriOS identity

If a feature does not satisfy any of these, it should be removed.

---

## 6. Brand Identity

| Attribute | Value |
|-----------|-------|
| Portfolio Name | SiriOS |
| Nickname | Siri |
| Owner | A Sreenandana Panangattu |
| Role | Full Stack Developer |
| Location | Kerala, India |
| Theme | Anime Gothic × Terminal UI × Editorial Design × Pixel Art × Minimal Luxury |

---

## 7. Emotional Journey

```
Visitor lands
      ↓
  Curiosity
      ↓
  Exploration
      ↓
  Discovery
      ↓
  Understanding
      ↓
   Impressed
      ↓
"I want to interview this developer."
```

---

## 8. Core Experience

Visitors should experience the following flow.

```
Boot Screen
      ↓
  Homepage
      ↓
     Hero
      ↓
    About
      ↓
Applications
      ↓
   Skills
      ↓
  Journey
      ↓
  GitHub
      ↓
  Contact
      ↓
    Exit
```

---

## 9. Homepage

**Purpose:** Introduce Siri.

**Requirements:**

- Strong typography
- Interactive portrait
- Typing animation
- Pixel Cat
- Minimal navigation
- Clear CTA

**Success Metric:** Visitors continue scrolling.

---

## 10. Hero Section

**Must include:**

- Name
- Title
- Tagline
- CTA
- Interactive anime portrait

**Portrait interaction:**

```
Hover
  ↓
ASCII transformation
  ↓
Particle interaction
  ↓
Restore
```

No autoplay animation. Interaction must be user-triggered.

---

## 11. Pixel Cat

**Purpose:** Add personality. The cat should never become the main focus.

**States:**

- Idle
- Walking
- Running
- Sleeping
- Follow Cursor
- Attack
- Hidden Easter Eggs

**Future:** Bring toy · Sit · Wave

---

## 12. About

Simple introduction.

**Includes:**

- Bio
- Philosophy
- Interests
- Current learning

No large paragraphs.

---

## 13. Applications

Projects are represented as desktop applications.

Every application contains:

```
Application artwork
      ↓
  Description
      ↓
   Tech Stack
      ↓
   Features
      ↓
 Architecture
      ↓
Lessons Learned
      ↓
    GitHub
      ↓
  Live Demo
```

**Featured:** CineVerse

---

## 14. Skills

Represented as **System Modules**.

**Categories:**

- Languages
- Frontend
- Backend
- Database
- DevOps
- AI
- Design
- Tools
- Currently Learning

No colorful badges. Consistent styling.

---

## 15. Journey

**Purpose:** Show growth.

**Timeline:**

```
Education
      ↓
  Learning
      ↓
  Projects
      ↓
Current Goals
```

Minimal visuals.

---

## 16. GitHub

**Displays:**

- Contribution graph
- Pinned repositories
- Current activity
- GitHub profile
- Future goals

---

## 17. Contact

Simple.

**Contains:**

- Email
- GitHub
- LinkedIn
- Resume
- Closing message

No unnecessary contact form.

---

## 18. Terminal

Optional interaction.

**Commands:** `help` · `about` · `projects` · `skills` · `github` · `contact` · `resume` · `clear` · `exit`

**Purpose:** Fun. Does not replace navigation.

---

## 19. Boot Screen

**Purpose:** Introduce SiriOS.

**Displays:**

```
ASCII logo
      ↓
Loading animation
      ↓
System initialization
      ↓
Enter SiriOS
```

Must be skippable.

---

## 20. Animations

Animations should communicate quality. Never distraction.

**Rules:**

- One hero animation per section
- Smooth
- Responsive
- GPU accelerated

No excessive motion.

---

## 21. Accessibility

- Keyboard navigation
- Visible focus
- Semantic HTML
- Reduced motion support
- Screen-reader friendly

---

## 22. Performance

| Goal | Target |
|------|--------|
| Lighthouse | 95+ |
| Core Web Vitals | Green |
| Images | Optimized + lazy loaded |
| JavaScript | Minimal |

---

## 23. Future Features

- Spotify Integration
- GitHub Analytics
- Journal
- Theme Switcher
- AI Assistant
- Interactive System Monitor
- More Pixel Cat behaviors

---

## 24. Out of Scope

- No authentication
- No CMS
- No backend dashboard
- No blog in Version 1
- No admin panel

---

## 25. Success Criteria

Visitors should immediately understand:

- Who Siri is
- What Siri builds
- Siri's engineering skills
- Siri's design ability
- How to contact Siri

Within the first two minutes of exploration.

---

## 26. Risks

| Risk | Mitigation |
|------|------------|
| Too many animations | Keep interactions purposeful |
| Too many features | Prioritize simplicity |
| Performance degradation | Lazy load advanced effects |
| Visual inconsistency | Strict design token system |

---

## 27. Release Plan

### Phase 1 — Foundation

Design System · Navigation · Layout

### Phase 2 — Homepage

Hero · Applications · Skills

### Phase 3 — Project Pages

Journey · GitHub · Contact

### Phase 4 — Interactive Layer

ASCII Portrait · Pixel Cat · Terminal

### Phase 5 — Ship

Performance · Accessibility · SEO · Testing · Deployment

---

## 28. Final Vision

SiriOS should leave visitors with three thoughts:

1. "Wow."
2. "This is different."
3. "We should interview her."

The website should demonstrate not only completed projects but also attention to detail, design thinking, and engineering quality.
