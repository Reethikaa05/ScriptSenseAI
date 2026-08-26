"use client";

import { motion } from "framer-motion";
import type { GradingSummary as Summary } from "@/lib/types";

export default function GradingSummary({ summary }: { summary: Summary }) {
  const pct =
    summary.totalMaxMarks > 0
      ? Math.round((summary.totalMarksAwarded / summary.totalMaxMarks) * 100)
      : 0;

  const dist = summary.gradeDistribution || {
    correct: 0,
    partial: 0,
    incorrect: 0,
    ungraded: summary.unansweredCount
  };

  return (
    <div className="paper-card rounded-sm p-6 shadow-card relative overflow-hidden border border-ink/15 bg-paper">
      {/* Animated Stamp Score Gauge */}
      <motion.div
        initial={{ opacity: 0, scale: 1.6, rotate: 8 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ delay: 0.15, duration: 0.5, ease: [0.2, 1.4, 0.4, 1] }}
        className="absolute top-4 right-4 w-24 h-24 rounded-full border-[3.5px] border-red-pen flex flex-col items-center justify-center text-red-pen shadow-sm pointer-events-none"
      >
        <span className="font-display font-bold text-2xl leading-none">{pct}%</span>
        <span className="font-mono text-[9px] uppercase tracking-widest font-semibold mt-0.5">OVERALL</span>
      </motion.div>

      <div className="flex items-center gap-2 mb-4">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-navy font-semibold">
          Grading & AI Diagnostics Summary
        </p>
        {summary.averageLegibilityScore && (
          <span className="font-mono text-[10px] bg-green-light text-green-margin px-2 py-0.5 rounded-full font-medium">
            {summary.averageLegibilityScore}% Avg Legibility
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mb-5 border-b border-ink/10 pb-4">
        <Stat label="Total Questions" value={String(summary.totalQuestions)} subtitle="Printed" />
        <Stat label="Answered" value={`${summary.answeredCount}/${summary.totalQuestions}`} subtitle={`${summary.unansweredCount} missing`} />
        <Stat label="Total Score" value={`${summary.totalMarksAwarded}/${summary.totalMaxMarks}`} subtitle={`${pct}% scored`} />
        <Stat label="Unmatched Blocks" value={String(summary.unmatchedCount)} subtitle="Rough work" />
      </div>

      {/* Grade distribution progress bar */}
      <div className="mb-5 max-w-xl">
        <div className="flex items-center justify-between text-xs font-mono mb-1.5 text-ink-soft">
          <span>Question Outcome Breakdown</span>
          <span>
            {dist.correct} Correct · {dist.partial} Partial · {dist.incorrect} Incorrect · {dist.ungraded} Unanswered
          </span>
        </div>
        <div className="w-full h-3 bg-ink/10 rounded-full overflow-hidden flex">
          {summary.totalQuestions > 0 && (
            <>
              <div
                style={{ width: `${(dist.correct / summary.totalQuestions) * 100}%` }}
                className="bg-green-margin h-full transition-all duration-500"
                title={`Correct: ${dist.correct}`}
              />
              <div
                style={{ width: `${(dist.partial / summary.totalQuestions) * 100}%` }}
                className="bg-amber-stamp h-full transition-all duration-500"
                title={`Partial: ${dist.partial}`}
              />
              <div
                style={{ width: `${(dist.incorrect / summary.totalQuestions) * 100}%` }}
                className="bg-red-pen h-full transition-all duration-500"
                title={`Incorrect: ${dist.incorrect}`}
              />
              <div
                style={{ width: `${(dist.ungraded / summary.totalQuestions) * 100}%` }}
                className="bg-ink/20 h-full transition-all duration-500"
                title={`Unanswered: ${dist.ungraded}`}
              />
            </>
          )}
        </div>
      </div>

      {summary.overallFeedback && (
        <div className="max-w-3xl border-t border-ink/10 pt-4">
          <p className="font-mono text-xs uppercase tracking-wide text-navy mb-1.5 font-semibold">
            Teacher Summary & AI Evaluation
          </p>
          <p className="text-sm text-ink leading-relaxed">
            {summary.overallFeedback}
          </p>
        </div>
      )}

      {/* Strengths & Weaknesses grid */}
      {((summary.topStrengths && summary.topStrengths.length > 0) ||
        (summary.topWeaknesses && summary.topWeaknesses.length > 0)) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-ink/10 max-w-3xl">
          {summary.topStrengths && summary.topStrengths.length > 0 && (
            <div className="bg-green-light/40 border border-green-margin/30 p-3.5 rounded-sm">
              <p className="font-mono text-xs uppercase tracking-wide text-green-margin font-semibold mb-1.5 flex items-center gap-1.5">
                <span>✓</span> Key Strengths
              </p>
              <ul className="text-xs text-ink-soft flex flex-col gap-1 list-disc list-inside">
                {summary.topStrengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}

          {summary.topWeaknesses && summary.topWeaknesses.length > 0 && (
            <div className="bg-amber-light/40 border border-amber-stamp/30 p-3.5 rounded-sm">
              <p className="font-mono text-xs uppercase tracking-wide text-amber-stamp font-semibold mb-1.5 flex items-center gap-1.5">
                <span>⚡</span> Focus Areas
              </p>
              <ul className="text-xs text-ink-soft flex flex-col gap-1 list-disc list-inside">
                {summary.topWeaknesses.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, subtitle }: { label: string; value: string; subtitle?: string }) {
  return (
    <div>
      <p className="font-display text-xl font-semibold text-ink leading-none">{value}</p>
      <p className="font-mono text-[10px] uppercase tracking-wide text-ink-soft mt-1">
        {label}
      </p>
      {subtitle && <p className="font-mono text-[9px] text-ink-soft/70 mt-0.5">{subtitle}</p>}
    </div>
  );
}

