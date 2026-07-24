"use client";

import { useState } from "react";
import { navItems, systemInfo } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="font-mono fixed left-4 top-4 z-50 border border-border bg-bg-elevated px-3 py-2 text-xs text-accent md:hidden"
      >
        {open ? "[ close ]" : "[ menu ]"}
      </button>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-bg-elevated transition-transform duration-[var(--duration-normal)] md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="border-b border-border-subtle p-4">
          <p className="font-mono text-xs text-text-muted">SREE&apos;S OS</p>
          <p className="font-display text-lg glow-text text-accent">v{systemInfo.version}</p>
        </div>

        <nav className="flex-1 p-4" aria-label="Main navigation">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-mono group flex items-center gap-2 px-2 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-subtle hover:text-accent"
                >
                  <span className="text-accent opacity-60 group-hover:opacity-100">◆</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4 border-t border-border-subtle p-4">
          <div>
            <p className="font-mono mb-2 text-xs uppercase tracking-wider text-accent">
              cat status
            </p>
            <div className="border border-border-subtle bg-bg p-3">
              <p className="font-mono text-xs text-text-secondary">mood: offline</p>
              <p className="font-mono text-xs text-text-muted">&gt; coming in phase 4</p>
            </div>
          </div>

          <div>
            <p className="font-mono mb-2 text-xs uppercase tracking-wider text-accent">
              system info
            </p>
            <ul className="font-mono space-y-1 text-xs text-text-secondary">
              <li>ram: {systemInfo.ram}</li>
              <li>uptime: {systemInfo.uptime}</li>
              <li>loc: {systemInfo.location}</li>
            </ul>
          </div>
        </div>
      </aside>

      {open && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
