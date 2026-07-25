"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#$%&01";

interface GlitchTextProps {
  text: string;
  className?: string;
}

/**
 * On hover, scrambles the text into random glitch characters and
 * progressively "decrypts" it back to the real text, left to right —
 * classic hacker-terminal reveal effect.
 */
export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = useReducedMotion();

  const scramble = () => {
    if (reducedMotion) return; // reduced motion: leave text static, no effect

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    frameRef.current = 0;
    setIsScrambling(true);

    const totalFrames = text.length * 3;

    const step = () => {
      frameRef.current += 1;
      const revealCount = Math.floor((frameRef.current / totalFrames) * text.length);

      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      setDisplay(next);

      if (revealCount < text.length) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
        setIsScrambling(false);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span
      onMouseEnter={scramble}
      className={`cursor-default transition-colors duration-150 ${
        isScrambling ? "text-accent [text-shadow:var(--glow-text)]" : ""
      } ${className}`}
    >
      {display}
    </span>
  );
}