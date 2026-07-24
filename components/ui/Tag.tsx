import { cn } from "@/lib/cn";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "font-mono inline-block border border-border-subtle px-2 py-0.5 text-xs text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
