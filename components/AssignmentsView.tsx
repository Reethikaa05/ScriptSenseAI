"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  onStartExam: () => void;
};

export default function AssignmentsView({ onStartExam }: Props) {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const assignments = [
    {
      id: "1",
      title: "Class 10 Biology Unit Test — Photosynthesis & Life Processes",
      subject: "Science & Biology",
      dueDate: "Tomorrow, 5:00 PM",
      submitted: 28,
      total: 30,
      status: "Grading Ready",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "2",
      title: "Class 9 Physics Homework — Newton's Laws & Force Calculations",
      subject: "Physics",
      dueDate: "Aug 28, 2026",
      submitted: 32,
      total: 32,
      status: "Completed",
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      id: "3",
      title: "Grade 11 Chemistry Mid-Term — Chemical Thermodynamics",
      subject: "Chemistry",
      dueDate: "Sep 02, 2026",
      submitted: 18,
      total: 26,
      status: "In Progress",
      color: "bg-amber-50 text-amber-700 border-amber-200"
    }
  ];

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-200 pb-4">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-gray-900">Assignments &amp; Quizzes</h1>
          <p className="text-xs text-gray-500">Manage handwritten homework &amp; exam assignments</p>
        </div>

        <button
          onClick={() => setIsCreateOpen(true)}
          className="bg-gray-900 hover:bg-black text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2"
        >
          <span>+ Create New Assignment</span>
        </button>
      </div>

      {/* Assignment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {assignments.map((assignment) => {
          const pct = Math.round((assignment.submitted / assignment.total) * 100);
          return (
            <div
              key={assignment.id}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {assignment.subject}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${assignment.color}`}>
                    {assignment.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-gray-900 leading-snug">
                  {assignment.title}
                </h3>
                <p className="text-xs text-gray-400 font-mono mt-1">Due: {assignment.dueDate}</p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-1.5 text-gray-600">
                  <span>Submissions</span>
                  <span className="font-bold">{assignment.submitted} / {assignment.total} ({pct}%)</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${pct}%` }}
                    className="bg-orange-500 h-full rounded-full transition-all duration-500"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={onStartExam}
                    className="bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 font-sans text-xs font-semibold px-4 py-2 rounded-xl transition-colors shadow-2xs"
                  >
                    Grade Submissions (AI) →
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Assignment Modal */}
      <AnimatePresence>
        {isCreateOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative border border-gray-200"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <h3 className="font-display font-bold text-lg text-gray-900">Create New Assignment</h3>
                <button
                  onClick={() => setIsCreateOpen(false)}
                  className="text-gray-400 hover:text-gray-700 text-sm font-mono p-1"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">Assignment Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Unit 3 Biology - Genetics & DNA"
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 font-sans text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-900 mb-1">Subject / Class</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-gray-300 font-sans text-sm bg-white">
                    <option>Class 10 - Science &amp; Biology</option>
                    <option>Class 9 - Physics</option>
                    <option>Grade 11 - Chemistry</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2 rounded-xl text-gray-600 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsCreateOpen(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-semibold px-5 py-2 rounded-xl shadow-xs"
                >
                  Publish Assignment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
