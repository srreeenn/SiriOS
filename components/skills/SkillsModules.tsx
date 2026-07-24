import { Panel } from "@/components/ui/Panel";
import { Tag } from "@/components/ui/Tag";
import { skillModules } from "@/data/skills";

// PRD.md §14: "No colorful badges. Consistent styling." — Tag already
// renders monochrome (accent-border, no per-category color), so category
// order alone carries the differentiation, not color.
export function SkillsModules() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
        system.modules
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillModules.map((mod) => (
          <Panel key={mod.category} tag={mod.category.toLowerCase()}>
            <div className="flex flex-wrap gap-2 pt-1">
              {mod.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
