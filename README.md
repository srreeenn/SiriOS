# Phase 2 — Homepage Content

Maps to IMPLEMENTATION_GUIDE.md Phase 2: About, Applications grid, Skills.

```
components/about/AboutPanel.tsx
components/skills/SkillsModules.tsx
components/projects/AppCard.tsx
components/projects/FeaturedProjects.tsx
data/projects.ts
data/skills.ts
hooks/useTypewriter.ts
```

## ⚠️ Placeholder content — edit before shipping

`data/projects.ts` and `data/skills.ts` are filled with placeholder copy
(CineVerse kept as `featured: true` per PRD.md §13, but its description,
your skill list, "Project Three," etc. are all stand-ins). Same for the
bio/philosophy/interests text hardcoded in `AboutPanel.tsx` — PRD.md §12
says "no large paragraphs," so keep each block to 2–3 sentences when you
rewrite them.

## Wiring into your existing `page.tsx`

I didn't touch `app/page.tsx` since you've already got your own content
there. Add these sections wherever they belong in your existing layout —
each has its own `id` for the sidebar nav anchors (`#about`, `#projects`)
already baked in:

```tsx
import { Hero } from "@/components/hero/Hero";
import { AboutPanel } from "@/components/about/AboutPanel";
import { SkillsModules } from "@/components/skills/SkillsModules";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";

export default function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      <AboutPanel />
      <SkillsModules />
      <FeaturedProjects />
      {/* JourneyTimeline and Contact land in Phase 3 */}
    </>
  );
}
```

## Typing animation on the tagline

`useTypewriter` is a standalone hook — I didn't touch your `Hero.tsx`
directly since you've already customized it. Wire it in like this:

```tsx
import { useTypewriter } from "@/hooks/useTypewriter";

// inside Hero component:
const tagline = useTypewriter("Software Engineer · Kerala · Anime Gothic");

// in the JSX, replace your static <p> with:
<p>{tagline}</p>
```

This needs `Hero.tsx` to be a client component (`"use client"` at the top)
since it uses a hook — it already imports `AsciiPortrait` which is a client
component too, so this shouldn't change anything about how it renders.

## Notes on choices made

- **No colorful skill badges** — `SkillsModules` reuses the existing `Tag`
  component as-is (accent border, no per-category color), per PRD.md §14's
  "no colorful badges, consistent styling."
- **`/projects/[slug]` route doesn't exist yet** — `AppCard` links there
  already; the actual route + `AppWindow` layout is Phase 3 in
  IMPLEMENTATION_GUIDE.md. Links will 404 until then, which is expected at
  this stage.
- **`FeaturedProjects.tsx`** isn't individually named in
  SYSTEM_ARCHITECTURE.md's file list (only `AppCard.tsx` is) — it's just
  the grid wrapper, same kind of small addition as `Shell.tsx` was in
  Phase 1.

## Suggested commit split

```bash
git add data/projects.ts data/skills.ts
git commit -m "feat(data): add projects and skills content"

git add components/about/AboutPanel.tsx
git commit -m "feat(about): add about section with bio/philosophy/interests"

git add components/skills/SkillsModules.tsx
git commit -m "feat(skills): add system-modules skills grid"

git add components/projects/AppCard.tsx components/projects/FeaturedProjects.tsx
git commit -m "feat(projects): add featured projects grid"

git add hooks/useTypewriter.ts
git commit -m "feat(hero): add typewriter hook for tagline"

# then after you manually wire page.tsx / Hero.tsx:
git add app/page.tsx components/hero/Hero.tsx
git commit -m "feat(home): wire About, Skills, Projects sections into homepage"
```
