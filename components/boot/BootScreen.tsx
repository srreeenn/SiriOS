"use client";

import { useEffect, useState, type ReactNode } from "react";

const BOOTED_KEY = "sirios-booted";
const ASCII_LOGO = String.raw`
 ▄▄▄▄▄▄▄  ▄▄▄ ▄▄▄▄▄▄▄  ▄▄▄     ▄▄▄▄▄▄   ▄▄▄▄▄▄
█       ██   █       ██   █   █      █ █      █
█  ▄▄▄▄▄██   █    ▄▄▄██   █   █  ▄    █ █  ▄    █
█ █▄▄▄▄▄██   █   █▄▄▄█   █   █ █ █   █ █ █   █
█▄▄▄▄▄  █   █    ▄▄▄█   █▄▄▄█ █▄█   █ █▄█   █
 ▄▄▄▄▄█ █   █   █    ███     █       █       █
█▄▄▄▄▄▄▄█▄▄▄█▄▄▄█    █▄▄▄▄▄▄▄█▄▄▄▄▄▄██▄▄▄▄▄▄██
`;

const BOOT_LINES = [
  "sirios kernel v1.0.0",
  "loading personality modules...",
  "calibrating hot-pink accent (#ff1493)...",
  "mounting terminal...",
  "cat.sys: OK",
];

interface BootScreenProps {
  children: ReactNode;
}

export function BootScreen({ children }: BootScreenProps) {
  // null = "haven't checked sessionStorage yet" — avoids a hydration flash
  const [booted, setBooted] = useState<boolean | null>(null);
  const [lineIndex, setLineIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setBooted(window.sessionStorage.getItem(BOOTED_KEY) === "true");
  }, []);

  useEffect(() => {
    if (booted !== false) return;

    if (lineIndex < BOOT_LINES.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 280);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, [booted, lineIndex]);

  const finish = () => {
    window.sessionStorage.setItem(BOOTED_KEY, "true");
    setBooted(true);
  };

  useEffect(() => {
    if (booted !== false) return;
    const onKey = () => finish();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [booted]);

  // Still checking sessionStorage, or already booted this session — render straight through.
  if (booted !== false) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg px-6 font-mono text-text-primary">
      <pre className="max-w-full overflow-x-auto text-[8px] leading-tight text-accent sm:text-xs">
        {ASCII_LOGO}
      </pre>

      <div className="w-full max-w-sm space-y-1 text-xs text-text-secondary">
        {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
          <p key={i}>
            <span className="text-accent">$</span> {line}
          </p>
        ))}
      </div>

      {ready ? (
        <button
          onClick={finish}
          className="border border-accent px-6 py-2 font-mono text-sm uppercase tracking-wider text-accent transition-shadow hover:shadow-[var(--glow-sm)]"
        >
          Enter SiriOS
        </button>
      ) : (
        <button
          onClick={finish}
          className="text-xs text-text-muted underline-offset-2 hover:text-text-secondary hover:underline"
        >
          skip
        </button>
      )}
    </div>
  );
}
