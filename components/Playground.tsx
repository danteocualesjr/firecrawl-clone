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

To install Firecrawl, run:

\`\`\`bash
npm install firecrawl
\`\`\``;

  const handleScrape = () => {
    setIsScraping(true);
    setTimeout(() => setIsScraping(false), 2000);
  };

  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 space-y-4">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800">
        <button
          onClick={() => setActiveTab("scrape")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "scrape"
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Scrape
        </button>
        <button
          onClick={() => setActiveTab("search")}
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            activeTab === "search"
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Search
          <span className="ml-2 text-xs bg-green-500 text-black px-1.5 py-0.5 rounded">New</span>
        </button>
        <button
          onClick={() => setActiveTab("crawl")}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "crawl"
              ? "text-white border-b-2 border-blue-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Map Crawl
        </button>
      </div>

      {/* URL Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="flex-1 bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleScrape}
          disabled={isScraping}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
        >
          {isScraping ? "Scraping..." : "Scrape"}
        </button>
      </div>

      {/* Format Selector */}
      <div className="flex gap-2">
        <button
          onClick={() => setFormat("json")}
          className={`px-4 py-1.5 text-sm rounded-lg transition-colors ${
            format === "json"
              ? "bg-blue-600 text-white"
              : "bg-[#0a0a0a] text-gray-400 hover:text-white border border-gray-700"
          }`}
        >
          JSON
        </button>
        <button
          onClick={() => setFormat("markdown")}
          className={`px-4 py-1.5 text-sm rounded-lg transition-colors ${
            format === "markdown"
              ? "bg-blue-600 text-white"
              : "bg-[#0a0a0a] text-gray-400 hover:text-white border border-gray-700"
          }`}
        >
          .MD
        </button>
      </div>

      {/* Output Display */}
      <div className="mt-4">
        {format === "json" ? (
          <CodeBlock code={exampleJson} language="json" />
        ) : (
          <CodeBlock code={exampleMarkdown} language="markdown" />
        )}
      </div>
    </div>
  );
}

