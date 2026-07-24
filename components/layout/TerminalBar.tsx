"use client";

import { useEffect, useState } from "react";

const CAT_MODE_KEY = "sirios-cat-mode";

/**
 * Footer bar: prompt input + cat mode toggle.
 * The input is visual-only for now — command parsing (useTerminal,
 * CommandParser) lands in Phase 4c per IMPLEMENTATION_GUIDE.md.
 * Cat mode toggle already persists to localStorage per SYSTEM_ARCHITECTURE.md
 * "Data Flow" table, ready for PixelCat to read in Phase 4a.
 */
export function TerminalBar() {
  const [catMode, setCatMode] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    const stored = window.localStorage.getItem(CAT_MODE_KEY);
    if (stored !== null) setCatMode(stored === "true");
  }, []);

  const toggleCatMode = () => {
    const next = !catMode;
    setCatMode(next);
    window.localStorage.setItem(CAT_MODE_KEY, String(next));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 4c wires this into CommandParser. For now, just clear the input.
    setValue("");
  };

  return (
    <footer className="flex items-center justify-between gap-4 border-t border-border-subtle bg-bg px-4 py-3 font-mono text-sm">
      <form onSubmit={handleSubmit} className="flex flex-1 items-center gap-2">
        <span className="text-accent">sree@sirios:~$</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="type 'help'..."
          aria-label="Terminal command"
          className="flex-1 bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none"
        />
      </form>

      <button
        type="button"
        onClick={toggleCatMode}
        aria-pressed={catMode}
        className="flex items-center gap-2 border border-border-subtle px-2 py-1 text-xs uppercase tracking-wider text-text-secondary transition-colors hover:border-accent hover:text-accent"
      >
        🐱 cat mode
        <span className={catMode ? "text-accent" : "text-text-muted"}>●</span>
      </button>
    </footer>
  );
}
