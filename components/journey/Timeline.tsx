import { journey } from "@/data/journey";

// WIREFRAMES.md: "● 2021 learning ── ● 2023 intern ── ● 2025 now" —
// horizontal connected dots on desktop, stacked vertical line on mobile.
export function Timeline() {
  return (
    <section className="px-4 py-16 md:px-8">
      <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-text-muted">
        journey.log
      </h2>

      <ol className="flex flex-col gap-8 md:flex-row md:gap-0">
        {journey.map((entry, i) => (
          <li key={entry.phase} className="relative flex-1 md:px-4">
            {/* connector line */}
            {i < journey.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[5px] top-3 h-full w-px bg-border-subtle md:left-0 md:top-[5px] md:h-px md:w-full"
              />
            )}

            <div className="relative flex items-start gap-3 md:flex-col md:items-start">
              <span
                aria-hidden="true"
                className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[var(--glow-text)] md:mt-0"
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {entry.year} · {entry.phase}
                </p>
                <p className="mt-1 text-sm text-text-primary">{entry.title}</p>
                <p className="mt-1 text-sm text-text-secondary">{entry.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
