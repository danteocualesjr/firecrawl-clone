export default function CorePrinciples() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-6">
            <span>·</span>
            <span>Core</span>
            <span>·</span>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-8">
            <span>//</span>
            <span>Built to outperform</span>
            <span>//</span>
          </div>
        </div>

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Core principles, proven performance
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built from the ground up to outperform traditional scrapers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* No proxy headaches */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">No proxy headaches</h3>
              <p className="text-gray-400 leading-relaxed">
                Reliable. Covers 96% of the web, including JS-heavy and protected pages. No proxies, no puppets, just clean data.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg border border-gray-800">
                <div className="flex items-center gap-3">
                  <span className="text-white font-medium">Firecrawl</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-green-400 text-sm font-semibold">96%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg border border-gray-800">
                <span className="text-gray-400">Puppeteer</span>
                <div className="flex items-center gap-3">
                  <div className="w-20 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-400 text-sm">60%</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg border border-gray-800">
                <span className="text-gray-400">cURL</span>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-2 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-400 text-sm">40%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Speed */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">Speed that feels invisible</h3>
              <p className="text-gray-400 leading-relaxed">
                Blazingly fast. Delivers results in less than 1 second, fast for real-time agents and dynamic apps.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                <div className="text-sm text-gray-400 mb-2">URL</div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-3 bg-green-500 rounded-full mb-2 w-full"></div>
                    <div className="text-green-400 text-sm font-semibold">0 ms</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                <div className="text-sm text-gray-400 mb-2">Crawl</div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-3 bg-green-500 rounded-full mb-2" style={{ width: '85%' }}></div>
                    <div className="text-green-400 text-sm font-semibold">150 ms</div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-800">
                <div className="text-sm text-gray-400 mb-2">Scrape</div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="h-3 bg-green-500 rounded-full mb-2" style={{ width: '90%' }}></div>
                    <div className="text-green-400 text-sm font-semibold">100 ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
