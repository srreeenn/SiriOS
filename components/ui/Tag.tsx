import { type ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/**
 * A tech-stack / category label. Previously rendered as a bordered pill —
 * changed to plain mono text so a row of 4-6 of these doesn't read as a
 * cluster of boxes. Color + monospace still make it legible as a "tag"
 * without adding a border.
 */
export function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`font-mono text-xs text-text-secondary ${className}`}>{children}</span>
  );
}
