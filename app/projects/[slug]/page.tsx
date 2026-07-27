import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Panel } from "@/components/ui/Panel";
import { Tag } from "@/components/ui/Tag";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl border border-border-subtle bg-bg-elevated">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-border-subtle px-4 py-2">
          <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
            {project.name}.app
          </span>
          <Link
            href="/#projects"
            aria-label="Close"
            className="font-mono text-sm text-text-secondary hover:text-accent"
          >
            ✕
          </Link>
        </div>

        {/* Artwork */}
        <div className="relative aspect-video w-full border-b border-border-subtle bg-bg">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
          />
        </div>

        <div className="space-y-8 p-6 md:p-8">
          {/* Description + stack */}
          <div>
            <p className="text-base text-text-primary md:text-lg">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              features
            </p>
            <ul className="space-y-1.5">
              {project.features.map((feature) => (
                <li key={feature} className="text-sm text-text-secondary">
                  • {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              architecture
            </p>
            <p className="text-sm text-text-secondary">{project.architecture}</p>
          </div>

          {/* Lessons */}
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              lessons learned
            </p>
            <p className="text-sm text-text-secondary">{project.lessons}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-accent px-6 py-3 text-sm tracking-wide text-text-primary transition-shadow hover:shadow-[var(--glow-sm)]"
              >
                github
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-accent bg-accent px-6 py-3 text-sm font-medium tracking-wide text-black transition-shadow hover:shadow-[var(--glow-md)]"
              >
                live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}