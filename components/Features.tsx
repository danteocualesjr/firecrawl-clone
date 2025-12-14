"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

type FeatureType = "scrape" | "search" | "crawl";
type LanguageType = "python" | "node" | "curl";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<FeatureType>("scrape");
  const [activeLanguage, setActiveLanguage] = useState<LanguageType>("python");

  const pythonCode = {
    scrape: `# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Scrape a website:
app.scrape('firecrawl.dev')`,
    search: `# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Search the web:
app.search('firecrawl scraping')`,
    crawl: `# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Crawl a website:
app.crawl('firecrawl.dev')`,
  };

  const nodeCode = {
    scrape: `// npm install firecrawl-js
import FirecrawlApp from 'firecrawl-js';

const app = new FirecrawlApp({ apiKey: 'fc-YOUR_API_KEY' });

// Scrape a website:
await app.scrapeUrl('firecrawl.dev');`,
    search: `// npm install firecrawl-js
import FirecrawlApp from 'firecrawl-js';

const app = new FirecrawlApp({ apiKey: 'fc-YOUR_API_KEY' });

// Search the web:
await app.search('firecrawl scraping');`,
    crawl: `// npm install firecrawl-js
import FirecrawlApp from 'firecrawl-js';

const app = new FirecrawlApp({ apiKey: 'fc-YOUR_API_KEY' });

// Crawl a website:
await app.crawlUrl('firecrawl.dev');`,
  };

  const curlCode = {
    scrape: `curl -X POST https://api.firecrawl.dev/v0/scrape \\
  -H "Authorization: Bearer fc-YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "firecrawl.dev"}'`,
    search: `curl -X POST https://api.firecrawl.dev/v0/search \\
  -H "Authorization: Bearer fc-YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "firecrawl scraping"}'`,
    crawl: `curl -X POST https://api.firecrawl.dev/v0/crawl \\
  -H "Authorization: Bearer fc-YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "firecrawl.dev"}'`,
  };

  const getCode = () => {
    if (activeLanguage === "python") return pythonCode[activeFeature];
    if (activeLanguage === "node") return nodeCode[activeFeature];
    return curlCode[activeFeature];
  };

  const markdownPreview = `# Firecrawl

Firecrawl is a powerful web scraping
library that makes it easy to extract
data from websites.

## Installation

To install Firecrawl, run:`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Start scraping today
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enhance your apps with industry leading web scraping and crawling capabilities.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveFeature("scrape")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeFeature === "scrape"
                ? "bg-blue-600 text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            Scrape
          </button>
          <button
            onClick={() => setActiveFeature("search")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeFeature === "search"
                ? "bg-blue-600 text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            Search
          </button>
          <button
            onClick={() => setActiveFeature("crawl")}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeFeature === "crawl"
                ? "bg-blue-600 text-white"
                : "bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            Crawl
          </button>
        </div>

        {/* Code Tabs and Display */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6">
          {/* Language Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveLanguage("python")}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                activeLanguage === "python"
                  ? "bg-blue-600 text-white"
                  : "bg-[#0a0a0a] text-gray-400 hover:text-white border border-gray-700"
              }`}
            >
              Python
            </button>
            <button
              onClick={() => setActiveLanguage("node")}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                activeLanguage === "node"
                  ? "bg-blue-600 text-white"
                  : "bg-[#0a0a0a] text-gray-400 hover:text-white border border-gray-700"
              }`}
            >
              Node.js
            </button>
            <button
              onClick={() => setActiveLanguage("curl")}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                activeLanguage === "curl"
                  ? "bg-blue-600 text-white"
                  : "bg-[#0a0a0a] text-gray-400 hover:text-white border border-gray-700"
              }`}
            >
              Curl
            </button>
          </div>

          {/* Code Display */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <CodeBlock code={getCode()} language={activeLanguage === "curl" ? "bash" : activeLanguage} />
            </div>
            <div className="bg-[#0a0a0a] rounded-lg p-6 border border-gray-800">
              <div className="text-sm text-gray-400 mb-4 font-mono">[ .MD ]</div>
              <CodeBlock code={markdownPreview} language="markdown" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

