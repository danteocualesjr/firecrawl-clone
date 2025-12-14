"use client";

import { useState } from "react";
import { ArrowRight, X, Globe } from "lucide-react";

type ActionType = "scrape" | "search" | "new" | "map" | "crawl";

export default function Playground() {
  const [activeAction, setActiveAction] = useState<ActionType>("scrape");
  const [url, setUrl] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* URL Input and Submit Button */}
      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Globe size={16} className="text-gray-400 opacity-50" />
          </div>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full bg-white border border-gray-300 rounded-lg pl-12 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 items-center">
        <button
          onClick={() => setActiveAction("scrape")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeAction === "scrape"
              ? "bg-gray-200 text-gray-900"
              : "bg-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Scrape
        </button>
        <button
          onClick={() => setActiveAction("search")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeAction === "search"
              ? "bg-gray-200 text-gray-900"
              : "bg-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Search
        </button>
        <button
          onClick={() => setActiveAction("new")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeAction === "new"
              ? "bg-gray-200 text-gray-900"
              : "bg-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          New
        </button>
        <button
          onClick={() => setActiveAction("map")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeAction === "map"
              ? "bg-gray-200 text-gray-900"
              : "bg-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Map
        </button>
        <button
          onClick={() => setActiveAction("crawl")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
            activeAction === "crawl"
              ? "bg-gray-200 text-gray-900"
              : "bg-transparent text-gray-600 hover:text-gray-900"
          }`}
        >
          Crawl
          <X size={14} className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
