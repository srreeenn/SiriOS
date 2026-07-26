"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * MusicDisc — a pixel-art CD in the sidebar that doubles as the only music
 * control in SiriOS. Not a player, not a Spotify clone: click it once to
 * start the soundtrack, click again to stop it. That's the whole feature.
 *
 *   idle → click → starting → playing → click → stopping → idle
 *
 * Rotation is driven manually via requestAnimationFrame (not a CSS
 * `animation`) so the "stopping" phase can decelerate smoothly from
 * whatever angular speed it was already at, instead of snapping to a halt.
 */

const TRACK_SRC = "/assets/theme.mp3";

const REVOLUTION_MS = 4000; // one full spin every 4s while playing
const FADE_MS = 400; // volume fade in/out duration
const DECEL_MS = 1400; // how long the disc coasts to a stop

type DiscState = "idle" | "starting" | "playing" | "stopping";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return reduced;
}

function easeOutQuad(t: number): number {
  return 1 - (1 - t) * (1 - t);
}

export function MusicDisc() {
  const [state, setState] = useState<DiscState>("idle");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const discRef = useRef<HTMLDivElement | null>(null);

  const angleRef = useRef(0);
  const velocityRef = useRef(0); // degrees per ms
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const decelRef = useRef<{ startTime: number; startVelocity: number } | null>(null);
  const fadeRafRef = useRef<number | null>(null);

  const reducedMotion = usePrefersReducedMotion();
  const targetVelocity = 360 / REVOLUTION_MS;

  const applyRotation = useCallback(() => {
    if (discRef.current) {
      discRef.current.style.transform = `rotate(${angleRef.current}deg)`;
    }
  }, []);

  // --- Rotation loop ---------------------------------------------------
  useEffect(() => {
    if (reducedMotion || state === "idle") return;

    lastFrameRef.current = null;
    if (state !== "stopping") decelRef.current = null;

    const step = (now: number) => {
      const last = lastFrameRef.current ?? now;
      const dt = now - last;
      lastFrameRef.current = now;

      if (state === "starting" || state === "playing") {
        velocityRef.current = targetVelocity;
        angleRef.current += velocityRef.current * dt;
        applyRotation();
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      // stopping: decelerate from current speed down to 0
      if (!decelRef.current) {
        decelRef.current = {
          startTime: now,
          startVelocity: velocityRef.current || targetVelocity,
        };
      }
      const { startTime, startVelocity } = decelRef.current;
      const t = Math.min((now - startTime) / DECEL_MS, 1);
      const currentVelocity = startVelocity * (1 - easeOutQuad(t));
      angleRef.current += currentVelocity * dt;
      applyRotation();

      if (t >= 1) {
        velocityRef.current = 0;
        decelRef.current = null;
        setState("idle");
        return;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state, reducedMotion, targetVelocity, applyRotation]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (fadeRafRef.current) cancelAnimationFrame(fadeRafRef.current);
    };
  }, []);

  // --- Volume fade -------------------------------------------------------
  const fadeVolume = useCallback(
    (from: number, to: number, duration: number, onDone?: () => void) => {
      if (fadeRafRef.current) cancelAnimationFrame(fadeRafRef.current);
      const audio = audioRef.current;
      if (!audio) return;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(Math.max((now - start) / duration, 0), 1);
        const volume = Math.min(1, Math.max(0, from + (to - from) * t));
        audio.volume = volume;
        if (t < 1) {
          fadeRafRef.current = requestAnimationFrame(tick);
        } else {
          onDone?.();
        }
      };
      fadeRafRef.current = requestAnimationFrame(tick);
    },
    []
  );

  // --- Click / keyboard activation ---------------------------------------
  const handleActivate = useCallback(() => {
    if (state === "stopping") return; // let the current stop sequence finish

    const audio = audioRef.current;
    if (!audio) return;

    if (state === "idle") {
      audio.volume = 0;
      audio
        .play()
        .then(() => {
          setState("starting");
          fadeVolume(0, 1, FADE_MS, () => setState("playing"));
        })
        .catch(() => {
          // Browser blocked playback — stay idle, nothing spins.
        });
    } else {
      fadeVolume(audio.volume, 0, FADE_MS, () => audio.pause());
      setState("stopping");
    }
  }, [state, fadeVolume]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleActivate();
      }
    },
    [handleActivate]
  );

  const isSpinning = state === "starting" || state === "playing";
  const actionLabel = isSpinning || state === "stopping" ? "stop" : "play";
  const statusText =
    state === "idle" ? "stopped" : state === "stopping" ? "stopping" : "playing";

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleActivate}
        onKeyDown={handleKeyDown}
        aria-pressed={isSpinning}
        aria-label={`${actionLabel} siri's theme`}
        className="grid h-14 w-14 shrink-0 place-items-center rounded-full transition-transform duration-150 ease-[var(--ease-out)] hover:scale-105 hover:[filter:drop-shadow(0_0_8px_var(--color-accent-glow))] focus-visible:scale-105 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div
          ref={discRef}
          className="h-14 w-14 rounded-full bg-cover bg-center [image-rendering:pixelated]"
          style={{ backgroundImage: "url(/assets/cd.png)" }}
        />
      </button>

      {/* Screen-reader-only status — the disc itself stays visually silent
          (no label, no track name) per the "CD is the only control" brief. */}
      <span className="sr-only" aria-live="polite">
        {statusText}
      </span>

      <audio ref={audioRef} src={TRACK_SRC} loop preload="none" />
    </div>
  );
}