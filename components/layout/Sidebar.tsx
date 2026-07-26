"use client";

import { useSection, type Section } from "@/lib/section-context";

const NAV_ITEMS: { label: string; id: Section }[] = [
  { label: "home", id: "home" },
  { label: "about", id: "about" },
  { label: "projects", id: "projects" },
  { label: "skills", id: "skills" },
  { label: "journey", id: "journey" },
  { label: "contact", id: "contact" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { active, setActive } = useSection();

  function handleClick(id: Section) {
    setActive(id);
    onClose();
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[240px] flex-col overflow-y-auto border-r border-border-subtle bg-bg p-6 font-mono transition-transform duration-300 ease-[var(--ease-out)] md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav aria-label="Primary">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className={`flex w-full items-center gap-2 text-left text-sm transition-colors hover:text-accent ${
                    active === item.id ? "text-accent" : "text-text-secondary"
                  }`}
                >
                  <span className="text-accent">◆</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="my-6 h-px bg-border-subtle" />

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-text-muted">cat status</p>
          <p className="text-sm text-text-secondary">mood: —</p>
          <p className="text-xs text-text-muted">&gt; cat: offline</p>
        </div>

        <div className="my-6 h-px bg-border-subtle" />

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-text-muted">system info</p>
          <p className="text-sm text-text-secondary">ram: 16gb</p>
          <p className="text-sm text-text-secondary">uptime: 2y</p>
        </div>
      </aside>
    </>
  );
}