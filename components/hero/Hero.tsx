"use client";

import { useTypewriter } from "@/hooks/useTypewriter";
import { GlitchText } from "./GlitchText";
import { AsciiPortrait } from "./AsciiPortrait";

const FULL_NAME = "SREENANDANA PANANGATTU";

export function Hero() {
  const typed = useTypewriter(FULL_NAME, 60);
  const typingDone = typed.length === FULL_NAME.length;

  return (
    <section className="grid lg:grid-cols-[0.95fr_1.05fr] items-center gap-6 min-h-[78vh]">
      <div className="pl-12 lg:pl-20">
        <p className="mb-3 font-mono text-sm text-text-secondary">
          hi, i&apos;m
        </p>

        <h1 className="font-mono text-5xl sm:text-7xl leading-[0.9] tracking-tight text-text-primary">
          {typingDone ? (
            <GlitchText text={FULL_NAME} />
          ) : (
            <>
              {typed}
              <span className="animate-pulse text-accent">_</span>
            </>
          )}
        </h1>

        <p className="mt-8 text-lg text-text-secondary">
          Software Engineer...
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <AsciiPortrait src="/assets/portrait.png" alt="" className="translate-x-6" />
      </div>
    </section>
  );
}