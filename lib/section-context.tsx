"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Section = "home" | "about" | "projects" | "skills" | "journey" | "certificates" | "contact";

interface SectionContextValue {
  active: Section;
  setActive: (section: Section) => void;
}

const SectionContext = createContext<SectionContextValue | null>(null);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Section>("home");
  return (
    <SectionContext.Provider value={{ active, setActive }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error("useSection must be used within SectionProvider");
  return ctx;
}