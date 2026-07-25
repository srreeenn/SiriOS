"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { extractParticles, type AsciiParticle } from "@/lib/ascii";

interface AsciiPortraitProps {
  src: string;
  alt?: string;
  cell?: number;
  className?: string;
}

const RADIUS = 70;
const EDGE = 28;

export function AsciiPortrait({
  src,
  alt = "",
  cell = 6,
  className = "",
}: AsciiPortraitProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const particlesRef = useRef<AsciiParticle[]>([]);
  const sourceRef = useRef({ w: 0, h: 0 });

  const pointerRef = useRef({ x: 0, y: 0 });
  const centerRef = useRef({ x: 0, y: 0 });
  const targetRadiusRef = useRef(0);
  const currentRadiusRef = useRef(0);
  const activeRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const build = () => {
      const off = document.createElement("canvas");
      off.width = img.naturalWidth;
      off.height = img.naturalHeight;
      const octx = off.getContext("2d");
      if (!octx) return;
      octx.drawImage(img, 0, 0);

      sourceRef.current = { w: off.width, h: off.height };
      particlesRef.current = extractParticles(octx, off.width, off.height, cell);
      resize();
    };

    if (img.complete) build();
    else img.addEventListener("load", build, { once: true });
    return () => img.removeEventListener("load", build);
  }, [src, cell]);

  const resize = () => {
    const canvas = canvasRef.current;
    const panel = panelRef.current;
    if (!canvas || !panel) return;
    const rect = panel.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  };

  const toDisplaySpace = (px: number, py: number): [number, number, number] => {
    const panel = panelRef.current;
    const { w: W, h: H } = sourceRef.current;
    if (!panel || !W || !H) return [0, 0, 1];
    const rect = panel.getBoundingClientRect();
    const scale = Math.max(rect.width / W, rect.height / H);
    const offX = (rect.width - W * scale) / 2;
    const offY = (rect.height - H * scale) / 2;
    return [px * scale + offX, py * scale + offY, scale];
  };

  const updateMask = () => {
    const img = imgRef.current;
    if (!img || reducedMotion) return;
    const r = currentRadiusRef.current;
    if (r < 0.5) {
      img.style.webkitMaskImage = "";
      img.style.maskImage = "";
      return;
    }
    const inner = Math.max(0, r - EDGE);
    const { x, y } = centerRef.current;
    const g =
      `radial-gradient(circle ${r}px at ${x}px ${y}px, ` +
      `transparent 0px, transparent ${inner}px, black ${r}px, black 100%)`;
    img.style.webkitMaskImage = g;
    img.style.maskImage = g;
  };

  const ensureLoop = () => {
    if (rafRef.current) return;

    const render = (time: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const { w: W, h: H } = sourceRef.current;
      const dpr = window.devicePixelRatio || 1;

      if (!canvas || !ctx || !W || !H) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      centerRef.current.x += (pointerRef.current.x - centerRef.current.x) * 0.35;
      centerRef.current.y += (pointerRef.current.y - centerRef.current.y) * 0.35;
      currentRadiusRef.current +=
        (targetRadiusRef.current - currentRadiusRef.current) * 0.18;

      updateMask();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const r = currentRadiusRef.current;
      if (!reducedMotion && r > 0.5) {
        const drawRadius = r + EDGE;
        const center = centerRef.current;

        for (const p of particlesRef.current) {
          const [dx0, dy0, scale] = toDisplaySpace(p.hx, p.hy);
          const dist = Math.hypot(dx0 - center.x, dy0 - center.y);
          if (dist > drawRadius) continue;

          const wave = Math.sin(time * 0.003 + p.phase);
          let tx = p.hx + wave * 1.1;
          let ty = p.hy + wave * 1.1;

          const dxp = dx0 - center.x;
          const dyp = dy0 - center.y;
          const d = Math.hypot(dxp, dyp) || 1;
          if (d < r) {
            const pull = (1 - d / r) * 8;
            tx += (dxp / d) * (pull / scale);
            ty += (dyp / d) * (pull / scale);
          }

          p.vx += (tx - p.x) * 0.08;
          p.vy += (ty - p.y) * 0.08;
          p.vx *= 0.82;
          p.vy *= 0.82;
          p.x += p.vx;
          p.y += p.vy;

          const [cx, cy] = toDisplaySpace(p.x, p.y);
          const alpha = Math.max(0, Math.min(1, 1 - Math.max(0, dist - r) / EDGE));
          if (alpha <= 0) continue;

          ctx.font = `${p.size * scale * dpr}px "JetBrains Mono", monospace`;

          ctx.globalAlpha = 0.85 * alpha;
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.fillText(p.ch, cx * dpr, cy * dpr);
          ctx.shadowBlur = 0;

          ctx.globalAlpha = 0.6 * alpha;
          ctx.fillStyle = "#F5F5F5";
          ctx.fillText(p.ch, cx * dpr, cy * dpr);
        }
        ctx.globalAlpha = 1;
      }

      const stillMoving =
        r > 0.5 || Math.abs(targetRadiusRef.current - r) > 0.2;

      if (activeRef.current || stillMoving) {
        rafRef.current = requestAnimationFrame(render);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(render);
  };

  const setPointerFromEvent = (clientX: number, clientY: number) => {
    const panel = panelRef.current;
    if (!panel) return;
    const rect = panel.getBoundingClientRect();
    pointerRef.current = { x: clientX - rect.left, y: clientY - rect.top };
  };

  const activate = (clientX: number, clientY: number) => {
    if (reducedMotion || !sourceRef.current.w) return;
    setPointerFromEvent(clientX, clientY);
    centerRef.current = { ...pointerRef.current };
    activeRef.current = true;
    targetRadiusRef.current = RADIUS;
    resize();
    ensureLoop();
  };

  const deactivate = () => {
    activeRef.current = false;
    targetRadiusRef.current = 0;
    ensureLoop();
  };

  useEffect(() => {
    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={`relative w-full max-w-[520px] mx-auto ${className}`}>
      <div
        ref={panelRef}
        className="relative aspect-[640/617] overflow-hidden touch-none"
        onPointerDown={(e) => activate(e.clientX, e.clientY)}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") activate(e.clientX, e.clientY);
        }}
        onPointerMove={(e) => {
          setPointerFromEvent(e.clientX, e.clientY);
          if (e.pointerType === "mouse" && !activeRef.current) {
            activate(e.clientX, e.clientY);
          }
        }}
        onPointerLeave={deactivate}
        onPointerUp={(e) => {
          if (e.pointerType !== "mouse") deactivate();
        }}
        onPointerCancel={deactivate}
        aria-hidden="true"
      >
        <Image ref={imgRef} src={src} alt={alt} fill priority className="object-contain" />

        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}