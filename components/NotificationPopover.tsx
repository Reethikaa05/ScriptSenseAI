"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { NotificationItem } from "@/lib/seededData";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
  onSelectNav: (nav: string) => void;
};

export default function NotificationPopover({
  isOpen,
  onClose,
  notifications,
  onMarkAllRead,
  onSelectNav
}: Props) {
  if (!isOpen) return null;

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-auto" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-16 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden select-none"
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-sm text-gray-900">Notifications</h3>
              {unreadCount > 0 && (
                <span className="font-mono text-[10px] bg-orange-500 text-white font-bold px-2 py-0.5 rounded-full">
                  {unreadCount} new
                </span>
              )}
            </div>

            {unreadCount > 0 && (
              <button
                onClick={onMarkAllRead}
                className="text-xs font-sans text-orange-600 hover:text-orange-700 font-semibold"
              >
                Mark all read
              </button>
            )}
          </div>

          {/* Notification List */}
          <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
            {notifications.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (item.linkNav) onSelectNav(item.linkNav);
                  onClose();
                }}
                className={`p-3.5 hover:bg-gray-50 transition-colors cursor-pointer flex items-start gap-3 ${
                  item.unread ? "bg-orange-50/30" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm shadow-xs ${
                    item.type === "ai"
                      ? "bg-orange-100 text-orange-600"
                      : item.type === "submission"
                      ? "bg-blue-100 text-blue-600"
                      : item.type === "alert"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.type === "ai"
                    ? "✨"
                    : item.type === "submission"
                    ? "📄"
                    : item.type === "alert"
                    ? "📊"
                    : "⚙"}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <p className={`text-xs font-semibold truncate ${item.unread ? "text-gray-900" : "text-gray-700"}`}>
                      {item.title}
                    </p>
                    <span className="text-[10px] font-mono text-gray-400 shrink-0">{item.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-snug mt-0.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-2.5 bg-gray-50 border-t border-gray-100 text-center">
            <button
              onClick={onClose}
              className="text-xs font-sans text-gray-500 hover:text-gray-800 font-medium"
            >
              Close Notifications
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
