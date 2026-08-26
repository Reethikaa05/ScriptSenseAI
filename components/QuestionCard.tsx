"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ExtractedQuestion, MappedAnswer } from "@/lib/types";

type Props = {
  question: ExtractedQuestion;
  answer: MappedAnswer | undefined;
  selected: boolean;
  onSelect: () => void;
};

export default function QuestionCard({ question, answer, selected, onSelect }: Props) {
  const [expanded, setExpanded] = useState(false);
  const unanswered = !answer || !answer.matched;

  const marksAwarded = answer?.marksAwarded ?? 0;
  const maxMarks = question.maxMarks ?? answer?.maxMarks ?? 2;

  // Determine score pill style matching Figma Image 4
  const isZero = marksAwarded === 0 || unanswered;
  const isFull = marksAwarded === maxMarks && !unanswered;

  const pillClass = isFull
    ? "bg-emerald-100 text-emerald-700 font-bold"
    : isZero
    ? "bg-red-100 text-red-600 font-bold"
    : "bg-amber-100 text-amber-700 font-bold";

  return (
    <motion.div
      layout
      onClick={onSelect}
      whileHover={{ y: -1 }}
      className={`w-full cursor-pointer text-left rounded-2xl p-4 transition-all duration-200 relative bg-white border ${
        selected
          ? "border-orange-500 shadow-md ring-2 ring-orange-500/10"
          : "border-gray-200 hover:border-gray-300 hover:shadow-xs"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {/* Dark circle question number matching Figma Image 4 */}
          <div className="w-7 h-7 rounded-full bg-gray-800 text-white font-sans text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
            {question.number}
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-900 leading-snug">
              {question.text}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Score pill e.g. 2/2, 0/2 matching Figma Image 4 */}
          <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${pillClass}`}>
            {marksAwarded}/{maxMarks}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((ex) => !ex);
            }}
            className="text-gray-400 hover:text-gray-600 text-xs px-1"
          >
            {expanded || selected ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {/* Expanded AI Feedback card matching Figma Image 4 */}
      <AnimatePresence>
        {(expanded || selected) && answer?.feedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 pt-3 border-t border-gray-100"
          >
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-3.5 text-xs text-gray-700">
              <p className="font-sans font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                <span>✨</span> AI Feedback
              </p>
              <p className="leading-relaxed text-gray-600">{answer.feedback}</p>

              {answer.text && (
                <div className="mt-2 pt-2 border-t border-gray-200/60 font-mono text-[11px] text-gray-500 italic">
                  "{answer.text}"
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


