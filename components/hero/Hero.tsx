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
      <div className="pl-8 lg:pl-16">
        <p className="mb-3 font-mono text-sm text-text-secondary">
          hi, i&apos;m
        </p>

        <h1 className="font-mono font-semibold leading-[0.9] tracking-tight text-[clamp(2.25rem,5vw,5rem)] text-text-primary">
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
          ASPIRING SOFTWARE ENGINEER
        </p>
      </div>

      <div className="flex justify-center lg:justify-end">
        <AsciiPortrait src="/assets/portrait.png" alt="" />
      </div>
    </section>
  );
}