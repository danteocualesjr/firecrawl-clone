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
    { question: "What is the difference between Firecrawl and other web scrapers?", answer: "Firecrawl is built specifically for LLM consumption, handles JavaScript-heavy sites without proxies, and is much faster than traditional scrapers." },
    { question: "What is the difference between the open-source version and the hosted version?", answer: "The open-source version requires self-hosting and setup, while the hosted version provides managed infrastructure, API access, and additional features." },
  ],
  "Scraping & Crawling": [
    { question: "How does Firecrawl handle dynamic content on websites?", answer: "Firecrawl uses advanced techniques to handle JavaScript-rendered content without needing proxies or browser automation." },
    { question: "Why is it not crawling all the pages?", answer: "Firecrawl respects robots.txt and may have rate limits. Check your crawl settings and website permissions." },
    { question: "Can Firecrawl crawl websites without a sitemap?", answer: "Yes, Firecrawl can discover and crawl pages without a sitemap by following links." },
    { question: "What formats can Firecrawl convert web data into?", answer: "Firecrawl can output data in Markdown, JSON, and screenshots." },
    { question: "How does Firecrawl ensure the cleanliness of the data?", answer: "Firecrawl uses advanced parsing and cleaning algorithms to extract clean, structured data from web pages." },
    { question: "Is Firecrawl suitable for large-scale data scraping projects?", answer: "Yes, Firecrawl is designed to handle large-scale scraping with proper rate limiting and queue management." },
    { question: "Does it respect robots.txt?", answer: "Yes, Firecrawl respects robots.txt by default to ensure ethical scraping practices." },
    { question: "What measures does Firecrawl take to handle web scraping challenges like rate limits and caching?", answer: "Firecrawl includes intelligent rate limiting, caching mechanisms, and retry logic to handle common web scraping challenges." },
    { question: "Does Firecrawl handle captcha or authentication?", answer: "Firecrawl handles basic authentication, but complex captcha solutions may require additional configuration." },
  ],
  "API Related": [
    { question: "Where can I find my API key?", answer: "You can find your API key in your Firecrawl dashboard after signing up." },
  ],
  Billing: [
    { question: "Is Firecrawl free?", answer: "Firecrawl offers a free tier with limited credits, and paid plans for higher usage." },
    { question: "Is there a pay-per-use plan instead of monthly?", answer: "Yes, Firecrawl offers flexible billing options including pay-as-you-go plans." },
    { question: "Do credits roll over to the next month?", answer: "Credits reset each month and do not roll over on most plans." },
    { question: "How many credits do scraping and crawling cost?", answer: "Credit costs vary by operation type. Check the pricing page for detailed information." },
    { question: "Do you charge for failed requests?", answer: "Failed requests may still consume credits depending on the type of failure. Check the pricing documentation for details." },
    { question: "What payment methods do you accept?", answer: "Firecrawl accepts major credit cards and other standard payment methods." },
  ],
};

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>("General");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-6">
            <span>·</span>
            <span>FAQ</span>
            <span>·</span>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>//</span>
            <span>FAQ</span>
            <span>//</span>
          </div>
        </div>

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
                        <p className="mt-3 text-gray-400 leading-relaxed">{item.answer}</p>
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
