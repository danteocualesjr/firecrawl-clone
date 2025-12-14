export default function Integrations() {
  const integrations = Array.from({ length: 12 }, (_, i) => ({
    name: `Integration ${i + 1}`,
    logo: `Logo ${i + 1}`,
  }));

  const githubActivity = [
    { label: "[python-SDK] improvs/async", pr: "#1337", date: "Apr 18, 2025", author: "rafaelsideguide" },
    { label: "feat(extract): cost limit", pr: "#1473", date: "Apr 17, 2025", author: "rafaelsideguide" },
    { label: "feat(scrape): get job result from GCS, avoid Redis", pr: "#1461", date: "Apr 15, 2025", author: "mogery" },
    { label: "Extract v2/rerank improvs", pr: "#1437", date: "Apr 11, 2025", author: "rafaelsideguide" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Integrations Grid */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Use well-known tools</h2>
          <p className="text-gray-400 text-lg">
            Already fully integrated with the greatest existing tools and workflows.
          </p>
          <a href="#" className="inline-block text-blue-400 hover:text-blue-300 font-medium">
            See all integrations →
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 flex items-center justify-center h-24 hover:border-blue-500 transition-colors"
            >
              <span className="text-gray-500 text-sm">{integration.name}</span>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <div>
                <div className="font-bold text-lg">mendableai/firecrawl</div>
                <div className="text-sm text-gray-400">Public</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold mb-1">69.7K</div>
              <div className="text-sm text-gray-400">⭐</div>
            </div>
          </div>

          {/* GitHub Activity */}
          <div className="space-y-3 mb-6 border-t border-gray-800 pt-6">
            {githubActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="flex-1 flex items-center gap-2">
                  <span className="text-blue-400 hover:text-blue-300 cursor-pointer">{activity.label}</span>
                  <span className="text-gray-600 hover:text-gray-400 cursor-pointer">{activity.pr}</span>
                </div>
                <span className="text-gray-500">·</span>
                <span className="text-gray-500">{activity.date}</span>
                <span className="text-gray-500">·</span>
                <span className="text-gray-400">{activity.author}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-800">
            <div className="text-sm text-blue-400">
              <span className="font-semibold">+90</span> more
            </div>
            <div className="text-left">
              <div className="text-lg font-bold mb-2">Open Source</div>
              <div className="text-2xl font-bold mb-3">Code you can trust</div>
              <p className="text-sm text-gray-400 mb-4 max-w-md">
                Developed transparently and collaboratively. Join our community of contributors.
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 font-medium text-sm"
              >
                Check out our repo →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
