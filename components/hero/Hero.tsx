"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { AsciiPortrait } from "./AsciiPortrait";

export function Hero() {
  const name = useTypewriter("SREENANDANA PANANGATTU", 60);

  return (
    <section className="grid lg:grid-cols-2 items-center gap-12">
      <div>
        <p className="font-mono text-sm text-text-secondary">hi, i&apos;m</p>
        <h1 className="font-mono text-4xl sm:text-6xl tracking-wide text-text-primary">
          {name}
          <span className="animate-pulse text-accent">_</span>
        </h1>
        <p className="mt-4 text-text-secondary">Software Engineer...</p>
      </div>
      <AsciiPortrait src="/assets/portrait.png" alt="" />
    </section>
  );
}