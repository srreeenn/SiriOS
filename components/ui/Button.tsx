import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

/**
 * Button primary: accent fill, black text.
 * Button ghost: accent border, transparent bg, glow on hover.
 * (DESIGN_TOKENS.md "Component Patterns")
 */
export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-[box-shadow,background-color] duration-150 disabled:opacity-40 disabled:pointer-events-none";

  const variants = {
    primary: "bg-accent text-black hover:bg-accent-muted",
    ghost:
      "border border-accent bg-transparent text-text-primary hover:shadow-[var(--glow-sm)]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
