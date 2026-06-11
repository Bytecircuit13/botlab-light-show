"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const lastIndexRef = useRef<number>(-1);

  const { images, isLoading, progress } = useImagePreloader(0, 1051, 6);

  const drawFrame = useCallback(
    (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
      const { width: w, height: h } = ctx.canvas;
      ctx.clearRect(0, 0, w, h);
      const r = Math.max(w / img.naturalWidth, h / img.naturalHeight);
      const nw = img.naturalWidth * r;
      const nh = img.naturalHeight * r;
      ctx.drawImage(img, (w - nw) / 2, (h - nh) / 2, nw, nh);
    },
    []
  );

  useEffect(() => {
    if (!images.length || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const t = docHeight > 0 ? scrollTop / docHeight : 0;
      const index = Math.min(images.length - 1, Math.floor(t * images.length));

      if (index !== lastIndexRef.current && images[index]) {
        drawFrame(ctx, images[index]);
        lastIndexRef.current = index;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [images, drawFrame]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#050505]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,186,77,0.06),transparent_70%)]" />
            <div className="relative mb-8 h-12 w-72 overflow-hidden border border-accent-gold/20 bg-bg-night">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent-gold/15 border-r border-accent-gold/40"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs tracking-[0.3em] text-accent-gold animate-pulse">
                  {progress}%
                </span>
              </div>
            </div>
            <h2 className="text-lg font-black tracking-[0.25em] text-white uppercase">BotLab Dynamics</h2>
            <p className="mt-2 font-mono text-[9px] tracking-[0.3em] text-accent-gold/70 uppercase">Loading Drone Sequence</p>
          </motion.div>
        )}
      </AnimatePresence>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />
    </>
  );
}
