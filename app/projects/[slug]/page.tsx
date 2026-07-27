import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { AppWindow } from "@/components/projects/AppWindow";

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
      <AppWindow project={project} />
    </section>
  );
}