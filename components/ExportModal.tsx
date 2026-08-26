"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ProcessResult } from "@/lib/types";

type Props = {
  result: ProcessResult;
  isOpen: boolean;
  onClose: () => void;
};

export default function ExportModal({ result, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  function exportCSV() {
    const headers = [
      "Question ID",
      "Question Number",
      "Question Text",
      "Max Marks",
      "Marks Awarded",
      "Status",
      "Transcribed Student Handwriting",
      "AI Feedback",
      "Page Number",
      "Key Concepts"
    ];

    const rows = result.questions.map((q) => {
      const a = result.answers.find((ans) => ans.questionId === q.id);
      return [
        `"${q.id}"`,
        `"${q.number}"`,
        `"${q.text.replace(/"/g, '""')}"`,
        q.maxMarks ?? "N/A",
        a?.marksAwarded ?? 0,
        a?.matched ? a.correctness : "unanswered",
        `"${(a?.text || "").replace(/"/g, '""')}"`,
        `"${(a?.feedback || "").replace(/"/g, '""')}"`,
        a?.page || q.page,
        `"${(a?.conceptsIdentified || []).join(", ").replace(/"/g, '""')}"`
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Markscheme_Grading_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function printReport() {
    window.print();
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="paper-card w-full max-w-lg rounded-md p-6 shadow-2xl relative border-2 border-navy/20"
        >
          <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-pen" />
              <h2 className="font-display font-semibold text-lg text-ink">Export Assessment Report</h2>
            </div>
            <button
              onClick={onClose}
              className="text-ink-soft hover:text-ink font-mono text-sm px-2 py-1 rounded-sm hover:bg-ink/5"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-ink-soft mb-6 leading-relaxed">
            Choose your preferred export format for this graded assessment session:
          </p>

          <div className="flex flex-col gap-4">
            <button
              onClick={printReport}
              className="group flex items-center justify-between p-4 rounded-sm border border-ink/15 hover:border-navy hover:bg-navy/5 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy/10 text-navy flex items-center justify-center font-mono font-bold">
                  PDF
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-ink group-hover:text-navy">
                    Printable PDF Report
                  </p>
                  <p className="text-xs text-ink-soft">
                    Formatted document with per-question marks, feedback & summary.
                  </p>
                </div>
              </div>
              <span className="font-mono text-sm text-navy group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            <button
              onClick={exportCSV}
              className="group flex items-center justify-between p-4 rounded-sm border border-ink/15 hover:border-green-margin hover:bg-green-light/20 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-light text-green-margin flex items-center justify-center font-mono font-bold">
                  CSV
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-ink group-hover:text-green-margin">
                    CSV / Excel Data Sheet
                  </p>
                  <p className="text-xs text-ink-soft">
                    Raw structured data table compatible with Excel, Google Sheets, & LMS.
                  </p>
                </div>
              </div>
              <span className="font-mono text-sm text-green-margin group-hover:translate-x-1 transition-transform">
                ↓
              </span>
            </button>
          </div>

          <div className="mt-6 border-t border-ink/10 pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="font-mono text-xs px-4 py-2 rounded-sm border border-ink/15 text-ink-soft hover:bg-ink/5"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
