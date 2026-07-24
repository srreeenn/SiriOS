import { type ReactNode, type HTMLAttributes } from "react";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Small mono label rendered top-left, e.g. "about.me" — matches the
   * frame-tag treatment used on the hero portrait panel. */
  tag?: string;
  /** Adds --glow-md box-shadow, per DESIGN_TOKENS.md "Panel" pattern. */
  glow?: boolean;
}

/**
 * Base panel: bg-elevated + 1px accent border, sharp corners.
 * Every content block in SiriOS (about, stats, project cards, etc.)
 * should compose this rather than re-declaring the border/bg.
 */
export function Panel({ children, tag, glow = false, className = "", ...rest }: PanelProps) {
  return (
    <div
      className={`relative border border-border bg-bg-elevated p-6 ${
        glow ? "shadow-[var(--glow-md)]" : ""
      } ${className}`}
      {...rest}
    >
      {tag && (
        <span className="absolute -top-3 left-4 bg-bg-elevated px-2 font-mono text-xs uppercase tracking-wider text-accent">
          {tag}
        </span>
      )}
      {children}
    </div>
  );
}
