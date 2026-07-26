import { journey } from "@/data/journey";

// Vertical "log" layout at all breakpoints — journey.log reads top to bottom
// like a terminal history, oldest entry first, "Current Goals" styled as the
// active/live line (glow + pulse) instead of looking identical to the past.
export function Timeline() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mb-8 flex items-baseline gap-2 font-mono text-xs uppercase tracking-widest text-text-muted">
        <span className="text-accent">$</span>
        <h2>cat journey.log</h2>
      </div>

      <ol className="relative flex flex-col gap-10 border-l border-border-subtle pl-6 md:pl-8">
        {journey.map((entry) => {
          const isActive = entry.phase === "Current Goals";

          return (
            <li key={entry.phase} className="relative">
              {/* node */}
              <span
                aria-hidden="true"
                className={[
                  "absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full md:-left-[37px]",
                  isActive
                    ? "bg-accent shadow-[var(--glow-md)] motion-safe:animate-pulse"
                    : "bg-accent-muted shadow-[var(--glow-sm)]",
                ].join(" ")}
              />

              <div className="flex flex-wrap items-baseline gap-x-2 font-mono text-xs uppercase tracking-wider">
                <span className={isActive ? "text-accent" : "text-text-secondary"}>
                  {entry.year}
                </span>
                <span className="text-text-muted">·</span>
                <span className={isActive ? "text-accent" : "text-text-secondary"}>
                  {entry.phase}
                </span>
                {isActive && (
                  <span className="ml-1 inline-flex items-center gap-1 border border-border-subtle px-1.5 py-0.5 text-[10px] text-accent">
                    <span className="h-1 w-1 rounded-full bg-accent motion-safe:animate-pulse" />
                    now
                  </span>
                )}
              </div>

              <p
                className={[
                  "mt-1.5 text-sm",
                  isActive ? "text-text-primary" : "text-text-primary/90",
                ].join(" ")}
              >
                {entry.title}
              </p>
              <p className="mt-1 max-w-prose text-sm text-text-secondary">
                {entry.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}