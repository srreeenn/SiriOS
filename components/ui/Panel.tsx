import { cn } from "@/lib/cn";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  glow?: boolean;
};

export function Panel({ children, className, title, glow = false }: PanelProps) {
  return (
    <section
      className={cn(
        "border border-border bg-bg-elevated p-4 md:p-6",
        glow && "shadow-glow-sm",
        className,
      )}
    >
      {title && (
        <h2 className="font-mono mb-4 text-xs uppercase tracking-[0.2em] text-accent">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
