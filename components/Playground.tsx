"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

type TabType = "scrape" | "search" | "crawl";
type FormatType = "json" | "markdown";

export default function Playground() {
  const [activeTab, setActiveTab] = useState<TabType>("scrape");
  const [format, setFormat] = useState<FormatType>("json");
  const [url, setUrl] = useState("firecrawl.dev");
  const [isScraping, setIsScraping] = useState(false);

  const exampleJson = `[
  {
    "url": "https://firecrawl.dev",
    "markdown": "# Firecrawl\\n\\nFirecrawl is a powerful web scraping...",
    "json": { "title": "Firecrawl", "docs": "..." },
    "screenshot": "https://firecrawl.dev/screenshot.png"
  }
]`;

  const exampleMarkdown = `# Firecrawl

Firecrawl is a powerful web scraping
library that makes it easy to extract
data from websites.

## Installation

To install Firecrawl, run:`;

  const handleScrape = () => {
    setIsScraping(true);
    setTimeout(() => setIsScraping(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Status and Format Badges */}
      <div className="flex items-center gap-3 mb-4 justify-center flex-wrap">
        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-xs font-mono border border-green-500/30">
          [ 200 OK ]
        </span>
        <button
          onClick={() => setFormat("json")}
          className={`px-3 py-1 rounded-md text-xs font-mono border transition-colors ${
            format === "json"
              ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
              : "bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600"
          }`}
        >
          [ .JSON ]
        </button>
        <button
          onClick={() => setFormat("markdown")}
          className={`px-3 py-1 rounded-md text-xs font-mono border transition-colors ${
            format === "markdown"
              ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
              : "bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600"
          }`}
        >
          [ .MD ]
        </button>
        <button
          onClick={() => setActiveTab("scrape")}
          className={`px-3 py-1 rounded-md text-xs font-mono border transition-colors ${
            activeTab === "scrape"
              ? "bg-blue-500/20 text-blue-400 border-blue-500/50"
              : "bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-600"
          }`}
        >
          [ SCRAPE ]
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800 mb-6">
        <button
          onClick={() => setActiveTab("scrape")}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "scrape"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Scrape
          {activeTab === "scrape" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("search")}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "search"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Search
          <span className="ml-2 text-xs bg-green-500 text-black px-1.5 py-0.5 rounded">New</span>
          {activeTab === "search" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("crawl")}
          className={`px-4 py-3 text-sm font-medium transition-colors relative ${
            activeTab === "crawl"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Map Crawl
          {activeTab === "crawl" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></span>
          )}
        </button>
      </div>

      {/* URL Input and Scrape Button */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="flex-1 bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleScrape}
          disabled={isScraping}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {isScraping ? "Scraping..." : "Scrape"}
        </button>
      </div>

      {/* Output Display */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden">
        {format === "json" ? (
          <CodeBlock code={exampleJson} language="json" />
        ) : (
          <CodeBlock code={exampleMarkdown} language="markdown" />
        )}
      </div>
    </div>
  );
}
