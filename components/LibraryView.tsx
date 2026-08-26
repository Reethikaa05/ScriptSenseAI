"use client";

import { useState } from "react";
import { seededLibraryItems } from "@/lib/seededData";

type Props = {
  onStartExam: () => void;
};

export default function LibraryView({ onStartExam }: Props) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const filteredItems = seededLibraryItems
    .filter((item) => {
      const matchSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase());
      const matchCategory = categoryFilter === "all" || item.category === categoryFilter;
      const matchSubject = subjectFilter === "all" || item.subject === subjectFilter;
      return matchSearch && matchCategory && matchSubject;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return b.date.localeCompare(a.date);
      if (sortBy === "downloads") return b.downloads - a.downloads;
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-200 pb-4">
        <div>
          <h1 className="font-display font-extrabold text-2xl text-gray-900">My Exam &amp; Question Bank Library</h1>
          <p className="text-xs text-gray-500">Repository of past question papers, answer sheets &amp; markschemes</p>
        </div>

        <button
          onClick={onStartExam}
          className="bg-orange-500 hover:bg-orange-600 text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2"
        >
          <span>✨ Grade Assessment</span>
        </button>
      </div>

      {/* Search & Filter bar */}
      <div className="flex flex-col gap-3 bg-white p-4 rounded-3xl border border-gray-200 shadow-xs">
        <div className="flex items-center gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Search papers, students, or topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 font-sans text-xs px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
          />

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span className="font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-xl border border-gray-200 bg-white font-sans text-xs"
            >
              <option value="newest">Newest First</option>
              <option value="downloads">Most Downloaded</option>
              <option value="title">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Category Tabs & Subject Filters */}
        <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-semibold text-gray-400 mr-1">Type:</span>
            {["all", "Question Paper", "Student Answer Sheet", "Markscheme Template"].map((c) => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-3 py-1 rounded-lg font-sans text-xs capitalize transition-colors shrink-0 ${
                  categoryFilter === c
                    ? "bg-gray-900 text-white font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-semibold text-gray-400 mr-1">Subject:</span>
            {["all", "Biology", "Physics", "Chemistry"].map((s) => (
              <button
                key={s}
                onClick={() => setSubjectFilter(s)}
                className={`px-2.5 py-1 rounded-lg font-sans text-xs capitalize transition-colors ${
                  subjectFilter === s
                    ? "bg-orange-500 text-white font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Library Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={onStartExam}
            className="bg-white rounded-3xl p-5 border border-gray-200 shadow-xs hover:shadow-md hover:border-gray-300 transition-all cursor-pointer flex flex-col justify-between gap-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[10px] uppercase font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono text-gray-400">{item.format} · {item.pages}</span>
              </div>

              <h3 className="font-display font-bold text-base text-gray-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">Author: {item.author} · Added: {item.date}</p>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                  #{item.subject}
                </span>
                <span className="font-mono text-[10px] text-emerald-600 font-bold">
                  {item.score}
                </span>
              </div>

              <span className="text-xs font-semibold text-gray-900 hover:text-orange-600">
                Open in AI Viewer →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

