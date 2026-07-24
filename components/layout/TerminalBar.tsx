"use client";

export function TerminalBar() {
  return (
    <footer className="sticky bottom-0 z-20 border-t border-border bg-bg-elevated">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 font-mono text-sm">
          <span className="shrink-0 text-accent">sree@sirios:~$</span>
          <input
            type="text"
            disabled
            placeholder="terminal coming in phase 4..."
            aria-label="Terminal input"
            className="min-w-0 flex-1 bg-transparent text-text-muted outline-none placeholder:text-text-muted disabled:cursor-not-allowed"
          />
          <span className="cursor-blink hidden text-accent sm:inline">█</span>
        </div>

        <div className="font-mono shrink-0 text-xs text-text-muted">
          <span className="hidden sm:inline">cat mode </span>
          <span className="text-accent">○</span>
        </div>
      </div>
    </footer>
  );
}
