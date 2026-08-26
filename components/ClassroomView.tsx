"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { seededStudents, type StudentProfile } from "@/lib/seededData";

type Props = {
  onStartExam: () => void;
};

export default function ClassroomView({ onStartExam }: Props) {
  const [selectedClass, setSelectedClass] = useState("class10");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);

  const classes = [
    { id: "class10", name: "Class 10 - Science & Biology", school: "Delhi Public School", count: 30 },
    { id: "class9", name: "Class 9 - Physics Fundamentals", school: "Delhi Public School", count: 32 },
    { id: "class11", name: "Grade 11 - Advanced Physiology", school: "Delhi Public School", count: 26 }
  ];

  const filteredStudents = seededStudents.filter((s) => {
    if (filterStatus === "all") return true;
    return s.status === filterStatus;
  });

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-200 pb-4">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-gray-900">My Classroom Roster</h1>
          <p className="text-xs text-gray-500">Delhi Public School · Bokaro Steel City</p>
        </div>

        <button
          onClick={onStartExam}
          className="bg-orange-500 hover:bg-orange-600 text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2"
        >
          <span>✨ Grade Class Assessment</span>
        </button>
      </div>

      {/* Analytics Summary Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase">Class Average</p>
            <p className="font-display font-extrabold text-xl text-gray-900 mt-0.5">81.2%</p>
          </div>
          <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 font-bold text-sm flex items-center justify-center">
            📈
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase">Attendance Rate</p>
            <p className="font-display font-extrabold text-xl text-gray-900 mt-0.5">96.5%</p>
          </div>
          <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 font-bold text-sm flex items-center justify-center">
            👥
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase">Handwriting Legibility</p>
            <p className="font-display font-extrabold text-xl text-emerald-600 mt-0.5">97.8%</p>
          </div>
          <span className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 font-bold text-sm flex items-center justify-center">
            ✨
          </span>
        </div>
      </div>

      {/* Class Selector & Performance Filters */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {classes.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedClass(c.id)}
              className={`px-4 py-2 rounded-xl font-sans text-xs font-semibold transition-all shrink-0 ${
                selectedClass === c.id
                  ? "bg-gray-900 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>

        {/* Performance Filter Buttons */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-gray-200 text-xs">
          {["all", "Top Performer", "Satisfactory", "Needs Review"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1 rounded-lg capitalize transition-colors ${
                filterStatus === st
                  ? "bg-orange-500 text-white font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Roster Table */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <p className="font-sans text-xs font-bold text-gray-700">
            Student Roster ({filteredStudents.length})
          </p>
          <span className="text-[11px] text-gray-400 font-mono">Class Avg: 81.2%</span>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              onClick={() => setSelectedStudent(student)}
              className="p-4 hover:bg-gray-50/80 transition-colors flex items-center justify-between flex-wrap gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={student.avatarUrl}
                  alt={student.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-xs"
                />
                <div>
                  <p className="font-sans font-semibold text-sm text-gray-900">{student.name}</p>
                  <p className="text-xs text-gray-400 font-mono">Roll: {student.roll} · {student.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-mono text-sm font-bold text-gray-900">{student.score}</p>
                  <p className="text-[10px] text-gray-400 font-mono">{student.pct}% score</p>
                </div>

                <div className="text-right hidden sm:block">
                  <p className="font-mono text-xs font-semibold text-emerald-600">{student.legibility}</p>
                  <p className="text-[10px] text-gray-400 font-mono">OCR Legibility</p>
                </div>

                <span
                  className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full ${
                    student.pct >= 80
                      ? "bg-emerald-100 text-emerald-700"
                      : student.pct >= 60
                      ? "bg-amber-100 text-amber-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {student.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Detail Modal Drawer */}
      <AnimatePresence>
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl relative border border-gray-200"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedStudent.avatarUrl}
                    alt={selectedStudent.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
                  />
                  <div>
                    <h3 className="font-display font-bold text-base text-gray-900">{selectedStudent.name}</h3>
                    <p className="text-xs text-gray-400 font-mono">Roll: {selectedStudent.roll} · {selectedStudent.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="text-gray-400 hover:text-gray-700 text-sm font-mono p-1"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-3 text-xs text-gray-700">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex justify-between">
                  <span>Recent Assessment Score:</span>
                  <strong className="font-mono text-gray-900">{selectedStudent.score} ({selectedStudent.pct}%)</strong>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex justify-between">
                  <span>Handwriting OCR Legibility:</span>
                  <strong className="font-mono text-emerald-600">{selectedStudent.legibility}</strong>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="block font-semibold mb-1 text-gray-900">Key Strengths:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedStudent.strengths.map((st, i) => (
                      <span key={i} className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md font-mono text-[10px]">
                        ✓ {st}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedStudent.weaknesses.length > 0 && (
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <span className="block font-semibold mb-1 text-gray-900">Areas for Improvement:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {selectedStudent.weaknesses.map((wk, i) => (
                        <span key={i} className="bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md font-mono text-[10px]">
                          ! {wk}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedStudent(null);
                    onStartExam();
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold px-4 py-2 rounded-xl shadow-xs"
                >
                  Grade Student Answer Sheet →
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

