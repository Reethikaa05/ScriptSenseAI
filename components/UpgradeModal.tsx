"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function UpgradeModal({ isOpen, onClose }: Props) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full max-w-lg rounded-3xl p-7 shadow-2xl relative border border-gray-200 dark:border-gray-800"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-xl flex items-center justify-center shadow-md">
                👑
              </div>
              <div>
                <h2 className="font-display font-extrabold text-xl">Upgrade to Veda Pro</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Unlock unlimited AI assessment grading for your school</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-mono text-sm px-3 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Billing Switch */}
          <div className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-full my-4 text-xs font-semibold">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`flex-1 py-1.5 rounded-full transition-all ${
                billingCycle === "monthly" ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs" : "text-gray-500"
              }`}
            >
              Monthly Billing ($19/mo)
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`flex-1 py-1.5 rounded-full transition-all relative ${
                billingCycle === "yearly" ? "bg-orange-500 text-white shadow-xs font-bold" : "text-gray-500"
              }`}
            >
              Yearly (Save 25% · $15/mo)
            </button>
          </div>

          {/* Price Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 rounded-2xl text-white text-center shadow-md my-4">
            <p className="text-xs uppercase tracking-widest font-bold opacity-90">Veda Educator Pro</p>
            <p className="font-display font-extrabold text-3xl mt-1">
              {billingCycle === "yearly" ? "$15" : "$19"}
              <span className="text-sm font-normal"> / educator / month</span>
            </p>
            <p className="text-[11px] opacity-90 mt-1">Billed annually ($180/year) · Cancel anytime</p>
          </div>

          {/* Pro Feature Checklist */}
          <div className="flex flex-col gap-2.5 text-xs font-medium my-4">
            <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] flex items-center justify-center">✓</span>
              <span><strong>Unlimited AI Vision Extraction</strong> (Claude 3.5 Sonnet Vision)</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] flex items-center justify-center">✓</span>
              <span><strong>Advanced Cursive &amp; Scientific Equation OCR</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] flex items-center justify-center">✓</span>
              <span><strong>Export Printable PDF Reports &amp; CSV Marksheets</strong></span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-700 dark:text-gray-200">
              <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] flex items-center justify-center">✓</span>
              <span><strong>Multi-Teacher Classroom Roster Sync</strong></span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
            <button
              onClick={onClose}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs font-bold py-3 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>🚀 Start 14-Day Free Pro Trial</span>
              <span>→</span>
            </button>
            <p className="text-[10px] text-gray-400 text-center font-mono">
              No credit card required for 14-day trial · Instant activation
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
