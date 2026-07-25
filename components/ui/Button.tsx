import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-[box-shadow,background-color] duration-150 disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-black hover:bg-accent-muted",
  ghost: "border border-accent bg-transparent text-text-primary hover:shadow-[var(--glow-sm)]",
};

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: undefined;
}

interface ButtonAsAnchor extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Button primary: accent fill, black text.
 * Button ghost: accent border, transparent bg, glow on hover.
 * (DESIGN_TOKENS.md "Component Patterns")
 *
 * Pass `href` to render an <a> instead of a <button> — avoids nesting an
 * interactive <button> inside an <a>, which is invalid HTML and breaks
 * screen-reader semantics.
 */
export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
