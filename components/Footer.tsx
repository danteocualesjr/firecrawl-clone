import { Github, Linkedin, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const productLinks = ["Playground", "Extract", "Pricing", "Templates", "Changelog"];
  const useCaseLinks = ["AI Platforms", "Lead Enrichment", "SEO Teams", "Deep Research", "Competitive Intelligence"];
  const docLinks = ["Getting started", "API Reference", "Integrations", "Examples", "SDKs"];
  const companyLinks = ["Blog", "Careers", "Creator & OSS program", "Student program"];

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Use Cases</h3>
            <ul className="space-y-2">
              {useCaseLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Documentation</h3>
            <ul className="space-y-2">
              {docLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="text-gray-400 text-sm">© 2025 Firecrawl</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Report Abuse
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>Backed by</span>
                <span className="font-semibold text-white">Y Combinator</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>SOC II · Type 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

