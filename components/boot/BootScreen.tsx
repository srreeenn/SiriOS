"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const BOOTED_KEY = "sirios-booted";

const ASCII_LOGO = String.raw`
███████╗██╗██████╗ ██╗
██╔════╝██║██╔══██╗██║
███████╗██║██████╔╝██║
╚════██║██║██╔══██╗██║
███████║██║██║  ██║██║
╚══════╝╚═╝╚═╝  ╚═╝╚═╝
`;

const BOOT_LINES = [
  "sirios kernel v1.0.0",
  "loading personality modules...",
  "calibrating hot-pink accent (#ff1493)...",
  "mounting terminal...",
  "cat.sys: OK",
];

const LINE_DELAY_MS = 280;

interface BootScreenProps {
  children: ReactNode;
}

export function BootScreen({ children }: BootScreenProps) {
  // Defaults to false (not true/null) so server and pre-effect client render
  // agree — no hydration mismatch, and no flash of `children` before the
  // overlay appears on first visit.
  const [booted, setBooted] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const dismissRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  // useLayoutEffect (not useEffect) so an already-booted-this-session visit
  // flips `booted` to true *before* paint — no flash of the boot screen on
  // repeat navigations within the same session.
  useLayoutEffect(() => {
    if (window.sessionStorage.getItem(BOOTED_KEY) === "true") {
      setBooted(true);
    }
  }, []);

  useEffect(() => {
    if (booted) return;

    if (reducedMotion) {
      setLineIndex(BOOT_LINES.length);
      setReady(true);
      return;
    }

    if (lineIndex < BOOT_LINES.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), LINE_DELAY_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, [booted, lineIndex, reducedMotion]);

  const finish = () => {
    window.sessionStorage.setItem(BOOTED_KEY, "true");
    setBooted(true);
  };

  // Move focus into the overlay once there's something focusable, and trap
  // "any key to continue" — but excluding Tab/Shift/modifier keys, which
  // need to keep working normally so keyboard users can actually reach
  // the skip/enter button instead of it firing on the Tab press itself.
  useEffect(() => {
    if (booted) return;
    dismissRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab" || e.ctrlKey || e.altKey || e.metaKey) return;
      finish();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [booted, ready]);

  if (booted) return <>{children}</>;

  return (
    <>
      {/* Content stays mounted underneath (SEO / no-JS visibility) — the
         overlay just covers it. Nothing here relies on `children` being
         absent. */}
      {children}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="SiriOS boot sequence"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg px-6 font-mono text-text-primary"
      >
        <pre
          aria-hidden="true"
          className="max-w-full overflow-x-auto text-[8px] leading-tight text-accent sm:text-xs"
        >
          {ASCII_LOGO}
        </pre>

        <div
          aria-live="polite"
          className="w-full max-w-sm space-y-1 text-xs text-text-secondary"
        >
          {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
            <p key={i}>
              <span className="text-accent">$</span> {line}
            </p>
          ))}
        </div>

        <button
          ref={dismissRef}
          onClick={finish}
          className={
            ready
              ? "border border-accent px-6 py-2 font-mono text-sm uppercase tracking-wider text-accent transition-shadow hover:shadow-[var(--glow-sm)]"
              : "text-xs text-text-muted underline-offset-2 hover:text-text-secondary hover:underline"
          }
        >
          {ready ? "Enter" : "skip"}
        </button>
      </div>
    </>
  );
}