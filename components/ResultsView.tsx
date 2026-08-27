"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PageImage, ProcessResult } from "@/lib/types";
import QuestionCard from "./QuestionCard";
import AnswerSheetViewer from "./AnswerSheetViewer";
import GradingSummary from "./GradingSummary";
import ExportModal from "./ExportModal";

type FilterStatus = "all" | "correct" | "partial" | "incorrect" | "ungraded";

export default function ResultsView({
  result,
  answerPages,
  onReset
}: {
  result: ProcessResult;
  answerPages: PageImage[];
  onReset: () => void;
}) {
  const { questions, answers, unmatchedAnswers, summary, isDemo } = result;

  const answerByQuestion = useMemo(() => {
    const map = new Map(answers.map((a) => [a.questionId, a]));
    return map;
  }, [answers]);

  const [selectedId, setSelectedId] = useState<string>(
    questions.find((q) => answerByQuestion.get(q.id)?.matched)?.id || questions[0]?.id
  );
  const [showSummary, setShowSummary] = useState(true);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const selectedQuestion = questions.find((q) => q.id === selectedId);
  const selectedAnswer = selectedId ? answerByQuestion.get(selectedId) : undefined;
  const [manualPage, setManualPage] = useState<number | null>(null);
  const activePage = manualPage ?? selectedAnswer?.page ?? 1;

  // Filter questions based on status and search query
  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const ans = answerByQuestion.get(q.id);
      const correctness = !ans || !ans.matched ? "ungraded" : ans.correctness;

      if (filterStatus !== "all" && correctness !== filterStatus) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesNumber = q.number.toLowerCase().includes(query);
        const matchesText = q.text.toLowerCase().includes(query);
        const matchesAnsText = (ans?.text || "").toLowerCase().includes(query);
        const matchesTopic = (q.topic || "").toLowerCase().includes(query);
        return matchesNumber || matchesText || matchesAnsText || matchesTopic;
      }

      return true;
    });
  }, [questions, answerByQuestion, filterStatus, searchQuery]);

  return (
    <div className="flex flex-col gap-6">
      {/* Top action bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-ink/10 pb-4">
        <div className="flex items-center gap-3">
          <h1 className="font-display font-bold text-2xl md:text-3xl text-ink">Assessment Results</h1>
          {isDemo && (
            <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-navy text-paper shadow-sm">
              ★ Interactive Demo Mode
            </span>
          )}
          <span className="font-mono text-xs text-ink-soft hidden sm:inline">
            {questions.length} questions · {answerPages.length} answer page{answerPages.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setIsExportOpen(true)}
            className="font-mono text-xs px-3.5 py-2 rounded-full border border-navy/30 text-navy bg-navy/5 hover:bg-navy hover:text-paper transition-all font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <span>↓</span> Export Report (PDF/CSV)
          </button>
          <button
            onClick={() => setShowSummary((s) => !s)}
            className="font-mono text-xs px-3.5 py-2 rounded-full border border-ink/15 hover:border-navy hover:text-navy transition-colors"
          >
            {showSummary ? "Hide" : "Show"} summary
          </button>
          <button
            onClick={onReset}
            className="font-mono text-xs px-3.5 py-2 rounded-full bg-red-pen text-paper hover:bg-red-dark transition-all shadow-sm font-semibold"
          >
            Grade another assessment
          </button>
        </div>
      </div>

      {showSummary && (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          <GradingSummary summary={summary} />
        </motion.div>
      )}

      {/* Main split grid: Question list (left) & Answer Sheet Canvas (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 items-start">
        <div className="flex flex-col gap-3 lg:sticky lg:top-6 lg:max-h-[calc(100vh-140px)] lg:overflow-y-auto pr-1 pb-4">
          <div className="flex flex-col gap-2 bg-[#F9FAFB] sticky top-0 z-20 pb-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <p className="font-sans text-xs font-bold text-gray-700">
                Extracted Questions (from question paper)
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="font-sans text-xs font-semibold text-gray-600 bg-white border border-gray-200 px-3 py-1 rounded-lg hover:bg-gray-50 shadow-2xs"
              >
                Expand All
              </button>
            </div>

            {/* Live Search input */}
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full font-mono text-xs px-3 py-1.5 rounded border border-ink/15 bg-paper focus:outline-none focus:border-navy transition-colors"
            />

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 font-mono text-[10px] overflow-x-auto pb-1">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-2 py-1 rounded-sm transition-colors ${
                  filterStatus === "all" ? "bg-navy text-paper font-semibold" : "bg-ink/5 text-ink-soft hover:bg-ink/10"
                }`}
              >
                All ({questions.length})
              </button>
              <button
                onClick={() => setFilterStatus("correct")}
                className={`px-2 py-1 rounded-sm transition-colors ${
                  filterStatus === "correct" ? "bg-green-margin text-paper font-semibold" : "bg-green-light text-green-margin hover:opacity-80"
                }`}
              >
                ✓ Correct
              </button>
              <button
                onClick={() => setFilterStatus("partial")}
                className={`px-2 py-1 rounded-sm transition-colors ${
                  filterStatus === "partial" ? "bg-amber-stamp text-paper font-semibold" : "bg-amber-light text-amber-stamp hover:opacity-80"
                }`}
              >
                ½ Partial
              </button>
              <button
                onClick={() => setFilterStatus("ungraded")}
                className={`px-2 py-1 rounded-sm transition-colors ${
                  filterStatus === "ungraded" ? "bg-ink/80 text-paper font-semibold" : "bg-ink/5 text-ink-soft hover:bg-ink/10"
                }`}
              >
                − Unanswered
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {filteredQuestions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                answer={answerByQuestion.get(q.id)}
                selected={q.id === selectedId}
                onSelect={() => {
                  setSelectedId(q.id);
                  setManualPage(null);
                }}
              />
            ))}

            {filteredQuestions.length === 0 && (
              <p className="text-xs font-mono text-ink-soft text-center py-8">
                No questions match your current search or filter criteria.
              </p>
            )}

            {unmatchedAnswers.length > 0 && (
              <div className="mt-4 border-t border-ink/10 pt-3">
                <p className="font-mono text-xs tracking-[0.18em] uppercase text-amber-stamp font-bold mb-2">
                  Unmatched Content / Rough Work ({unmatchedAnswers.length})
                </p>
                <div className="flex flex-col gap-2">
                  {unmatchedAnswers.map((a, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedId("");
                        setManualPage(a.page);
                      }}
                      className="paper-card rounded-sm p-3 text-left text-xs text-ink-soft hover:shadow-card transition-shadow border-amber-stamp/40"
                    >
                      <span className="font-mono text-amber-stamp font-semibold">Page {a.page}</span>
                      <p className="line-clamp-2 mt-1">{a.text || "Unlabelled handwritten content."}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side: Answer Sheet Canvas + Per-question AI Feedback drawer */}
        <div className="lg:sticky lg:top-6 flex flex-col gap-3 min-h-[500px]">
          <div className="h-[calc(100vh-280px)] min-h-[420px]">
            <AnswerSheetViewer
              pages={answerPages}
              activePage={activePage}
              onPageChange={(p) => setManualPage(p)}
              highlightBox={selectedAnswer?.matched ? selectedAnswer.boundingBox : null}
              highlightKey={selectedQuestion ? selectedQuestion.number : "2"}
              correctness={selectedAnswer?.correctness}
            />
          </div>

          {/* Selected question feedback & diagnostic drawer */}
          <AnimatePresence mode="wait">
            {selectedAnswer?.matched && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                key={selectedId}
                className="paper-card rounded-sm p-4 text-sm text-ink border-2 border-navy/20 bg-paper shadow-md"
              >
                <div className="flex items-center justify-between border-b border-ink/10 pb-2 mb-2">
                  <p className="font-mono text-xs uppercase tracking-wide text-navy font-bold flex items-center gap-1.5">
                    <span>💡</span> AI Evaluation & Student Feedback
                  </p>
                  {selectedAnswer.transcriptionConfidence !== undefined && (
                    <span className="font-mono text-[10px] text-ink-soft">
                      {selectedAnswer.transcriptionConfidence}% OCR accuracy
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-ink font-normal">{selectedAnswer.feedback}</p>

                {(selectedAnswer.strengths || selectedAnswer.improvements) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-ink/10 text-xs">
                    {selectedAnswer.strengths && (
                      <div className="bg-green-light/40 p-2.5 rounded text-ink">
                        <strong className="font-mono text-[10px] text-green-margin uppercase block mb-0.5">
                          ✓ Demonstrated Strength
                        </strong>
                        {selectedAnswer.strengths}
                      </div>
                    )}
                    {selectedAnswer.improvements && (
                      <div className="bg-amber-light/40 p-2.5 rounded text-ink">
                        <strong className="font-mono text-[10px] text-amber-stamp uppercase block mb-0.5">
                          ⚡ Improvement Suggestion
                        </strong>
                        {selectedAnswer.improvements}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {selectedId && selectedAnswer && !selectedAnswer.matched && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                key={selectedId + "-none"}
                className="paper-card rounded-sm p-4 text-sm text-ink-soft border-amber-stamp/40 bg-amber-light/20"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-amber-stamp font-bold mb-1">
                  − Unanswered Question
                </p>
                No handwritten response was detected for this question on the answer sheet.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Export PDF/CSV Modal */}
      <ExportModal
        result={result}
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />
    </div>
  );
}

