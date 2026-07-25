import { Panel } from "@/components/ui/Panel";
import { projects } from "@/data/projects";
import { skillModules } from "@/data/skills";

export function QuickStats() {
  const languageCount = skillModules.find((m) => m.category === "Languages")?.items.length ?? 0;

  return (
    <Panel tag="quick.stats">
      <dl className="space-y-2 font-mono text-sm">
        <div className="flex justify-between">
          <dt className="text-text-secondary">projects</dt>
          <dd className="text-text-primary">{projects.length}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-text-secondary">languages</dt>
          <dd className="text-text-primary">{languageCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-text-secondary">location</dt>
          <dd className="text-text-primary">Kerala, IN</dd>
        </div>
      </dl>
    </Panel>
  );
}
