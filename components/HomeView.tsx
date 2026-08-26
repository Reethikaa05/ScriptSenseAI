"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { seededStudents, type StudentProfile } from "@/lib/seededData";

type Props = {
  onStartExam: () => void;
  onSelectNav: (nav: string) => void;
  onOpenUpgrade?: () => void;
};

export default function HomeView({ onStartExam, onSelectNav, onOpenUpgrade = () => {} }: Props) {
  const [timeFilter, setTimeFilter] = useState<"D" | "W" | "M">("D");
  const [insightIndex, setInsightIndex] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedRecentStudent, setSelectedRecentStudent] = useState<StudentProfile | null>(null);
  const [isEvaluationAnalyticsOpen, setIsEvaluationAnalyticsOpen] = useState(false);

  const heroSlides = [
    {
      badge: "✨ AI Vision Platform",
      title: "Your AI Assessment Workflow Starts Here!",
      subtitle: "Join 1.2K+ Educators in Delhi Public School Network.",
      cta: "Start AI Paper Grading",
      img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
    },
    {
      badge: "📝 Cursive Handwriting OCR",
      title: "98.6% Accuracy for Handwritten Answer Mapping!",
      subtitle: "Transcribes cursive equations & maps questions even out of sequence.",
      cta: "Try Handwriting Vision",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80"
    },
    {
      badge: "📊 Holistic Analytics",
      title: "Instant Pedagogical Diagnostic Feedback & Reports!",
      subtitle: "Generate printable PDF evaluation reports & CSV marksheets in 1 click.",
      cta: "View Diagnostic Reports",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Auto-advance hero slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const activeSlide = heroSlides[currentSlide];

  const insights = [
    {
      title: "Handwriting OCR Legibility Benchmark",
      badge: "✨ OCR Accuracy",
      desc: "Handwriting legibility across Class 10 Biology answer sheets reached 97.8% confidence score.",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Experience the Power of Instant Diagnostic AI Feedback",
      badge: "✨ AI Insight",
      desc: "Class 10 Biology students showed +18% higher mastery in photosynthesis equations following step-by-step feedback.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Anatomical Diagram Labeling Accuracy",
      badge: "✨ Diagram AI",
      desc: "Student diagram accuracy for Nephron and Digestive System increased by 24% after visual mapping.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const currentInsight = insights[(insightIndex - 1) % insights.length];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto font-sans select-none">
      {/* Welcome Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight">
            Hi, Madhur!
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Let&rsquo;s look at your daily classroom assessment activity overview.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for classroom metrics..."
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs px-4 py-2 pl-9 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-orange-500/20 text-gray-900 dark:text-white"
            />
            <span className="absolute left-3 top-2 text-gray-400 text-xs">🔍</span>
          </div>

          <button
            onClick={onOpenUpgrade}
            className="bg-gray-900 dark:bg-orange-500 hover:bg-black dark:hover:bg-orange-600 text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2 transition-transform hover:scale-105"
          >
            <span>👑 Upgrade to Veda Pro</span>
          </button>
        </div>
      </div>

      {/* TOP SECTION: Interactive Real Image Slideshow Banner (Left 65%) + Activity Widget (Right 35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Interactive Image Slideshow Hero Banner */}
        <div className="lg:col-span-8 relative bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-7 text-white overflow-hidden shadow-lg flex flex-col justify-between min-h-[330px]">
          {/* Animated Background Real Photo Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.85, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 bg-cover bg-center brightness-105 contrast-105"
              style={{ backgroundImage: `url('${activeSlide.img}')` }}
            />
          </AnimatePresence>
          {/* Subtle gradient backdrop for text legibility while keeping image crisp & bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/40 to-transparent" />

          {/* Top Hero Content */}
          <div className="relative z-10 max-w-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-mono text-[10px] font-bold bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase tracking-wider border border-white/30">
                  {activeSlide.badge}
                </span>

                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight tracking-tight mt-3">
                  {activeSlide.title}
                </h2>
                <p className="text-xs text-white/90 font-medium mt-2 leading-relaxed">
                  {activeSlide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Chevron Navigation Buttons */}
          <button
            onClick={() => setCurrentSlide((s) => (s > 0 ? s - 1 : heroSlides.length - 1))}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white font-mono flex items-center justify-center backdrop-blur-xs transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((s) => (s + 1) % heroSlides.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white font-mono flex items-center justify-center backdrop-blur-xs transition-colors"
          >
            ›
          </button>

          {/* Bottom Hero Controls & Slide Indicator Dots */}
          <div className="relative z-10 mt-6 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/20">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">1.2K+ Educators</p>
                  <p className="text-[10px] text-white/80">Delhi Public School Network</p>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 ml-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === i ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={onStartExam}
              className="bg-gray-900 hover:bg-black text-white font-sans font-semibold text-xs px-6 py-3 rounded-full transition-all shadow-md flex items-center gap-2"
            >
              <span>{activeSlide.cta}</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Activity Widget Card */}
        <div className="lg:col-span-4 bg-sky-500 text-white rounded-3xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base text-white">Class Evaluation Status</h3>
                <p className="text-xs text-sky-100 mt-0.5">
                  Daily target paper grading &amp; legibility focus.
                </p>
              </div>
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 bg-lime-400 text-gray-900 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-xs">
              <span>Well Done</span>
              <span>👍</span>
            </div>

            <div className="grid grid-cols-8 gap-1.5 mt-6">
              {[80, 100, 60, 100, 90, 100, 75, 100, 100, 85, 100, 95, 100, 70, 90, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ opacity: h / 100 }}
                  className="h-10 bg-white rounded-md shadow-2xs transition-opacity"
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between border-t border-sky-400/40 pt-4">
            <div className="flex items-center gap-1 bg-sky-600/60 p-1 rounded-full text-xs font-bold">
              {(["D", "W", "M"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeFilter(t)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    timeFilter === t ? "bg-white text-sky-600 shadow-xs" : "text-white/80 hover:text-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="text-right">
              <p className="font-display font-extrabold text-3xl leading-none text-white">
                {timeFilter === "D" ? "98.6%" : timeFilter === "W" ? "96.4%" : "99.1%"}
              </p>
              <p className="text-[11px] text-sky-100 font-mono mt-1">/ AI Accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: AI Insight Spotlight */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  className="w-6 h-6 rounded-full border border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  className="w-6 h-6 rounded-full border border-white object-cover"
                />
              </div>
              <span className="font-mono text-[10px] font-bold bg-orange-100 text-orange-600 px-2.5 py-0.5 rounded-full">
                {currentInsight.badge}
              </span>
            </div>

            <h3 className="font-display font-bold text-base text-gray-900 dark:text-white leading-snug">
              {currentInsight.title}
            </h3>

            <div className="mt-4 bg-gray-50 dark:bg-gray-800/60 p-3.5 rounded-2xl border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {currentInsight.desc}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
            <span className="font-mono text-xs text-gray-400 font-bold">
              {insightIndex} / 5
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setInsightIndex((i) => (i > 1 ? i - 1 : 5))}
                className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 font-mono text-xs flex items-center justify-center"
              >
                ‹
              </button>
              <button
                onClick={() => setInsightIndex((i) => (i < 5 ? i + 1 : 1))}
                className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 font-mono text-xs flex items-center justify-center"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Subject Performance Breakdown Bar Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">🔥</span>
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white">
                  Classroom Marks
                </h3>
              </div>
              <div className="text-right">
                <span className="font-display font-extrabold text-lg text-gray-900 dark:text-white">20.40</span>
                <span className="text-[10px] text-gray-400 font-mono"> / 25 Kcal</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5">Average score per student</p>

            <div className="mt-5 flex items-end justify-between gap-1.5 h-24 pt-2">
              {[80, 100, 65, 90, 85, 95, 70, 100, 88, 92, 78, 96].map((score, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${score}%` }}
                    transition={{ duration: 0.6, delay: i * 0.03 }}
                    className={`w-full rounded-full ${
                      score >= 90
                        ? "bg-lime-500"
                        : score >= 75
                        ? "bg-lime-400"
                        : "bg-amber-400"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100 dark:border-gray-800 text-center font-mono text-xs">
            <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl">
              <p className="font-bold text-gray-900 dark:text-white">5</p>
              <p className="text-[9px] text-gray-400 uppercase">Correct</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl">
              <p className="font-bold text-amber-600">2</p>
              <p className="text-[9px] text-gray-400 uppercase">Partial</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-xl">
              <p className="font-bold text-rose-600">1</p>
              <p className="text-[9px] text-gray-400 uppercase">Skipped</p>
            </div>
          </div>
        </div>

        {/* Card 3: Grade Distribution Wave Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between gap-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-base">📈</span>
                <h3 className="font-display font-bold text-base text-gray-900 dark:text-white">
                  Grade Curve
                </h3>
              </div>
              <div className="text-right">
                <span className="font-display font-extrabold text-lg text-gray-900 dark:text-white">82.0%</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-0.5">Target range is 75% - 95%</p>

            <div className="mt-4 h-24 relative flex items-center justify-center">
              <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                <path
                  d="M 0 70 Q 75 10 150 50 T 300 30"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 85 Q 75 30 150 65 T 300 45"
                  fill="none"
                  stroke="#7DD3FC"
                  strokeWidth="2.5"
                  strokeDasharray="4,4"
                  opacity="0.7"
                />
                <circle cx="150" cy="50" r="6" fill="#0284C7" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="flex items-end justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
            <div>
              <p className="font-display font-extrabold text-4xl text-gray-900 dark:text-white">82<span className="text-sm font-bold font-sans"> %</span></p>
              <p className="text-[10px] text-gray-400 font-mono">Class Median Score</p>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                Keep it up!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* NEW RECENT ACTIVITY STREAM SECTION */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs mt-2">
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
          <div>
            <h2 className="font-display font-bold text-lg text-gray-900 dark:text-white">
              ⚡ Recent Student Evaluations &amp; Submissions
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Live stream of handwritten answer sheets graded by VedaAI
            </p>
          </div>

          <button
            onClick={() => onSelectNav("classroom")}
            className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline"
          >
            View Full Class Roster →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {seededStudents.slice(0, 4).map((student, i) => (
            <div
              key={student.id}
              onClick={() => setSelectedRecentStudent(student)}
              className="p-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40 hover:bg-gray-100/80 dark:hover:bg-gray-800 transition-all cursor-pointer flex items-center justify-between flex-wrap gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={student.avatarUrl}
                  alt={student.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 dark:border-gray-700 shadow-xs"
                />
                <div>
                  <p className="font-sans font-semibold text-sm text-gray-900 dark:text-white">
                    {student.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                    {student.recentExam} · {i === 0 ? "10m ago" : i === 1 ? "45m ago" : `${i + 1}h ago`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-mono text-sm font-bold text-gray-900 dark:text-white">{student.score}</p>
                  <p className="text-[10px] text-emerald-600 font-mono">{student.legibility} OCR</p>
                </div>

                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 px-3 py-1 rounded-full">
                  Preview →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Student Score Preview Modal Drawer */}
      <AnimatePresence>
        {selectedRecentStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-gray-900 w-full max-w-md rounded-2xl p-6 shadow-2xl relative border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
            >
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedRecentStudent.avatarUrl}
                    alt={selectedRecentStudent.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
                  />
                  <div>
                    <h3 className="font-display font-bold text-base">{selectedRecentStudent.name}</h3>
                    <p className="text-xs text-gray-500 font-mono">Roll: {selectedRecentStudent.roll} · {selectedRecentStudent.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRecentStudent(null)}
                  className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm font-mono p-1"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-3 text-xs">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 flex justify-between">
                  <span>Graded Assessment Score:</span>
                  <strong className="font-mono text-emerald-600">{selectedRecentStudent.score} ({selectedRecentStudent.pct}%)</strong>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 flex justify-between">
                  <span>Handwriting OCR Legibility:</span>
                  <strong className="font-mono text-emerald-500">{selectedRecentStudent.legibility}</strong>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                  <span className="block font-semibold mb-1">Key Strengths:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedRecentStudent.strengths.map((st, i) => (
                      <span key={i} className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md font-mono text-[10px]">
                        ✓ {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedRecentStudent(null);
                    onStartExam();
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold px-4 py-2 rounded-xl shadow-xs"
                >
                  Open Answer Mapping Canvas →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
