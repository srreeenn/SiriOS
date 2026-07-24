import { AppCard } from "./AppCard";
import { projects } from "@/data/projects";

// Not individually named in SYSTEM_ARCHITECTURE.md's file list (only
// AppCard.tsx is) — this is just the grid wrapper section for the homepage.
export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-16 md:px-8">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
        featured.projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <AppCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
