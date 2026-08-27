"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BoundingBox, Correctness, PageImage } from "@/lib/types";

type Props = {
  pages: PageImage[];
  activePage: number;
  onPageChange: (page: number) => void;
  highlightBox: BoundingBox | null;
  highlightKey: string;
  correctness?: Correctness;
};

export default function AnswerSheetViewer({
  pages,
  activePage,
  onPageChange,
  highlightBox,
  highlightKey,
  correctness = "correct"
}: Props) {
  const page = pages.find((p) => p.page === activePage) || pages[0];
  const [renderKey, setRenderKey] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRenderKey((k) => k + 1);
    // Auto scroll highlight into view within container
    if (highlightBox && highlightRef.current && containerRef.current) {
      setTimeout(() => {
        highlightRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
      }, 100);
    }
  }, [highlightBox, highlightKey, activePage]);

  const isIncorrect = correctness === "incorrect";
  const isPartial = correctness === "partial";

  const strokeColor = isIncorrect ? "#E11D48" : isPartial ? "#D97706" : "#16A34A";
  const fillColor = isIncorrect ? "rgba(225,29,72,0.18)" : isPartial ? "rgba(217,119,6,0.18)" : "rgba(34,197,94,0.18)";
  const shadowClass = isIncorrect
    ? "shadow-[0_0_30px_rgba(225,29,72,0.45)]"
    : isPartial
    ? "shadow-[0_0_30px_rgba(217,119,6,0.45)]"
    : "shadow-[0_0_30px_rgba(34,197,94,0.45)]";

  const pillClass = isIncorrect
    ? "bg-rose-600 text-white border-rose-400"
    : isPartial
    ? "bg-amber-600 text-white border-amber-400"
    : "bg-emerald-600 text-white border-emerald-400";

  const statusSymbol = isIncorrect ? "✗ Incorrect" : isPartial ? "! Partial" : "✓ Correct";

  if (!page) return null;

  function handleZoomIn() {
    setZoom((z) => Math.min(2.5, +(z + 0.25).toFixed(2)));
  }

  function handleZoomOut() {
    setZoom((z) => Math.max(0.75, +(z - 0.25).toFixed(2)));
  }

  function handleResetZoom() {
    setZoom(1);
  }

  return (
    <div className={`flex flex-col h-full ${isFullscreen ? "fixed inset-0 z-50 p-6 bg-paper" : ""}`}>
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-navy font-semibold">
            Answer Sheet Canvas
          </p>
          <span className="font-mono text-[10px] text-ink-soft/70 bg-ink/5 px-2 py-0.5 rounded-full">
            {Math.round(zoom * 100)}% zoom
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom Controls */}
          <div className="flex items-center border border-ink/15 rounded-full bg-paper px-1.5 py-0.5 shadow-sm">
            <button
              onClick={handleZoomOut}
              disabled={zoom <= 0.75}
              className="w-6 h-6 text-xs font-mono disabled:opacity-30 hover:text-red-pen transition-colors"
              title="Zoom out"
            >
              −
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 text-[10px] font-mono text-ink-soft hover:text-ink transition-colors border-x border-ink/10"
              title="Reset zoom"
            >
              Fit
            </button>
            <button
              onClick={handleZoomIn}
              disabled={zoom >= 2.5}
              className="w-6 h-6 text-xs font-mono disabled:opacity-30 hover:text-red-pen transition-colors"
              title="Zoom in"
            >
              +
            </button>
          </div>

          {/* Fullscreen toggle */}
          <button
            onClick={() => setIsFullscreen((f) => !f)}
            className="w-7 h-7 rounded-full border border-ink/15 hover:border-navy hover:text-navy text-xs font-mono transition-colors flex items-center justify-center"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? "✕" : "⛶"}
          </button>

          {/* Page pagination */}
          {pages.length > 1 && (
            <div className="flex items-center gap-2 font-mono text-xs text-ink-soft border-l border-ink/15 pl-2">
              <button
                onClick={() => onPageChange(Math.max(1, activePage - 1))}
                disabled={activePage <= 1}
                className="w-6 h-6 rounded-full border border-ink/15 disabled:opacity-30 hover:border-red-pen hover:text-red-pen transition-colors flex items-center justify-center"
              >
                ‹
              </button>
              <span>
                Pg {activePage}/{pages.length}
              </span>
              <button
                onClick={() => onPageChange(Math.min(pages.length, activePage + 1))}
                disabled={activePage >= pages.length}
                className="w-6 h-6 rounded-full border border-ink/15 disabled:opacity-30 hover:border-red-pen hover:text-red-pen transition-colors flex items-center justify-center"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative flex-1 paper-card rounded-sm overflow-auto shadow-card border border-ink/15 bg-paper/50"
      >
        <div className="relative min-w-full min-h-full flex items-start justify-center p-4">
          <motion.div
            animate={{ scale: zoom }}
            transition={{ duration: 0.2 }}
            className="relative inline-block origin-top"
          >
            <img
              src={page.dataUrl}
              alt={`Answer sheet page ${page.page}`}
              className="max-w-full h-auto block select-none rounded-[2px] shadow-sm border border-ink/10"
              draggable={false}
            />
            <AnimatePresence>
              {highlightBox && (
                <motion.div
                  ref={highlightRef}
                  key={renderKey}
                  className={`absolute pointer-events-none z-10 rounded-2xl ${shadowClass}`}
                  style={{
                    left: `${highlightBox.x * 100}%`,
                    top: `${highlightBox.y * 100}%`,
                    width: `${highlightBox.width * 100}%`,
                    height: `${highlightBox.height * 100}%`
                  }}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="absolute -inset-[3%] w-[106%] h-[106%] overflow-visible"
                  >
                    {/* Background highlight glow */}
                    <motion.rect
                      x="2"
                      y="2"
                      width="96"
                      height="96"
                      rx="8"
                      fill={fillColor}
                      animate={{ opacity: [0.15, 0.25, 0.15] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Dynamic stroke border (Red for Incorrect, Amber for Partial, Green for Correct) */}
                    <motion.rect
                      x="2"
                      y="2"
                      width="96"
                      height="96"
                      rx="8"
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth="3.5"
                      vectorEffect="non-scaling-stroke"
                      strokeDasharray="400"
                      initial={{ strokeDashoffset: 400 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </svg>

                  {/* Dynamic Color Badge Pill Pinned at Top-Left */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.4, y: -4 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.25 }}
                    className={`absolute -top-4 left-3 font-mono font-extrabold text-xs px-3 py-0.5 rounded-md shadow-lg flex items-center gap-1.5 border z-20 ${pillClass}`}
                  >
                    <span>[{highlightKey ? `Q${highlightKey}` : "Q2"}]</span>
                    <span className="text-[10px] opacity-90">{statusSymbol}</span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

