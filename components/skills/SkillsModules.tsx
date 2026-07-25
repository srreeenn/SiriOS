import { Panel } from "@/components/ui/Panel";
import { skillModules } from "@/data/skills";

// Previously: 9 separate Panel boxes, each containing several bordered Tag
// chips — ~30+ bordered elements on screen at once. Consolidated into one
// panel, one row per category, skills as plain comma-separated mono text.
// PRD.md §14: "No colorful badges. Consistent styling." — this leans further
// into that by dropping the box/chip treatment entirely.
export function SkillsModules() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
        system.modules
      </h2>
      <Panel className="divide-y divide-border-subtle !p-0">
        {skillModules.map((mod) => (
          <div
            key={mod.category}
            className="flex flex-col gap-1 px-6 py-4 first:pt-6 last:pb-6 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <p className="w-40 shrink-0 font-mono text-xs uppercase tracking-wider text-accent">
              {mod.category}
            </p>
            <p className="text-sm text-text-secondary">{mod.items.join(", ")}</p>
          </div>
        ))}
      </Panel>
    </section>
  );
}
