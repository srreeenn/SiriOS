import { type ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/** Small mono label, accent border, transparent bg — e.g. tech-stack chips. */
export function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block border border-border-subtle px-2 py-0.5 font-mono text-xs uppercase tracking-wide text-text-secondary ${className}`}
    >
      {children}
    </span>
  );
}
