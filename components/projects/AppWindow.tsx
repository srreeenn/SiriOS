"use client";

import { useState } from "react";
import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

const TABS = ["features", "architecture", "lessons", "github", "demo"] as const;
type Tab = (typeof TABS)[number];

export function AppWindow({ project }: { project: Project }) {
  const [tab, setTab] = useState<Tab>("features");

  return (
    <div className="mx-auto max-w-3xl border border-border bg-bg-elevated">
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-border-subtle px-4 py-3">
        <p className="font-mono text-sm text-text-primary">{project.name}.app</p>
        <Link
          href="/#projects"
          aria-label="Close"
          className="font-mono text-text-secondary hover:text-accent"
        >
          ×
        </Link>
      </div>

      <div className="p-6">
        <p className="text-sm text-text-secondary">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        {/* tab bar */}
        <div className="mt-6 flex gap-1 border-b border-border-subtle font-mono text-xs uppercase tracking-wider">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              aria-current={tab === t}
              className={`px-3 py-2 transition-colors ${
                tab === t
                  ? "border-b-2 border-accent text-accent"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="min-h-[140px] py-6 text-sm text-text-secondary">
          {tab === "features" && (
            <ul className="list-inside list-disc space-y-2">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
          {tab === "architecture" && <p>{project.architecture}</p>}
          {tab === "lessons" && <p>{project.lessons}</p>}
          {tab === "github" &&
            (project.githubUrl ? (
              <Button variant="ghost" href={project.githubUrl} target="_blank" rel="noreferrer">
                view source →
              </Button>
            ) : (
              <p className="text-text-muted">No public repository linked yet.</p>
            ))}
          {tab === "demo" &&
            (project.demoUrl ? (
              <Button href={project.demoUrl} target="_blank" rel="noreferrer">
                open live demo →
              </Button>
            ) : (
              <p className="text-text-muted">No live demo yet.</p>
            ))}
        </div>
      </div>
    </div>
  );
}
