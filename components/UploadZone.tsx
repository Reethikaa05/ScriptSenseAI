"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  label: string;
  eyebrow: string;
  accentColor?: "red" | "navy";
  files: File[];
  onChange: (files: File[]) => void;
};

export default function UploadZone({ label, eyebrow, accentColor = "red", files, onChange }: Props) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      onChange(Array.from(fileList));
    },
    [onChange]
  );

  function formatSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  const accent = accentColor === "red" ? "text-red-pen" : "text-navy";
  const accentBorder = accentColor === "red" ? "border-red-pen" : "border-navy";
  const accentBg = accentColor === "red" ? "bg-red-pen" : "bg-navy";

  return (
    <div className="flex-1 min-w-[260px]">
      <p className={`font-mono text-xs tracking-[0.18em] uppercase mb-2 ${accent}`}>
        {eyebrow}
      </p>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`paper-card relative rounded-sm p-6 cursor-pointer transition-all duration-200 ${
          dragging ? `${accentBorder} shadow-lift -translate-y-0.5 bg-paper/80` : "hover:shadow-lift hover:-translate-y-0.5"
        } border-2 border-dashed ${dragging ? "" : "border-ink/15"}`}
        style={{ minHeight: 200 }}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="application/pdf,image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <AnimatePresence mode="wait">
          {files.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex flex-col items-center justify-center h-full text-center gap-3 py-4"
            >
              <div className={`w-12 h-12 rounded-full border-2 ${accentBorder} flex items-center justify-center ${accent} shadow-sm`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4v12m0-12l-5 5m5-5l5 5M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-display text-lg text-ink font-medium">{label}</p>
                <p className="text-xs font-mono text-ink-soft/80 mt-1 max-w-[230px]">
                  PDF documents or scanned images (PNG, JPG)
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="filled"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-lg text-ink font-semibold">{label}</p>
                <span className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full text-white font-medium ${accentBg}`}>
                  {files.length} file{files.length > 1 ? "s" : ""}
                </span>
              </div>
              <ul className="flex flex-col gap-2 max-h-28 overflow-y-auto pr-1">
                {files.map((f, i) => (
                  <li
                    key={f.name + i}
                    className="text-xs font-mono text-ink bg-ink/5 p-2 rounded-sm flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-2 h-2 rounded-full ${accentBg} shrink-0`} />
                      <span className="truncate">{f.name}</span>
                    </div>
                    <span className="text-[10px] text-ink-soft shrink-0">{formatSize(f.size)}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange([]);
                }}
                className="self-start text-xs font-mono underline decoration-dotted text-ink-soft hover:text-red-pen transition-colors mt-1"
              >
                Clear selection
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

