import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "font-mono cursor-pointer px-4 py-2 text-sm uppercase tracking-wider transition-all duration-[var(--duration-fast)]",
        variant === "primary" &&
          "border border-accent bg-accent text-black hover:shadow-glow-sm",
        variant === "ghost" &&
          "border border-border bg-transparent text-accent hover:bg-bg-subtle hover:shadow-glow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
