"use client";

import { useState } from "react";

/**
 * Renders a public, tokenless contribution heatmap image
 * (ghchart.rshah.org — reads your public GitHub contribution calendar,
 * no auth required). Falls back to a static placeholder grid + "offline"
 * badge on load failure, per UX_spec.md's Empty & Error States table:
 * "GitHub API fail → Static placeholder heatmap + 'offline' badge."
 */
export function ContributionGraph({ username }: { username: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative">
        <div className="grid grid-cols-26 gap-0.5 opacity-30" aria-hidden="true">
          {Array.from({ length: 26 * 7 }).map((_, i) => (
            <span key={i} className="aspect-square bg-border-subtle" />
          ))}
        </div>
        <span className="absolute right-0 top-0 border border-border-subtle px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-muted">
          offline
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://ghchart.rshah.org/ff1493/${username}`}
      alt={`${username}'s GitHub contribution graph`}
      className="w-full"
      onError={() => setFailed(true)}
    />
  );
}
