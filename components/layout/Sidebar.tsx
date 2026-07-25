"use client";

const NAV_ITEMS = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
  // NOTE: WIREFRAMES.md shows a "blog" nav item, but PRD.md §24 lists
  // "No blog in Version 1" as explicitly out of scope — omitted here.
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile scrim */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[240px] flex-col overflow-y-auto border-r border-border-subtle bg-bg p-6 font-mono transition-transform duration-300 ease-[var(--ease-out)] md:sticky md:top-0 md:h-screen md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav aria-label="Primary">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
                >
                  <span className="text-accent">◆</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="my-6 h-px bg-border-subtle" />

        {/* Cat status — real state arrives with PixelCat (Phase 4a); shown
           as "offline" for now since cat mode isn't wired up yet. */}
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
