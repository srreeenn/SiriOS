"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

const BOOT_STORAGE_KEY = "sirios-boot-complete";

const ASCII_LOGO = `
 ███████╗██╗██████╗ ██╗ ██████╗ ███████╗
 ██╔════╝██║██╔══██╗██║██╔═══██╗██╔════╝
 ███████╗██║██████╔╝██║██║   ██║███████╗
 ╚════██║██║██╔══██╗██║██║   ██║╚════██║
 ███████║██║██║  ██║██║╚██████╔╝███████║
 ╚══════╝╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚══════╝
`.trim();

const BOOT_LINES = [
  "initializing kernel...",
  "loading modules...",
  "mounting /dev/portfolio",
  "starting cat.service",
  "establishing connection...",
  "system ready.",
];

type BootScreenProps = {
  onComplete: () => void;
};

export function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const complete = useCallback(() => {
    sessionStorage.setItem(BOOT_STORAGE_KEY, "true");
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      if (lineIndex < BOOT_LINES.length) {
        setVisibleLines((prev) => [...prev, BOOT_LINES[lineIndex]]);
        setProgress(Math.round(((lineIndex + 1) / BOOT_LINES.length) * 100));
        lineIndex += 1;
      } else {
        clearInterval(lineInterval);
        setReady(true);
      }
    }, 400);

    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === "Escape") {
        complete();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [complete]);

  return (
    <div className="scanlines fixed inset-0 z-[200] flex flex-col items-center justify-center bg-bg px-6">
      <pre className="font-mono mb-8 whitespace-pre text-[0.45rem] leading-tight text-accent glow-text sm:text-xs md:text-sm">
        {ASCII_LOGO}
      </pre>

      <div className="font-mono mb-6 w-full max-w-md space-y-1 text-xs text-text-secondary">
        {visibleLines.map((line) => (
          <p key={line}>
            <span className="text-accent">&gt;</span> {line}
          </p>
        ))}
        {!ready && (
          <p className="boot-pulse text-accent">
            <span className="text-accent">&gt;</span> booting...
          </p>
        )}
      </div>

      <div className="mb-8 w-full max-w-md">
        <div className="mb-1 flex justify-between font-mono text-xs text-text-muted">
          <span>loading</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 border border-border-subtle bg-bg-subtle">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {ready ? (
        <Button onClick={complete}>Enter SiriOS</Button>
      ) : (
        <p className="font-mono text-xs text-text-muted">press Enter or Esc to skip</p>
      )}
    </div>
  );
}

export function shouldShowBoot(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(BOOT_STORAGE_KEY) !== "true";
}

export function BootGate({ children }: { children: React.ReactNode }) {
  const [booted, setBooted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setBooted(sessionStorage.getItem(BOOT_STORAGE_KEY) === "true");
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-bg" />;
  }

  if (!booted) {
    return <BootScreen onComplete={() => setBooted(true)} />;
  }

  return <>{children}</>;
}
