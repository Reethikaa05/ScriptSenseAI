"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function HelpModal({ isOpen, onClose }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqs = [
    {
      q: "How does out-of-order handwriting mapping work?",
      a: "VedaAI uses Anthropic Claude 3.5 Vision to transcribe handwritten text and compare it against the extracted question paper structure. It matches answers by question label (e.g. 'Q2', '3(a)') and semantic content, even when written non-sequentially across pages."
    },
    {
      q: "How are the green highlight boxes generated on the answer sheet?",
      a: "Claude Vision returns normalized relative bounding box coordinates (x, y, width, height from 0.0 to 1.0). The AnswerSheetViewer canvas then renders a smooth green sketch rounded rectangle box with a pinned [Q2] badge pill."
    },
    {
      q: "What file formats and page limits are supported?",
      a: "You can upload PDF files or images (.png, .jpg, .webp). PDF pages are automatically rasterized in the browser into high-resolution canvas images before being sent for AI analysis."
    },
    {
      q: "Is student data stored on permanent servers?",
      a: "No. VedaAI operates with a 100% in-memory architecture. Files are processed in real-time per request and held only in client React state. No student papers are saved to disk or external databases."
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full max-w-2xl rounded-3xl p-7 shadow-2xl relative border border-gray-200 dark:border-gray-800"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 font-bold text-lg flex items-center justify-center shadow-xs">
                ❓
              </div>
              <div>
                <h2 className="font-display font-bold text-xl">Help &amp; Educator Documentation</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Everything you need to master VedaAI paper grading</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-mono text-sm px-3 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-6 max-h-[70vh] overflow-y-auto pr-2">
            {/* Quick Start Guide */}
            <div className="bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200/60 dark:border-orange-900/40 p-4 rounded-2xl">
              <h3 className="font-display font-bold text-sm text-orange-700 dark:text-orange-300 mb-2 flex items-center gap-2">
                <span>🚀 Quick Start Guide</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                <div className="bg-white dark:bg-gray-800 p-2.5 rounded-xl border border-orange-100 dark:border-gray-700">
                  <span className="font-bold font-mono text-orange-600">1. Upload</span>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Drop Question Paper &amp; Answer Sheet</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-2.5 rounded-xl border border-orange-100 dark:border-gray-700">
                  <span className="font-bold font-mono text-orange-600">2. Extract</span>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">AI extracts questions &amp; max marks</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-2.5 rounded-xl border border-orange-100 dark:border-gray-700">
                  <span className="font-bold font-mono text-orange-600">3. Map</span>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Green box pinpoints answer region</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-2.5 rounded-xl border border-orange-100 dark:border-gray-700">
                  <span className="font-bold font-mono text-orange-600">4. Export</span>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">Download PDF evaluation report</p>
                </div>
              </div>
            </div>

            {/* Expandable FAQ Accordion */}
            <div>
              <h3 className="font-display font-bold text-sm mb-3 text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h3>
              <div className="flex flex-col gap-2">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-gray-50/50 dark:bg-gray-800/40"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-3.5 text-left font-sans text-xs font-semibold flex items-center justify-between gap-3 text-gray-900 dark:text-white"
                    >
                      <span>{faq.q}</span>
                      <span className="font-mono text-gray-400">{openFaq === i ? "▲" : "▼"}</span>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-3.5 pb-3.5 pt-1 text-xs text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800 leading-relaxed"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyboard Shortcuts */}
            <div>
              <h3 className="font-display font-bold text-sm mb-2 text-gray-900 dark:text-white">
                ⌨️ Canvas Keyboard Shortcuts
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex items-center justify-between">
                  <span className="text-gray-500">Zoom In/Out</span>
                  <span className="bg-white dark:bg-gray-700 px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 font-bold">+ / -</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex items-center justify-between">
                  <span className="text-gray-500">Fit Canvas</span>
                  <span className="bg-white dark:bg-gray-700 px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 font-bold">F</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex items-center justify-between">
                  <span className="text-gray-500">Next Question</span>
                  <span className="bg-white dark:bg-gray-700 px-1.5 py-0.5 rounded border border-gray-300 dark:border-gray-600 font-bold">↓ / ↑</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-mono">VedaAI Educator v1.4.2</span>
            <button
              onClick={onClose}
              className="bg-gray-900 dark:bg-orange-500 hover:bg-black dark:hover:bg-orange-600 text-white font-sans text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs"
            >
              Got it, close help
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
