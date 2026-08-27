"use client";

import { motion } from "framer-motion";

type Props = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  activeNav: string;
  onNavSelect: (nav: string) => void;
  onOpenSettings: () => void;
};

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  activeNav,
  onNavSelect,
  onOpenSettings
}: Props) {
  const navItems = [
    { id: "home", label: "Home", icon: "⊞" },
    { id: "classroom", label: "My Classroom", icon: "🏫" },
    { id: "assignments", label: "Assignments", icon: "📄" },
    { id: "exams", label: "Exams", icon: "📋" },
    { id: "library", label: "My Library", icon: "🕒" }
  ];

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen sticky top-0 left-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between p-3.5 z-30 shrink-0 select-none shadow-sm transition-colors"
    >
      {/* Top Section */}
      <div className="flex flex-col gap-5">
        {/* Header logo & collapse toggle */}
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2.5 overflow-hidden">
            {/* ScriptSenseAI Logo Box */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-display font-extrabold text-xl flex items-center justify-center shrink-0 shadow-md">
              S
            </div>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-display font-extrabold text-lg text-gray-900 dark:text-white tracking-tight"
              >
                ScriptSense<span className="text-orange-500">AI</span>
              </motion.span>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            className="w-7 h-7 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors font-mono text-xs"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>

        {/* AI Teacher's Toolkit button */}
        <button
          onClick={() => onNavSelect("toolkit")}
          className={`w-full flex items-center gap-2.5 p-2.5 rounded-full transition-all ${
            collapsed ? "justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white" : "bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white hover:shadow-md"
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 text-xs">
            ✨
          </div>
          {!collapsed && (
            <span className="font-mono text-xs font-semibold tracking-wide truncate">
              AI Teacher's Toolkit
            </span>
          )}
        </button>

        {/* Navigation list */}
        <nav className="flex flex-col gap-1 mt-2">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavSelect(item.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-sans text-sm transition-all ${
                  isActive
                    ? "bg-gray-100 font-semibold text-gray-900 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } ${collapsed ? "justify-center px-0" : ""}`}
                title={item.label}
              >
                <span className="text-base shrink-0">{item.icon}</span>
                {!collapsed && (
                  <span className="truncate">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile & Settings Section */}
      <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
        <button
          onClick={onOpenSettings}
          className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-sans text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors ${
            collapsed ? "justify-center px-0" : ""
          }`}
          title="Settings"
        >
          <span className="text-sm">⚙</span>
          {!collapsed && <span>Settings</span>}
        </button>

        {/* Live Vercel App Link */}
        <a
          href="https://script-sense-ai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-sans text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 shadow-sm transition-all ${
            collapsed ? "justify-center px-0" : ""
          }`}
          title="Live ScriptSenseAI App on Vercel"
        >
          <span className="text-sm">🌐</span>
          {!collapsed && <span className="font-bold">Live App</span>}
        </a>

        {/* ScriptSenseAI GitHub Repo Link */}
        <a
          href="https://github.com/Reethikaa05/ScriptSenseAI"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-sans text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600 transition-colors ${
            collapsed ? "justify-center px-0" : ""
          }`}
          title="ScriptSenseAI GitHub Repository"
        >
          <span className="text-sm">⭐</span>
          {!collapsed && <span className="font-semibold text-orange-600 dark:text-orange-400">GitHub Repo</span>}
        </a>

        {/* Delhi Public School Card */}
        <div
          className={`bg-gray-50 border border-gray-100 rounded-xl p-2.5 flex items-center gap-2.5 transition-all ${
            collapsed ? "justify-center p-1.5 bg-transparent border-0" : ""
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
            DPS
          </div>
          {!collapsed && (
            <div className="overflow-hidden text-left">
              <p className="text-xs font-semibold text-gray-900 truncate">Delhi Public School</p>
              <p className="text-[10px] text-gray-500 truncate">Bokaro Steel City</p>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
}
