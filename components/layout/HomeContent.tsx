"use client";

import type { ReactNode } from "react";
import { useSection } from "@/lib/section-context";

interface HomeContentProps {
  home: ReactNode;
  about: ReactNode;
  projects: ReactNode;
  skills: ReactNode;
  journey: ReactNode;
  contact: ReactNode;
}

export function HomeContent({
  home,
  about,
  projects,
  skills,
  journey,
  contact,
}: HomeContentProps) {
  const { active } = useSection();

  return (
    <div>
      {active === "home" && <section id="home">{home}</section>}
      {active === "about" && about}
      {active === "projects" && projects}
      {active === "skills" && skills}
      {active === "journey" && journey}
      {active === "contact" && contact}
    </div>
  );
}