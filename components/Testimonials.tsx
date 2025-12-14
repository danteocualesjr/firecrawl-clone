"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  handle: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Reibman",
    handle: "@AlexReibman",
    text: "Moved our internal agent's web scraping tool from Apify to Firecrawl because it benchmarked 50x faster with AgentOps.",
  },
  {
    name: "Tom - Morpho",
    handle: "@TomReppelin",
    text: "I found gold today. Thank you @firecrawl_dev",
  },
  {
    name: "Morgan Linton",
    handle: "@morganlinton",
    text: "If you're coding with AI, and haven't discovered @firecrawl_dev yet, prepare to have your mind blown 🤯",
  },
  {
    name: "Chris DeWeese",
    handle: "@chrisdeweese_",
    text: "Started using @firecrawl_dev for a project, I wish I used this sooner.",
  },
  {
    name: "Bardia",
    handle: "@thepericulum",
    text: "The Firecrawl team ships. I wanted types for their node SDK, and less than an hour later, I got them.",
  },
  {
    name: "Matt Busigin",
    handle: "@mbusigin",
    text: "Firecrawl is dope. Congrats guys 👏",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.handle}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

