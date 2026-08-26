"use client";

import { useState } from "react";
import NotificationPopover from "./NotificationPopover";
import { teacherProfile, seededNotifications, type NotificationItem } from "@/lib/seededData";
import { useTheme } from "@/lib/ThemeContext";

type Props = {
  activeNav: string;
  onOpenSettings: () => void;
  onSelectNav?: (nav: string) => void;
  onOpenHelp?: () => void;
  onBack?: () => void;
};

export default function TopHeader({
  activeNav,
  onOpenSettings,
  onSelectNav = () => {},
  onOpenHelp = () => {},
  onBack
}: Props) {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState<NotificationItem[]>(seededNotifications);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  function handleMarkAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  }

  function handleBackClick() {
    if (onBack) {
      onBack();
    } else {
      onSelectNav("home");
    }
  }

  return (
    <header className="h-14 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 flex items-center justify-between z-30 sticky top-0 transition-colors">
      {/* Left breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleBackClick}
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 text-lg transition-colors p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Go Back"
        >
          ←
        </button>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
          <span className="text-gray-400">📋</span>
          <span className="capitalize">{activeNav || "Exams"}</span>
        </div>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-3 relative">
        {/* ☀️ / 🌙 Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center text-sm transition-colors border border-gray-200 dark:border-gray-700 shadow-2xs"
          title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Help button - FIXED & WORKING */}
        <button
          onClick={onOpenHelp}
          className="w-8 h-8 rounded-full text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800 flex items-center justify-center text-sm font-bold transition-colors border border-gray-200 dark:border-gray-700 hover:border-orange-300 shadow-2xs"
          title="Help & Educator Documentation"
        >
          ?
        </button>

        {/* Notification Bell with indicator badge & Popover */}
        <div className="relative">
          <button
            onClick={() => setIsNotifOpen((o) => !o)}
            className="relative w-8 h-8 rounded-full text-gray-500 hover:bg-gray-100 flex items-center justify-center text-sm transition-colors border border-gray-200"
            title="Notifications"
          >
            🔔
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-white font-mono text-[9px] font-bold flex items-center justify-center border border-white">
                {unreadCount}
              </span>
            )}
          </button>

          <NotificationPopover
            isOpen={isNotifOpen}
            onClose={() => setIsNotifOpen(false)}
            notifications={notifications}
            onMarkAllRead={handleMarkAllRead}
            onSelectNav={onSelectNav}
          />
        </div>

        {/* AI Sparkle */}
        <button
          onClick={() => onSelectNav("toolkit")}
          className="w-8 h-8 rounded-full text-orange-500 bg-orange-50 hover:bg-orange-100 flex items-center justify-center text-sm transition-colors border border-orange-200"
          title="AI Teacher's Toolkit"
        >
          ✨
        </button>

        {/* User Profile Avatar with Real Photo */}
        <button
          onClick={onOpenSettings}
          className="flex items-center gap-2.5 pl-2 py-1 hover:opacity-80 transition-opacity"
        >
          <img
            src={teacherProfile.avatarUrl}
            alt={teacherProfile.name}
            className="w-8 h-8 rounded-full object-cover border border-gray-300 shadow-xs"
          />
          <span className="text-xs font-semibold text-gray-800 hidden sm:inline">
            {teacherProfile.name}
          </span>
          <span className="text-xs text-gray-400 hidden sm:inline">▼</span>
        </button>
      </div>
    </header>
  );
}

