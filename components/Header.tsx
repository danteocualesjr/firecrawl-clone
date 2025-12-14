"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Github, Flame } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Products", hasDropdown: true },
    { name: "Playground", hasDropdown: false },
    { name: "Docs", hasDropdown: false },
    { name: "Pricing", hasDropdown: false },
    { name: "Integrations", hasDropdown: true },
    { name: "Blog", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Flame className="w-6 h-6 text-orange-500" fill="currentColor" />
              <span className="text-xl font-bold text-gray-900">Firecrawl</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium flex items-center gap-1"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              <Github size={20} />
              <span>69.7K</span>
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>
            ))}
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Github size={20} />
              <span>69.7K</span>
            </a>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
              Sign up
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

