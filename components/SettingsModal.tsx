"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teacherProfile } from "@/lib/seededData";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SettingsModal({ isOpen, onClose }: Props) {
  const [model, setModel] = useState("claude-sonnet-5");
  const [school, setSchool] = useState("Delhi Public School, Bokaro Steel City");
  const [gradingStrictness, setGradingStrictness] = useState("balanced");
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [aiNotifs, setAiNotifs] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative border border-gray-200"
        >
          <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm">
                ⚙
              </div>
              <h2 className="font-display font-bold text-lg text-gray-900">VedaAI Platform Settings</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 font-mono text-sm px-2.5 py-1 rounded-lg hover:bg-gray-100"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-4 text-sm text-gray-700 max-h-[70vh] overflow-y-auto pr-1">
            {/* User Profile Card */}
            <div className="bg-orange-50/60 border border-orange-200/60 p-3.5 rounded-2xl flex items-center gap-3.5">
              <img
                src={teacherProfile.avatarUrl}
                alt={teacherProfile.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
              />
              <div>
                <h3 className="font-display font-bold text-sm text-gray-900">{teacherProfile.name}</h3>
                <p className="text-xs text-gray-500">{teacherProfile.role}</p>
                <p className="text-[11px] text-orange-600 font-mono mt-0.5">{teacherProfile.email}</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-1">
                Institution Name
              </label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-sans text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-1">
                Claude Vision AI Model
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-sans text-sm bg-white"
              >
                <option value="claude-sonnet-5">Claude 3.5 Sonnet (Recommended)</option>
                <option value="claude-haiku-3.5">Claude 3.5 Haiku (Fast)</option>
                <option value="claude-opus-3">Claude 3 Opus (High Precision)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-900 mb-1">
                AI Grading Strictness
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["lenient", "balanced", "strict"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setGradingStrictness(s)}
                    className={`py-2 px-3 rounded-xl border text-xs capitalize transition-all ${
                      gradingStrictness === s
                        ? "border-orange-500 bg-orange-50 text-orange-600 font-semibold shadow-xs"
                        : "border-gray-200 hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <span className="block text-xs font-semibold text-gray-900">Notification Preferences</span>
              <label className="flex items-center justify-between text-xs text-gray-700 cursor-pointer">
                <span>AI Grading Completion Alerts</span>
                <input
                  type="checkbox"
                  checked={aiNotifs}
                  onChange={(e) => setAiNotifs(e.target.checked)}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
              </label>
              <label className="flex items-center justify-between text-xs text-gray-700 cursor-pointer">
                <span>Student Answer Sheet Submissions</span>
                <input
                  type="checkbox"
                  checked={emailNotifs}
                  onChange={(e) => setEmailNotifs(e.target.checked)}
                  className="rounded text-orange-500 focus:ring-orange-500"
                />
              </label>
            </div>
          </div>

          <div className="mt-5 border-t border-gray-100 pt-3 flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-sm"
            >
              Save Preferences
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

