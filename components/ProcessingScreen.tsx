"use client";

import { motion } from "framer-motion";
import type { ProcessingStage } from "@/lib/types";

export default function ProcessingScreen({ stage }: { stage: ProcessingStage }) {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center gap-6 py-20 select-none">
      {/* Orange Sparkle Star Icon Animation matching Figma Image 3 */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-20 h-20 flex items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-xl animate-pulse" />
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"
            fill="url(#sparkle-grad)"
          />
          <path
            d="M19 2L20.2 5.3L23.5 6.5L20.2 7.7L19 11L17.8 7.7L14.5 6.5L17.8 5.3L19 2Z"
            fill="#F97316"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="sparkle-grad" x1="3" y1="2" x2="21" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="flex flex-col items-center text-center gap-1.5">
        <h2 className="font-display font-bold text-2xl text-gray-900 tracking-tight">
          Extracting...
        </h2>
        <p className="font-sans text-sm text-gray-400">
          This may take a while
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 font-mono text-xs">
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          ●
        </motion.span>
        <span className="capitalize">{stage.replace("-", " ")}</span>
      </div>
    </div>
  );
}

