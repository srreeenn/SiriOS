import { certificates } from "@/data/certificates";

// New top-level section, sits alongside about/projects/journey in the nav.
// Framed as a directory listing ("ls ./certificates") to stay consistent
// with Timeline's terminal-log treatment rather than a plain card grid —
// these are credentials/evidence, not browsable projects.
export function CertificatesSection() {
  return (
    <section id="certificates" className="scroll-mt-20 px-4 py-16 md:px-8">
      <div className="mb-8 flex items-baseline gap-2 font-mono text-xs uppercase tracking-widest text-text-muted">
        <span className="text-accent">$</span>
        <h2>ls ./certificates</h2>
      </div>

      {certificates.length === 0 ? (
        <p className="font-mono text-sm text-text-muted">
          no certificates on file yet.
        </p>
      ) : (
        <ol className="flex flex-col divide-y divide-border-subtle border border-border-subtle">
          {certificates.map((cert) => (
            <li
              key={cert.id}
              className="group flex flex-col gap-3 px-6 py-5 transition-colors duration-[var(--duration-fast)] hover:bg-bg-subtle sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2 font-mono text-xs uppercase tracking-wider text-accent">
                  <span>{cert.date}</span>
                  <span className="text-text-muted">·</span>
                  <span>{cert.category}</span>
                </div>
                <p className="mt-1 truncate text-sm text-text-primary">
                  {cert.title}
                  <span className="text-text-muted"> — {cert.issuer}</span>
                </p>
                <p className="mt-1 max-w-prose text-sm text-text-secondary">
                  {cert.description}
                </p>
              </div>

              {cert.fileUrl && (
                <a
                  href={cert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 self-start border border-border-subtle px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-accent transition-colors duration-[var(--duration-fast)] hover:border-accent hover:shadow-[var(--glow-sm)] sm:self-center"
                >
                  view →
                </a>
              )}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}