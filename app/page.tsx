"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import SettingsModal from "@/components/SettingsModal";
import HomeView from "@/components/HomeView";
import ClassroomView from "@/components/ClassroomView";
import AssignmentsView from "@/components/AssignmentsView";
import LibraryView from "@/components/LibraryView";
import UploadZone from "@/components/UploadZone";
import ProcessingScreen from "@/components/ProcessingScreen";
import ResultsView from "@/components/ResultsView";
import { filesToPageImages } from "@/lib/pdfToImages";
import { sampleAnswerSheetPage, sampleProcessResult } from "@/lib/sampleData";
import type { PageImage, ProcessResult, ProcessingStage } from "@/lib/types";

import HelpModal from "@/components/HelpModal";
import UpgradeModal from "@/components/UpgradeModal";
import { ThemeProvider } from "@/lib/ThemeContext";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  const [questionFiles, setQuestionFiles] = useState<File[]>([]);
  const [answerFiles, setAnswerFiles] = useState<File[]>([]);
  const [stage, setStage] = useState<ProcessingStage>("idle");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ProcessResult | null>(null);
  const [answerPages, setAnswerPages] = useState<PageImage[]>([]);

  const canSubmit = questionFiles.length > 0 && answerFiles.length > 0 && stage === "idle";

  async function handleSubmit() {
    setError(null);
    try {
      setSidebarCollapsed(true);
      setStage("uploading");
      const [qPages, aPages] = await Promise.all([
        filesToPageImages(questionFiles),
        filesToPageImages(answerFiles)
      ]);
      setAnswerPages(aPages);

      setStage("extracting-questions");
      await new Promise((r) => setTimeout(r, 600));
      setStage("extracting-answers");

      const res = await fetch("/api/process", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionPages: qPages, answerPages: aPages })
      });

      setStage("mapping");
      await new Promise((r) => setTimeout(r, 400));
      setStage("grading");

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Processing failed.");
      }

      setResult(data as ProcessResult);
      setStage("done");
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
      setStage("error");
    }
  }

  async function handleLoadDemo() {
    setError(null);
    setActiveNav("exams");
    setSidebarCollapsed(true);
    setStage("uploading");
    await new Promise((r) => setTimeout(r, 400));
    setStage("extracting-questions");
    await new Promise((r) => setTimeout(r, 500));
    setStage("extracting-answers");
    await new Promise((r) => setTimeout(r, 500));
    setStage("mapping");
    await new Promise((r) => setTimeout(r, 400));
    setStage("grading");
    await new Promise((r) => setTimeout(r, 400));

    setAnswerPages([sampleAnswerSheetPage]);
    setResult(sampleProcessResult);
    setStage("done");
  }

  function reset() {
    setQuestionFiles([]);
    setAnswerFiles([]);
    setResult(null);
    setAnswerPages([]);
    setError(null);
    setStage("idle");
    setSidebarCollapsed(false);
  }

  function openExamWorkflow() {
    setActiveNav("exams");
    reset();
  }

  return (
    <ThemeProvider>
      <div className="flex font-sans antialiased">
        {/* VedaAI Navigation Sidebar */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
          activeNav={activeNav}
          onNavSelect={(nav) => {
            setActiveNav(nav);
            if (nav !== "exams") {
              setSidebarCollapsed(false);
            }
          }}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopHeader
          activeNav={activeNav}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onSelectNav={setActiveNav}
          onOpenHelp={() => setIsHelpOpen(true)}
        />

        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto">
          {activeNav === "home" ? (
            <HomeView
              onStartExam={openExamWorkflow}
              onSelectNav={setActiveNav}
              onOpenUpgrade={() => setIsUpgradeOpen(true)}
            />
          ) : activeNav === "classroom" ? (
            <ClassroomView onStartExam={openExamWorkflow} />
          ) : activeNav === "assignments" ? (
            <AssignmentsView onStartExam={openExamWorkflow} />
          ) : activeNav === "library" ? (
            <LibraryView onStartExam={openExamWorkflow} />
          ) : activeNav === "exams" || activeNav === "toolkit" ? (
            stage === "idle" || stage === "error" ? (
              <div className="flex flex-col items-center justify-center max-w-4xl mx-auto pt-6">
                {/* Figma Upload Header */}
                <div className="text-center flex flex-col items-center gap-3">
                  <h1 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                    Upload{" "}
                    <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-2xl border border-orange-200 shadow-2xs">
                      Question Paper &amp; Answer Sheets
                    </span>
                  </h1>
                  <p className="font-sans text-sm text-gray-500 font-medium">
                    Upload both files to get started
                  </p>

                  {/* Central Teacher Avatar with Glow Ring matching Figma */}
                  <div className="my-6 relative w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-orange-400/20 animate-ping opacity-75" />
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-orange-400/40 animate-spin-slow" />
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-1 shadow-lg flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl shadow-inner">
                        👩‍🏫
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upload Cards Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  <UploadZone
                    label="Upload Question Paper"
                    eyebrow="Question Paper (PDF / Image)"
                    accentColor="navy"
                    files={questionFiles}
                    onChange={setQuestionFiles}
                  />
                  <UploadZone
                    label="Upload Answer Sheet"
                    eyebrow="Handwritten Answer Sheet"
                    accentColor="red"
                    files={answerFiles}
                    onChange={setAnswerFiles}
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-xs font-mono text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 w-full text-center"
                  >
                    {error}
                  </motion.p>
                )}

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 flex-wrap justify-center">
                    <button
                      disabled={!canSubmit}
                      onClick={handleSubmit}
                      className={`font-sans font-semibold text-sm px-8 py-3.5 rounded-full transition-all shadow-md flex items-center gap-2 ${
                        canSubmit
                          ? "bg-gray-900 text-white hover:bg-black hover:shadow-lg cursor-pointer"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <span>Start Mapping</span>
                      <span>→</span>
                    </button>

                    <button
                      onClick={handleLoadDemo}
                      className="font-sans font-semibold text-xs px-5 py-3.5 rounded-full border border-orange-400/60 text-orange-600 bg-orange-50 hover:bg-orange-500 hover:text-white transition-all shadow-xs"
                    >
                      ★ Try Sample Demo (Instant 1-Click)
                    </button>
                  </div>

                  <p className="text-xs font-sans text-gray-400">
                    Once both files are uploaded, you&rsquo;ll be able to map answers with questions
                  </p>
                </div>
              </div>
            ) : stage !== "done" ? (
              <ProcessingScreen stage={stage} />
            ) : result ? (
              <ResultsView result={result} answerPages={answerPages} onReset={reset} />
            ) : null
          ) : null}
        </main>
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Help & Educator Documentation Modal */}
      <HelpModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />

      {/* Veda Pro Upgrade Modal */}
      <UpgradeModal
        isOpen={isUpgradeOpen}
        onClose={() => setIsUpgradeOpen(false)}
      />
    </div>
    </ThemeProvider>
  );
}



