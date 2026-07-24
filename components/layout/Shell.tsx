"use client";

import { useState, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TerminalBar } from "./TerminalBar";

/**
 * Not called out as its own file in SYSTEM_ARCHITECTURE.md — added here to
 * hold the mobile drawer open/close state that the top bar's hamburger and
 * Sidebar both need. Everything it renders (Sidebar, TerminalBar) still
 * matches the architecture doc's component hierarchy.
 */
export function Shell({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border-subtle px-4 py-3 font-mono text-sm">
        <span className="tracking-wider text-text-primary">SREE&apos;S OS v1.0.0</span>
        <button
          type="button"
          onClick={() => setDrawerOpen((o) => !o)}
          aria-label="Toggle navigation"
          aria-expanded={drawerOpen}
          className="text-accent md:hidden"
        >
          {drawerOpen ? "✕" : "☰"}
        </button>
      </header>

      <div className="flex flex-1">
        <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>

      <TerminalBar />
    </div>
  );
}
