import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

export function AppCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block border border-border-subtle bg-bg-elevated p-5 transition-shadow hover:border-border hover:shadow-[var(--glow-sm)]"
    >
      {project.featured && (
        <span className="absolute -top-3 left-4 bg-bg-elevated px-2 font-mono text-xs uppercase tracking-wider text-accent">
          featured
        </span>
      )}

      <p className="font-mono text-sm text-text-primary">{project.name}.app</p>
      <p className="mt-2 text-sm text-text-secondary">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Link>
  );
}
