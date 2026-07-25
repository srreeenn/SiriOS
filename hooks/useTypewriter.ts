// hooks/useTypewriter.ts
"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useTypewriter(text: string, speedMs = 35) {
  const reducedMotion = useReducedMotion();
  const [output, setOutput] = useState(reducedMotion ? text : "");

  useEffect(() => {
    if (reducedMotion) {
      setOutput(text);
      return;
    }
    setOutput("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs, reducedMotion]);

  return output;
}