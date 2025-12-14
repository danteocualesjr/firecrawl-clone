"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqCategories: { [key: string]: FAQItem[] } = {
  General: [
    { question: "What is Firecrawl?", answer: "Firecrawl is a web scraping API that converts websites into LLM-ready data formats like Markdown and JSON." },
    { question: "What sites work?", answer: "Firecrawl works with most websites, including JavaScript-heavy sites and protected pages." },
    { question: "Who can benefit from using Firecrawl?", answer: "Developers, data scientists, AI engineers, and anyone who needs to extract structured data from websites." },
    { question: "Is Firecrawl open-source?", answer: "Yes, Firecrawl is open-source and available on GitHub." },
  ],
  "Scraping & Crawling": [
    { question: "How does Firecrawl handle dynamic content on websites?", answer: "Firecrawl uses advanced techniques to handle JavaScript-rendered content without needing proxies or browser automation." },
    { question: "Why is it not crawling all the pages?", answer: "Firecrawl respects robots.txt and may have rate limits. Check your crawl settings and website permissions." },
    { question: "Can Firecrawl crawl websites without a sitemap?", answer: "Yes, Firecrawl can discover and crawl pages without a sitemap by following links." },
    { question: "What formats can Firecrawl convert web data into?", answer: "Firecrawl can output data in Markdown, JSON, and screenshots." },
  ],
  "API Related": [
    { question: "Where can I find my API key?", answer: "You can find your API key in your Firecrawl dashboard after signing up." },
  ],
  Billing: [
    { question: "Is Firecrawl free?", answer: "Firecrawl offers a free tier with limited credits, and paid plans for higher usage." },
    { question: "Is there a pay-per-use plan instead of monthly?", answer: "Yes, Firecrawl offers flexible billing options including pay-as-you-go plans." },
    { question: "Do credits roll over to the next month?", answer: "Credits reset each month and do not roll over on most plans." },
  ],
};

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>("General");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about Firecrawl.
          </p>
        </div>

        <div className="space-y-6">
          {Object.entries(faqCategories).map(([category, items]) => (
            <div key={category} className="border border-gray-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenCategory(openCategory === category ? null : category)}
                className="w-full px-6 py-4 bg-[#1a1a1a] flex items-center justify-between hover:bg-[#252525] transition-colors"
              >
                <span className="font-semibold text-lg">{category}</span>
                <ChevronDown
                  className={`transition-transform ${openCategory === category ? "rotate-180" : ""}`}
                />
              </button>
              {openCategory === category && (
                <div className="divide-y divide-gray-800">
                  {items.map((item, index) => (
                    <div key={index} className="px-6 py-4">
                      <button
                        onClick={() => setOpenQuestion(openQuestion === item.question ? null : item.question)}
                        className="w-full flex items-start justify-between gap-4 text-left"
                      >
                        <span className="font-medium text-white flex-1">{item.question}</span>
                        <ChevronDown
                          className={`flex-shrink-0 transition-transform ${openQuestion === item.question ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openQuestion === item.question && (
                        <p className="mt-3 text-gray-400">{item.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

