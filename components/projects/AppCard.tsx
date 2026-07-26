import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

export function AppCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block border border-border-subtle bg-bg-elevated transition-shadow hover:border-border hover:shadow-[var(--glow-sm)]"
    >
      {project.featured && (
        <span className="absolute -top-3 left-4 z-10 bg-bg-elevated px-2 font-mono text-xs uppercase tracking-wider text-accent">
          featured
        </span>
      )}

      <div className="relative aspect-video w-full overflow-hidden border-b border-border-subtle bg-bg">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover transition-transform duration-[var(--duration-normal)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <p className="font-mono text-sm text-text-primary">{project.name}.app</p>
        <p className="mt-2 text-sm text-text-secondary">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-1 [&>*:not(:last-child)]:after:ml-1 [&>*:not(:last-child)]:after:text-text-muted [&>*:not(:last-child)]:after:content-['·']">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}